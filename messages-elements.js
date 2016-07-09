"use strict";
window.messages_elements = (function closure_messages_elements() {

	function appendTextContent(node, text) {
		node.appendChild(document.createTextNode(text));
	}


	function _createDate(data) {
		const element = document.createElement("span");
		element.classList.add("date");

		data;
		appendTextContent(element, window.miniDateFormat(false));
		appendTextContent(element, "\xA0");

		return element;
	}
	function _createHat(data) {
		const element = document.createElement("img");
		element.classList.add("hat");

		const hat_prefix = "https://awakens.me/hats";
		if (typeof data.hat === "string" && data.hat.length > 0) {
			switch (data.hat) {
			case "Doofus":
			case "Loading":
			case "Pizza":
			case "Rick":
			case "Swastika":
			case "Cow":
				element.setAttribute("src", `${hat_prefix}/${data.hat}.gif`);
				break;
			default:
				element.setAttribute("src", `${hat_prefix}/${data.hat}.png`);
				break;
			}

			element.setAttribute("height", "30px");
			element.setAttribute("width", "30px");
			element.setAttribute("alt", data.hat.toLowerCase());
		} else {
			element.setAttribute("height", "0px");
			element.setAttribute("width", "0px");
			element.setAttribute("alt", "");
			element.setAttribute("src", `${hat_prefix}/none.png`);
		}

		return element;
	}
	function _createNick(data) {
		const element = document.createElement("span");
		element.classList.add("nick");

		appendTextContent(element, data.nick);
		appendTextContent(element, ":\xA0");

		return element;
	}
	function _createMessage(data) {
		const element = document.createElement("span");
		element.classList.add("message");

		switch (data.style) {
		case "chat":
		case "personal-window":
		case "personal":
			appendTextContent(element, data.message);
			break;
		case "error":
		case "general":
		case "info":
		case "note":
			appendTextContent(element, data.message);
			break;
		default:
			break;
		}

		return element;
	}
	function _createContainer(data) {
		const element = document.createElement("div");
		element.classList.add(`style-${data.style}`);

		return element;
	}
	function _appendToWindow(element) {
		const foobar = document.createElement("li");
		foobar.appendChild(element);
		document.getElementById("main-window")
			.firstElementChild
			.firstElementChild
			.appendChild(foobar);
	}


	return {
		createDate: _createDate,
		createHat: _createHat,
		createNick: _createNick,
		createMessage: _createMessage,
		createContainer: _createContainer,
		appendToWindow: _appendToWindow,
	};

}());
