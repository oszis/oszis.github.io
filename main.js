	var btnMike = document.querySelector('.btn-mike'),
		btnTheBand = document.querySelector('.btn-band'),
		popup = document.querySelector('.popup-container'),
		closePopup = document.querySelector('.popup-close');
	function error(event) {
		event.preventDefault();

		popup.classList.add('active');
	}

	function close() {
		popup.classList.remove('active');
	}

	btnMike.addEventListener('click', error, false);
	btnTheBand.onclick = error;
	closePopup.onclick = popup.onclick = close;