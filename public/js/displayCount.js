(function(exports) {

	function updateDisplayCount(num) {
		document.getElementById('sheep_count')
			.innerHTML = num.toString();
	}
	
	exports.updateDisplayCount = updateDisplayCount;

})(this);



