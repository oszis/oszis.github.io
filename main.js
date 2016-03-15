	var btn = document.querySelector('.btn-mike'),
		popup = document.querySelector('.popup-container'),
		closePopup = document.querySelector('.popup-close');
	function error(event) {
		event.preventDefault();

		popup.classList.add('active');
	}

	function close() {
		popup.classList.remove('active');
	}

	btn.addEventListener('click', error, false);

	closePopup.onclick = popup.onclick = close;