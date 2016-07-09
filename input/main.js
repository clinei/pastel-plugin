"use strict";
window.input = (function closure_input() {

	function _sendMessage(message) {
		window.socket.emit("message", {
			"message": message,
			"flair": "flair",
		});
	}

	return {
		sendMessage: _sendMessage,
	};

}());
