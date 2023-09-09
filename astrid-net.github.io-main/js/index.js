const firstContainer = document.getElementById("first-container");
const secondContainer = document.getElementById("second-container");
const thirdContainer = document.getElementById("third-container");
const fourthContainer = document.getElementById("fourth-container");
const scrolling = (position) => {
	let firstOpc, secondOpc, thirdOpc, fourthOpc;
	firstOpc =
		(firstContainer.offsetHeight - position) /
		firstContainer.offsetHeight;

	if (position < firstContainer.offsetHeight) {
		secondOpc = (position + 150) / firstContainer.offsetHeight;
	} else {
		secondOpc =
			(secondContainer.offsetHeight +
				firstContainer.offsetHeight -
				position) /
			secondContainer.offsetHeight;
		if (window.innerWidth <= 500) {
			secondOpc += 0.3;
		}
		if (window.innerHeight <= 700) {
			secondOpc += 0.1;
		}
	}
	if (
		position <
		firstContainer.offsetHeight + secondContainer.offsetHeight
	) {
		thirdOpc =
			(position + 150) /
			(firstContainer.offsetHeight + secondContainer.offsetHeight);
	} else {
		thirdOpc =
			(thirdContainer.offsetHeight +
				firstContainer.offsetHeight +
				secondContainer.offsetHeight -
				position) /
			thirdContainer.offsetHeight;
		if (window.innerWidth <= 500) {
			thirdOpc += 0.2;
		}
	}
	if (
		position <
		firstContainer.offsetHeight +
			secondContainer.offsetHeight +
			thirdContainer.offsetHeight
	) {
		fourthOpc =
			(position + 150) /
			(secondContainer.offsetHeight +
				thirdContainer.offsetHeight +
				firstContainer.offsetHeight);
	} else {
		fourthOpc =
			(fourthContainer.offsetHeight +
				thirdContainer.offsetHeight +
				firstContainer.offsetHeight +
				secondContainer.offsetHeight -
				position) /
			fourthContainer.offsetHeight;
	}

	if (secondOpc < 0.8) {
		secondOpc -= 0.2;
		if (secondOpc < 0.1) {
			secondOpc = 0.1;
		}
	}
	if (thirdOpc < 0.8) {
		thirdOpc -= 0.2;
		if (thirdOpc < 0.1) {
			thirdOpc = 0.1;
		}
	}
	if (fourthOpc < 0.5) {
		fourthOpc -= 0.5 - fourthOpc;
		if (fourthOpc < 0.1) {
			fourthOpc = 0.1;
		}
	}

	firstContainer.style.opacity = firstOpc;
	secondContainer.style.opacity = secondOpc;
	thirdContainer.style.opacity = thirdOpc;
	fourthContainer.style.opacity = fourthOpc;
};

const panel = document.querySelector(".homeSecondPanel");

panel.onscroll = function (e) {
	scrolling(panel.scrollTop);
};
