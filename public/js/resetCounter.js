(function() {

	document.getElementById("reset")
		.addEventListener("click", function() {
			document.cookie = "counter=0";
			display.updateCount(0);
	});
		
})();
