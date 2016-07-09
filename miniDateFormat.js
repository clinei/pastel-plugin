function miniDateFormat(foobar) {
	var date = new Date();
	
	var hours = date.getHours();
	var minutes = date.getMinutes();
	var seconds = date.getSeconds();

	if (foobar) {
		seconds = (hours +11) %12 +1;
		return [
			seconds,
			":",
			minutes < 10 ? "0" : "",
			minutes,
			" ",
			hours < 12 ? "am" : "pm"
		].join("");
	} else {
		return [
			hours < 10 ? "0" : "",
			hours,
			":",
			minutes < 10 ? "0" : "",
			minutes,
			":",
			seconds < 10 ? "0" : "",
			seconds
		].join("");
	}
}