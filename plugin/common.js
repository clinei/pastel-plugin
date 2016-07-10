"use strict";
const storage = require("../storage");

const MessageParser = (function MessageParser() {
	class MessageParserImpl {
		constructor() {
			this.message = this.message;
		}
		message(data) {
			if (typeof data === "string" || data instanceof String) {
				return data;
			} else {
				console.log(data);
				throw new Error(`data passed to parser.message is not a String, it is ${data}`);
			}
		}
	}
	return MessageParserImpl;
}());


class FlairParser {
	constructor() {
		this.flair = this.flair;
	}
	flair() {
		return storage.get("flair");
	}
}


module.exports = {
	MessageParser: MessageParser,
	FlairParser: FlairParser,
};
