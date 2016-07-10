"use strict";
function miniDateFormat(foobar) {
	const date = new Date();

	const hours = date.getHours();
	const minutes = date.getMinutes();
	const seconds = date.getSeconds();

	if (foobar) {
		return [
			(hours +11) %12 +1,
			":",
			minutes < 10 ? "0" : "",
			minutes,
			" ",
			hours < 12 ? "am" : "pm",
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
			seconds,
		].join("");
	}
}

module.exports = {
	miniDateFormat: miniDateFormat,
};
