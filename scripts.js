const homeButton = document.querySelector('.home-button');
const homeList = document.querySelector('.home-list');

function toggleHome() {
	homeList.classList.toggle('on');
}

homeButton.addEventListener('click', toggleHome);
