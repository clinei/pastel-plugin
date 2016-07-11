"use strict";
const core = require("../plugin/core.js");
const plugin = {core: core};

const storage = new Map();
const unstorable = [
	"server_background",
	"blockproxy",
	"blocktor",
	"locked",
	"note",
	"role",
	"roles",
	"semilock",
	"server_theme_colors",
	"topic",
	"users",
	"whitelist",
];
const storable = [
	"local_background",
	"nick",
	"part",
	"style",
];

const default_storage = new Map();
default_storage.set("debug", "socket.io-client:socket");
default_storage.set("flair", "");
default_storage.set("nick", `TEST::${Math.random().toString(36).substring(2, 12)}`);
default_storage.set("part", "their part unset.");
default_storage.set("role", 0);
default_storage.set("token", "");


function isNullPotent(value) {
	if (value === null) {
		return true;
	}
	switch (typeof value) {
	case "boolean":
		return false;
	case "number":
		return isNaN(value);
	case "object":
		return Object.keys(value).length === 0;
	case "string":
		return value.trim().length === 0;
	case "undefined":
		return true;
	default:
		return false;
	}
}

unstorable.forEach((key) => {
	storage.set(key, null);
});
storable.forEach((key) => {
	const value = window.localStorage.getItem(key);

	if (!isNullPotent(value)) {
		storage.set(key, JSON.parse(value));
	} else if (default_storage.has(key)) {
		storage.set(key, default_storage.get(key));
	} else {
		storage.set(key, null);
	}
});


class Storage {
	constructor() {
		this.get = this.get;
		this.has = this.has;
		this.set = this.set;
		this.getJoinData = this.getJoinData;
		this.isKey = this.isKey;
	}
	get(key) {
		if (storage.has(key)) {
			return storage.get(key);
		} else if (default_storage.has(key)) {
			return default_storage.get(key);
		} else {
			return null;
		}
	}
	has(key) {
		return storage.has(key) || default_storage.has(key);
	}
	set(key, value) {
		storage.set(key, value);
		if (storable.indexOf(key) !== -1) {
			window.localStorage.setItem(key, JSON.stringify(value));
		}
	}
	getJoinData() {
		return {
			flair: this.get("flair"),
			nick: this.get("nick"),
			part: this.get("part"),
			token: this.get("token"),
		};
	}
	isKey(key) {
		if (storable.indexOf(key) !== -1) {
			return true;
		}
		if (unstorable.indexOf(key) !== -1) {
			return true;
		}
		return false;
	}
}

class NickGen {
	constructor() {
		this.first = ["tossing", "bloody", "shitting", "wanking", "stinky", "raging", "dementing", "dumb",
		"dipping", "fucking", "instant", "dipping", "holy", "maiming", "cocking", "ranting", "twunting",
		"hairy", "spunking", "flipping", "slapping", "sodding", "blooming", "frigging", "sponglicking",
		"guzzling", "glistering", "cock-wielding", "failed", "artist-formally-known as", "unborn", "pulsating",
		"naked", "throbbing", "lonely", "failed", "stale", "spastic", "senile", "strangely-shaped", "virgin", "bottled",
		"twin-headed", "fat", "gigantic", "sticky", "prodigal", "bald", "bearded", "horse-loving", "spotty", "spitting",
		"dandy", "fritzl-admiring", "friend-of-a", "indeterminable", "overrated", "fingerlicking", "diaper-wearing",
		"leg-humping", "gold-digging", "mong-loving", "trout-faced", "cunt rotting", "flip-flopping", "rotting",
		"inbred", "badly-drawn", "undead", "annoying", "whoring", "leaking", "dripping", "racist", "slutty",
		"cross-eyed", "irrelevant", "mental", "rotating", "scurvy-looking", "rambling", "cunting", "wrinkled-old",
		"dried-out", "sodding", "funky", "silly", "unhuman", "bloated", "wanktastic", "bum-banging", "cockmunching",
		"animal-fondling", "stillborn", "scruffy-looking", "hard-rubbing", "rectal", "glorious", "eye-less", "constipated",
		"bastardized", "utter", "hitler's-personal", "irredeemable", "complete", "enormous", "probing", "dangling",
		"go-suck-a", "fuckfaced", "broadfaced", "titless", "son-of-a", "demonizing", "pigfaced", "treacherous", "retarded",
		"twittering", "one-balled", "dickless", "long-titted", "unimaginable", "bawdy", "lumpish", "wayward", "assbackward",
		"fawning", "clouted", "spongy", "spleeny", "foolish", "idle-minded", "brain-boiled", "crap-headed", "jizz-draped"];
		this.second = ["cock", "tit", "cunt", "wank", "piss", "crap", "shit", "arse", "sperm", "nipple", "anus", "colon",
		"shaft", "dick", "poop", "semen", "slut", "suck", "earwax", "fart", "scrotum", "cock-tip", "tea-bag", "jizz",
		"cockstorm", "bunghole", "food trough", "bum", "butt", "shitface", "ass", "nut", "ginger", "llama", "tramp", "fudge",
		"vomit", "cum", "lard", "puke", "sphincter", "nerf", "turd", "cocksplurt", "cockthistle", "dickwhistle", "gloryhole",
		"gaylord", "spazz", "nutsack", "fuck", "spunk", "shitshark", "shitehawk", "fuckwit", "dipstick", "asswad", "chesticle",
		"clusterfuck", "douchewaffle", "retard", "bukake", "Mishashule"];
		this.third = ["licker", "raper", "lover", "shiner", "blender", "fucker", "jacker", "butler", "packer", "rider",
		"wanker", "sucker", "felcher", "wiper", "experiment", "bender", "dictator", "basher", "piper", "slapper", "fondler",
		"plonker", "bastard", "handler", "herder", "fan", "amputee", "extractor", "professor", "graduate", "voyeur", "hogger",
		"collector", "detector", "sniffer"];

		this.generateNick();

		this.generateNick = this.generateNick;
		this.get = this.get;
	}
	generateNick() {
		let rand1 = this.first[Math.floor(Math.random() * this.first.length)];
		let rand2 = this.second[Math.floor(Math.random() * this.second.length)];
		let rand3 = this.third[Math.floor(Math.random() * this.third.length)];
		this.nick = `${rand1}_${rand2}_${rand3}`;
	}
	get(key) {
		switch (key) {
		case "nick":
			return this.nick;
		default:
			return this.parent.get(key);
		}
	}
}

const host = new plugin.core.PluginHost();
const storagePlugin = new Storage();
host.add(storagePlugin);

const nickGen = new NickGen();
host.add(nickGen);

module.exports = host;
