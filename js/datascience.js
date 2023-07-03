var firstElement = document.querySelector(".first-timeline");
var secondElement = document.querySelector(".second-timeline");
const line = document.querySelectorAll(".line");
function isInViewport(element) {
	var bounding = element.getBoundingClientRect();
	if (
		bounding.top >= 0 &&
		bounding.left >= 0 &&
		bounding.right <=
			(window.innerWidth || document.documentElement.clientWidth) &&
		bounding.bottom <=
			(window.innerHeight || document.documentElement.clientHeight)
	) {
		return true;
	} else {
		return false;
	}
}
window.addEventListener(
	"scroll",
	function (event) {
		if (isInViewport(firstElement)) {
			line[0].classList.add("show");
		}
	},
	false
);
window.addEventListener(
	"scroll",
	function (event) {
		if (isInViewport(secondElement)) {
			line[1].classList.add("show");
		}
	},
	false
);

const firstContainer = document.getElementById("first-container");
const secondContainer = document.getElementById("second-container");
const thirdContainer = document.getElementById("third-container");
const fourthContainer = document.getElementById("fourth-container");

const scrolling = (position) => {
	let firstOpc, secondOpc, thirdOpc, fourthOpc;
	firstOpc =
		(firstContainer.offsetHeight - position) /
		firstContainer.offsetHeight;

	if (position - 100 < firstContainer.offsetHeight) {
		secondOpc = position / firstContainer.offsetHeight;
	} else {
		secondOpc =
			(secondContainer.offsetHeight +
				firstContainer.offsetHeight -
				position +
				100) /
			secondContainer.offsetHeight;
	}
	if (
		position - 300 <
		firstContainer.offsetHeight + secondContainer.offsetHeight
	) {
		thirdOpc =
			position /
			(firstContainer.offsetHeight +
				secondContainer.offsetHeight +
				200);
	} else {
		thirdOpc =
			(thirdContainer.offsetHeight +
				firstContainer.offsetHeight +
				secondContainer.offsetHeight -
				position +
				200) /
			thirdContainer.offsetHeight;
		thirdOpc += 0.4;
		if (window.innerWidth <= 800) {
			thirdOpc += 0.1;
		}
	}
	if (
		position - 500 <
		firstContainer.offsetHeight +
			secondContainer.offsetHeight +
			thirdContainer.offsetHeight
	) {
		fourthOpc =
			position /
			(secondContainer.offsetHeight +
				thirdContainer.offsetHeight +
				firstContainer.offsetHeight +
				400);
	} else {
		fourthOpc =
			(fourthContainer.offsetHeight +
				thirdContainer.offsetHeight +
				firstContainer.offsetHeight +
				500 +
				secondContainer.offsetHeight -
				position) /
			fourthContainer.offsetHeight;
		if (window.innerWidth <= 500) {
			fourthOpc += 0.2;
		}
		if (window.innerWidth <= 350) {
			fourthOpc += 0.1;
		}
	}

	firstContainer.style.opacity = firstOpc > 0.1 ? firstOpc : 0.1;
	secondContainer.style.opacity = secondOpc > 0.1 ? secondOpc : 0.1;
	thirdContainer.style.opacity = thirdOpc > 0.1 ? thirdOpc : 0.1;
	fourthContainer.style.opacity = fourthOpc > 0.1 ? fourthOpc : 0.1;
};

window.onscroll = function (e) {
	scrolling(window.pageYOffset);
};
