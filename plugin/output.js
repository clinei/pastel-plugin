"use strict";

class RandomColorWrap {
	constructor() {
		this.message = this.message;
	}
	message(data) {
		let data2 = this.parent.message(data);
		let color = "#".concat(Math.floor(Math.random() *0x1000000 +0x1000000).toString(16).substring(1));
		return `<span style="text-shadow: 1px 3px 3px #f00; color: ${color}">${data2}</span>`;
	}
}

module.exports = {
	RandomColorWrap: RandomColorWrap,
};
