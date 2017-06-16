(function() {
	
	document.addEventListener("DOMContentLoaded", function() {
		if (document.cookie.indexOf('counter') == -1 ) {
			cookie.setValue(0);
		}
		display.updateCount(cookie.getValue());
	});

	document.getElementById("add_sheep")
		.addEventListener("click", function() {
			cookie.setValue(cookie.incrementValue());
			audio.play();
			display.updateCount(cookie.getValue());
		});

})();
