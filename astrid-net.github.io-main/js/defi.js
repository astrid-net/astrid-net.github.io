const firstContainer = document.getElementById("first-container");
const secondContainer = document.getElementById("second-container");

const scrolling = (position) => {
	let firstOpc, secondOpc;
	firstOpc =
		(firstContainer.offsetHeight - position) /
		firstContainer.offsetHeight;

	if (position - 200 < firstContainer.offsetHeight) {
		secondOpc = (position + 150) / firstContainer.offsetHeight;
	} else {
		secondOpc =
			(secondContainer.offsetHeight +
				firstContainer.offsetHeight -
				position +
				200) /
			secondContainer.offsetHeight;
		if (window.innerWidth <= 400) {
			secondOpc += 0.1;
		}
	}

	firstContainer.style.opacity = firstOpc > 0.1 ? firstOpc : 0.1;
	secondContainer.style.opacity = secondOpc > 0.1 ? secondOpc : 0.1;
};

window.onscroll = function (e) {
	scrolling(window.pageYOffset);
};
