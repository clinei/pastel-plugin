"use strict";
const storage = require("../storage");

class RandomColorWrap {
	constructor() {
		this.message = this.message;
	}
	message(data) {
		let data2 = this.parent.message(data);
		let color = "#".concat(Math.floor(Math.random() *0x1000000 +0x1000000).toString(16).substring(1));
		return `${color}${data2}`;
	}
}

class Pastel {
	constructor(saturation = 10, lightness = 50) {
		this.pastel = {
			saturation: saturation,
			lightness: lightness,

			context: document.createElement("canvas").getContext("2d"),
		};

		this.flair = this.flair;
	}
	flair() {
		const context = this.pastel.context;
		const saturation = this.pastel.saturation;
		const lightness = this.pastel.lightness;
		const nick = storage.get("nick");
		const base = Math.random() *360;
		const mult = Math.random() *20 +(Math.random() > 0.5 ? 20 : 320);

		function normalizeColor(color) {
			context.fillStyle = color;
			context.fillRect(1, 1, 1, 1);
			const data = context.getImageData(1, 1, 1, 1).data;
			return [
				"#",
				(data[0] +0x100).toString(16).substring(1),
				(data[1] +0x100).toString(16).substring(1),
				(data[2] +0x100).toString(16).substring(1),
			].join("").toUpperCase();
		}

		function getFlairPart(symbol, index) {
			const color = `hsl(${index *mult +base %360}, ${saturation}%, ${lightness}%)`;
			return normalizeColor(color).concat(symbol);
		}

		return Array.from(nick).map(getFlairPart).join("");
	}
}

module.exports = {
	RandomColorWrap: RandomColorWrap,
	Pastel: Pastel,
};
