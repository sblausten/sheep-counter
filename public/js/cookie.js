var cookie = (function() {

	function getCookieValue() {
		return parseInt(document.cookie.split("=")[1]);
	}

	function setCookieValue(int) {
		document.cookie = "counter=" + int;
	}

	function incrementCookieValue() {
		var oldValue = getCookieValue();
		return oldValue += 1;
	}

	return {
		getValue: getCookieValue,
		setValue: setCookieValue,
		incrementValue: incrementCookieValue
	}

})();
