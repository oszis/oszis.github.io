(function(){
	var dropdownBtn = document.querySelectorAll('.dropdown .dropdown-btn');
	for (var i = 0; i < dropdownBtn.length; i++) {
		dropdownBtn[i].onclick = function() {
			this.parentElement.classList.toggle('active');
		}
	}
})();