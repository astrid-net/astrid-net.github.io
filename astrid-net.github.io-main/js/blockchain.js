const firstContainer = document.getElementById("first-container");
const secondContainer = document.getElementById("second-container");
const thirdContainer = document.getElementById("third-container");
const fourthContainer = document.getElementById("fourth-container");
const fifthContainer = document.getElementById("fifth-container");
const sixthContainer = document.getElementById("sixth-container");

const scrolling = (position) => {
	let firstOpc, secondOpc, thirdOpc, fourthOpc, fifthOpc, sixthOpc;
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
	}
	if (
		position - 200 <
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
		if (window.innerWidth <= 800) {
			thirdOpc += 0.6;
		}
	}
	if (
		position - 400 <
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
				400 +
				secondContainer.offsetHeight -
				position) /
			fourthContainer.offsetHeight;
	}
	if (
		position - 600 <
		firstContainer.offsetHeight +
			secondContainer.offsetHeight +
			thirdContainer.offsetHeight +
			fourthContainer.offsetHeight
	) {
		fifthOpc =
			position /
			(secondContainer.offsetHeight +
				thirdContainer.offsetHeight +
				firstContainer.offsetHeight +
				fourthContainer.offsetHeight +
				600);
	} else {
		fifthOpc =
			(firstContainer.offsetHeight +
				secondContainer.offsetHeight +
				thirdContainer.offsetHeight +
				fourthContainer.offsetHeight +
				fifthContainer.offsetHeight +
				600 -
				position) /
			fifthContainer.offsetHeight;
	}
	if (
		position - 800 <
		firstContainer.offsetHeight +
			secondContainer.offsetHeight +
			thirdContainer.offsetHeight +
			fourthContainer.offsetHeight +
			fifthContainer.offsetHeight
	) {
		sixthOpc =
			position /
			(firstContainer.offsetHeight +
				secondContainer.offsetHeight +
				thirdContainer.offsetHeight +
				fourthContainer.offsetHeight +
				fifthContainer.offsetHeight +
				800);
	} else {
		sixthOpc =
			(firstContainer.offsetHeight +
				secondContainer.offsetHeight +
				thirdContainer.offsetHeight +
				fourthContainer.offsetHeight +
				fifthContainer.offsetHeight +
				sixthContainer.offsetHeight +
				800 -
				position) /
			sixthContainer.offsetHeight;
	}

	firstContainer.style.opacity = firstOpc > 0.1 ? firstOpc : 0.1;
	secondContainer.style.opacity = secondOpc > 0.1 ? secondOpc : 0.1;
	thirdContainer.style.opacity = thirdOpc > 0.1 ? thirdOpc : 0.1;
	fourthContainer.style.opacity = fourthOpc > 0.1 ? fourthOpc : 0.1;
	fifthContainer.style.opacity = fifthOpc > 0.1 ? fifthOpc : 0.1;
	sixthContainer.style.opacity = sixthOpc > 0.1 ? sixthOpc : 0.1;
};

window.onscroll = function (e) {
	scrolling(window.pageYOffset);
};
