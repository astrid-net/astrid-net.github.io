$(document).ready(function () {
	$(".switchPanelButton").click(function () {
		$(".homeFirstPanel").css("top", "-100%");
		$(".homeSecondPanel").css("top", "0%");
	});
});

$(document).ready(function () {
	$(".responsiveMenuBtn").click(function () {
		$(".responsiveMenuFrame").fadeIn();
		$(".responsiveMenuBtn").fadeOut();
	});
});
$(document).ready(function () {
	$("#close").click(function () {
		$(".responsiveMenuFrame").fadeOut();
		$(".responsiveMenuBtn").fadeIn();
	});
});

$(document).ready(function () {
	$("#responsiveServices").click(function () {
		$("#serviceSubBtn1").fadeToggle();
		$("#serviceSubBtn2").fadeToggle();
	});
});

$(document).ready(function () {
	$("#responsiveProducts").click(function () {
		$("#productSubBtn1").fadeToggle();
		$("#productSubBtn2").fadeToggle();
	});
});

const form = document.forms["contact-form"];

if (form) {
	document.querySelectorAll(".select-input").forEach((el) => {
		el.addEventListener("change", () => {
			el.style.color = "white";
		});
	});
	const scriptURL =
		"https://script.google.com/macros/s/AKfycbya_8Ql5cEgIVx-KelD6XbnTR_UKeBV1pwpbYNAye1nkdJ7I5W6EBlq6Ggrn_Yy_U5lcA/exec";

	const loading = document.getElementById("loading-container");
	const submitted = document.getElementById("submit-container");
	submitted.style.height = `${form.offsetHeight}px`;

	form.addEventListener("submit", (e) => {
		e.preventDefault();
		loading.style.display = "flex";
		fetch(scriptURL, { method: "POST", body: new FormData(form) })
			.then(() => {
				form.classList.add("fade");
				loading.style.display = "none";
				setTimeout(() => {
					form.style.display = "none";
					submitted.style.display = "block";
				}, 1000);
			})
			.catch((error) => {
				loading.style.display = "none";
				window.alert("Form Submission Failed Please Try Again !");
				console.log(error);
			});
	});
}
