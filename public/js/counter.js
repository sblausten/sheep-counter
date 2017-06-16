
(function() {
	
	document.addEventListener("DOMContentLoaded", function() {
		if (document.cookie.indexOf('counter') == -1 ) {
			document.cookie = "counter=0";
		}
		updateDisplayCount(getCookieValue());
	});

	document.getElementById("add_sheep")
		.addEventListener("click", function() {
			var count = getCookieValue();
			count += 1;
			document.cookie = "counter=" + count;
			audio.play();
			updateDisplayCount(count);
		});

	document.getElementById("reset")
		.addEventListener("click", function() {
			document.cookie = "counter=0";
			updateDisplayCount(0);
	});

	function getCookieValue() {
		return parseInt(document.cookie.split("=")[1]);
	}

})();
