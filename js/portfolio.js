let currentIndex = 0;
const workContainer = document.querySelectorAll(".work-container");
const totalCards = workContainer.length;

document
	.getElementById("left-button")
	.addEventListener("click", () => {
		if (currentIndex == 0) {
			currentIndex = totalCards - 1;
		} else {
			currentIndex--;
		}
		const currentDisplay = document.querySelector(".show");
		currentDisplay.classList.add("swipe-left");
		setTimeout(() => {
			currentDisplay.classList.remove("show");
			currentDisplay.classList.remove("swipe-left");
			workContainer[currentIndex].classList.add("show");
		}, 1500);
	});

document
	.getElementById("right-button")
	.addEventListener("click", () => {
		if (currentIndex == totalCards - 1) {
			currentIndex = 0;
		} else {
			currentIndex++;
		}
		const currentDisplay = document.querySelector(".show");
		currentDisplay.classList.add("swipe-right");
		setTimeout(() => {
			currentDisplay.classList.remove("show");
			currentDisplay.classList.remove("swipe-right");
			workContainer[currentIndex].classList.add("show");
		}, 1500);
	});
// workContainer[0].classList.add("show");
