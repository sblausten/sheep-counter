var display = (function() {

	function updateCount(num) {
		document.getElementById('sheep_count')
			.innerHTML = num.toString();
	}
	
	return { updateCount: updateCount };

})();
