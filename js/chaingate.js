const firstContainer = document.getElementById("first-container");
const secondContainer = document.getElementById("second-container");
const thirdContainer = document.getElementById("third-container");

const scrolling = (position) => {
	let firstOpc, secondOpc, thirdOpc;
	firstOpc =
		(firstContainer.offsetHeight - position) /
		firstContainer.offsetHeight;

	if (position - 150 < firstContainer.offsetHeight) {
		secondOpc = (position + 150) / firstContainer.offsetHeight;
	} else {
		secondOpc =
			(secondContainer.offsetHeight +
				firstContainer.offsetHeight -
				position +
				150) /
			secondContainer.offsetHeight;
	}
	if (
		position - 150 <
		firstContainer.offsetHeight + secondContainer.offsetHeight
	) {
		thirdOpc =
			position /
			(firstContainer.offsetHeight + secondContainer.offsetHeight);
	} else {
		thirdOpc =
			(thirdContainer.offsetHeight +
				firstContainer.offsetHeight +
				secondContainer.offsetHeight -
				position +
				150) /
			thirdContainer.offsetHeight;
	}

	firstContainer.style.opacity = firstOpc > 0.1 ? firstOpc : 0.1;
	secondContainer.style.opacity = secondOpc > 0.1 ? secondOpc : 0.1;
	thirdContainer.style.opacity = thirdOpc > 0.1 ? thirdOpc : 0.1;
};

window.onscroll = function (e) {
	scrolling(window.pageYOffset);
};
