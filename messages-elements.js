window.messages_elements = (function closure_messages_elements() { "use strict";

function appendTextContent(node, text) {
	node.appendChild(document.createTextNode(text));
}


function _createDateElement(message) {
	var element = document.createElement("span");
	element.classList.add("date");

	appendTextContent(element, miniDateFormat(false));

	return element;
}
function _createHatElement(data) {
	var element = document.createElement("img");
	element.classList.add("hat");

	var hat_prefix = "https://awakens.me/hats/";
	if (typeof data.hat === "string" && data.hat.length > 0) {
		switch (data.hat) {
		case "Doofus":
		case "Loading":
		case "Pizza":
		case "Rick":
		case "Swastika":
		case "Cow":
			element.setAttribute("src", hat_prefix + data.hat + ".gif");
			break;
		default:
			element.setAttribute("src", hat_prefix + data.hat + ".png");
			break;
		}

		element.setAttribute("height", "30px");
		element.setAttribute("width", "30px");
		element.setAttribute("alt", data.hat.toLowerCase());
	} else {
		element.setAttribute("height", "0px");
		element.setAttribute("width", "0px");
		element.setAttribute("alt", "");
		element.setAttribute("src", hat_prefix + "none.png");
	}

	return element;
}
function _createNickElement(data) {
	var element = document.createElement("div");
	element.classList.add("nick");

	appendTextContent(element, data.nick);
	appendTextContent(element, ": ");

	return element;
}
function _createMessageElement(data) {
	var element = document.createElement("div");
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
function _createContainerElement(data) {
	var element = document.createElement("span");
	return element;
}
function _appendToWindow(element) {
	var foobar = document.createElement("li");
	foobar.appendChild(element);
	document.getElementById("main-window")
		.firstElementChild
		.firstElementChild
		.appendChild(foobar);
}


return {
	createDateElement: _createDateElement,
	createHatElement: _createHatElement,
	createNickElement: _createNickElement,
	createMessageElement: _createMessageElement,
	createContainerElement: _createContainerElement,
	appendToWindow: _appendToWindow,
};


}());
