// MIT License
//
// Copyright (c) 2021 arnavthorat78
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

const axios = require("axios").default;
const open = require("open");
const isUp = require("is-up");

const apiImport = require("../.private/api");

const weatherApi = apiImport.weatherApi;

const websiteVersion = "2.1.0";
const version = "1.1.5";

const keyboardShortcuts = {
	openHome: {
		definition: "Open up the Home page.",
		shortcut: "Ctrl + Alt + H",
		allCharacters: ["Ctrl", "Alt", "H"],
		isRedirect: true,
		isTask: false,
		containsCtrl: true,
		containsAlt: true,
		containsShift: false,
		containsLetter: true,
		containsNumber: false,
	},
	openSearch: {
		definition: "Open up the Search page.",
		shortcut: "Ctrl + Alt + S",
		allCharacters: ["Ctrl", "Alt", "S"],
		isRedirect: true,
		isTask: false,
		containsCtrl: true,
		containsAlt: true,
		containsShift: false,
		containsLetter: true,
		containsNumber: false,
	},
	openWeather: {
		definition: "Open up the Weather page.",
		shortcut: "Ctrl + Alt + W",
		allCharacters: ["Ctrl", "Alt", "W"],
		isRedirect: true,
		isTask: false,
		containsCtrl: true,
		containsAlt: true,
		containsShift: false,
		containsLetter: true,
		containsNumber: false,
	},
	openSettings: {
		definition: "Open up the Settings page.",
		shortcut: "Ctrl + Alt + G",
		allCharacters: ["Ctrl", "Alt", "G"],
		isRedirect: true,
		isTask: false,
		containsCtrl: true,
		containsAlt: true,
		containsShift: false,
		containsLetter: true,
		containsNumber: false,
	},
	openFeedback: {
		definition: "Open up the Feedback page.",
		shortcut: "Ctrl + Alt + F",
		allCharacters: ["Ctrl", "Alt", "F"],
		isRedirect: true,
		isTask: false,
		containsCtrl: true,
		containsAlt: true,
		containsShift: false,
		containsLetter: true,
		containsNumber: false,
	},

	goToTop: {
		definition:
			"Naviagte to the top of the current page. This feature will not do anything if you are already at the top.",
		shortcut: "Ctrl + Alt + T",
		allCharacters: ["Ctrl", "Alt", "T"],
		isRedirect: false,
		isTask: true,
		containsCtrl: true,
		containsAlt: true,
		containsShift: false,
		containsLetter: true,
		containsNumber: false,
	},
	goToBottom: {
		definition:
			"Naviagte to the bottom of the current page. This feature will not do anything if you are already at the bottom.",
		shortcut: "Ctrl + Alt + B",
		allCharacters: ["Ctrl", "Alt", "B"],
		isRedirect: false,
		isTask: true,
		containsCtrl: true,
		containsAlt: true,
		containsShift: false,
		containsLetter: true,
		containsNumber: false,
	},
	goToMiddle: {
		definition: "Naviagte to the middle of the current page.",
		shortcut: "Ctrl + Alt + M",
		allCharacters: ["Ctrl", "Alt", "M"],
		isRedirect: false,
		isTask: true,
		containsCtrl: true,
		containsAlt: true,
		containsShift: false,
		containsLetter: true,
		containsNumber: false,
	},
	closeWindow: {
		definition:
			"Close the current window. This is only for pop-up windows, such as the Keyboard Shortcuts page.",
		shortcut: "Ctrl + Alt + C",
		allCharacters: ["Ctrl", "Alt", "C"],
		isRedirect: false,
		isTask: true,
		containsCtrl: true,
		containsAlt: true,
		containsShift: false,
		containsLetter: true,
		containsNumber: false,
	},
};

const randomGreeting = (signedIn, username = "") => {
	if (signedIn && !username) {
		// The user is signed in but no username is provided
		throw new TypeError(
			`Parameters 'signedIn' was true while 'username' was false. Expected a value for 'username' while 'signedIn' was true, but got ${signedIn} for 'signedIn' and ${Boolean(
				username
			)} for 'username'.`
		);
	} else if (signedIn) {
		// If the user is signed in
		const now = new Date().getHours();
		let randNum = Math.ceil(Math.random() * 10);

		// Random greetings
		if (randNum == 1) {
			return `Welcome back, ${username}!`;
		} else if (randNum == 2) {
			return `Hello, ${username}!`;
		} else if (randNum == 3) {
			return `Let's start searching, ${username}!`;
		} else if (randNum == 4) {
			return `What should we do, ${username}?`;
		} else if (randNum == 5 || randNum == 6 || randNum == 7) {
			if (now >= 0 && now < 12) {
				return `Good morning, ${username}!`;
			} else if (now >= 12 && now < 17) {
				return `Good afternoon, ${username}!`;
			} else {
				return `Good evening, ${username}!`;
			}
		} else if (randNum == 8) {
			return `Glad to see you again, ${username}!`;
		} else if (randNum == 9) {
			return `What to do, ${username}?`;
		} else {
			return `Hi, ${username}!`;
		}
	} else {
		return "Welcome!";
	}
};

const getWeather = async (units, city, stateCode = "", countryCode = "") => {
	let extraDetails = false;

	if ((!stateCode && countryCode) || (!countryCode && stateCode)) {
		throw new TypeError(
			`Parameter 'stateCode' was ${Boolean(stateCode)}, which 'countryCode' was ${Boolean(
				countryCode
			)}. Expected either false or true for both values, but got ${Boolean(
				stateCode
			)} and ${Boolean(countryCode)}.`
		);
	} else if (stateCode && countryCode) {
		extraDetails = true;
	}

	return (
		await axios.get(
			`https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
				`${city},${extraDetails ? `${stateCode},${countryCode}` : ""}`
			)}&appid=${weatherApi}&units=${units}`
		)
	).data;
};

const changeWeatherData = (icon, sunrise, sunset) => {
	const newIcon = `http://openweathermap.org/img/wn/${icon}@2x.png`;
	const newDayNight = icon.includes("d") ? "day" : "night";
	const newSunrise = new Date(sunrise * 1000).toLocaleString();
	const newSunset = new Date(sunset * 1000).toLocaleString();

	return {
		icon: newIcon,
		dayNight: newDayNight,
		sunrise: newSunrise,
		sunset: newSunset,
	};
};

class BasicSearch {
	constructor(query, searchEngine = "Google") {
		this.query = query;
		this.searchEngine = searchEngine;
	}
	formatQuery(username = "Anonymous") {
		return `${username} has searched for '${this.query}' using ${this.searchEngine}.`;
	}
	search(target) {
		if (this.searchEngine == "Bing") {
			return {
				url: `https://www.bing.com/search?q=${encodeURIComponent(this.query)}`,
				target,
			};
		} else if (this.searchEngine == "DuckDuckGo") {
			return {
				url: `https://duckduckgo.com/?q=${encodeURIComponent(this.query)}`,
				target,
			};
		} else {
			return {
				url: `https://www.google.com/search?q=${encodeURIComponent(this.query)}`,
				target,
			};
		}
	}
	async searchQuery() {
		let url = "";

		if (this.searchEngine == "Bing") {
			url = `https://www.bing.com/search?q=${encodeURIComponent(this.query)}`;
		} else if (this.searchEngine == "DuckDuckGo") {
			url = `https://duckduckgo.com/?q=${encodeURIComponent(this.query)}`;
		} else {
			url = `https://www.google.com/search?q=${encodeURIComponent(this.query)}`;
		}

		await open(url);
		return url;
	}
	async queryResIsUp(query) {
		const google = "https://www.google.com/search?q=";
		const bing = "https://www.bing.com/search?q=";
		const duckDuckGo = "https://duckduckgo.com/?q=";

		if (query.includes(google) || query.includes(bing) || query.includes(duckDuckGo)) {
			return await isUp(query);
		} else {
			throw new TypeError(
				`Parameter 'query' did not contain any query URLs. This method is strictly only to be used for search queries. Expected 'query' containing URL searches, but got ${query}.`
			);
		}
	}
}

class URLSearch {
	constructor(url) {
		this.url = url;
	}

	formatUrlQuery(username = "Anonymous") {
		return `${username} has typed in ${this.url} for the URL.`;
	}
	compressUrl(forced = false, length = 0) {
		if (forced) {
			return this.url.substr(0, length);
		} else {
			let newURL = "";

			if (
				(this.url.includes("http://") || this.url.includes("https://")) &&
				!this.url.endsWith("/")
			) {
				newURL = this.url.replace(/http:\/\/|https:\/\//g, "");
			} else if (
				this.url.endsWith("/") &&
				(this.url.includes("http://") || this.url.includes("https://"))
			) {
				newURL = this.url.replace(/http:\/\/|https:\/\//g, "").slice(0, -1);
			} else {
				newURL = this.url;
			}

			return newURL;
		}
	}
	async openUrl() {
		await open(this.url);
		return this.url;
	}
	async urlIsUp() {
		return await isUp(this.url);
	}
}

class SmartSearch {
	constructor(command) {
		this.command = command;
	}

	allCommands() {
		const commands = [
			["hello", "hi"],
			["how are you", "hows everything"],
			["music", "audio"],
			["time", "clock"],
			["picture", "photo", "collage"],
			["name", "me", "my"],
		];

		return commands;
	}
	cleanCommand(
		trim = true,
		lowerCase = true,
		multipleSpaceToSingle = true,
		removeSymbols = true
	) {
		if (trim) {
			this.command = this.command.trim();
		}
		if (lowerCase) {
			this.command = this.command.toLowerCase();
		}
		if (multipleSpaceToSingle) {
			this.command = this.command.replace(/\s{2,}/g, " ");
		}
		if (removeSymbols) {
			this.command = this.command.replace(/[!"#$%&'()*+,-.\\/:;<=>?@[\]^_`{|}~]/g, "");
		}

		return this.command;
	}
}

class User {
	constructor(displayName, email, password, exists = true, admin = false, signedOut = false) {
		this.displayName = displayName;
		this.email = email;
		this.password = password; // This is encrypted and only going to be allowed to be shown in special situations
		this.exists = exists;
		this.admin = admin;
		this.signedOut = signedOut;
	}

	changeDisplayName(newName) {
		if (!newName || typeof newName != "string") {
			throw new TypeError(
				`Parameter 'newName' must have a value, and/or must have a value of 'string'. Expected truthy value and/or string value, but got '${newName}'.`
			);
		}

		this.displayName = newName;
		return this.displayName;
	}

	validateEmail() {
		const validation =
			/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		return validation.test(this.email);
	}
	getEmailDomain(name = false) {
		if (!this.email.includes("@")) {
			throw new TypeError(
				`Email does not contain '@' symbol. Expected email containing '@' symbol, but got ${this.email} instead. To validate email, use the validateEmail() method.`
			);
		}

		const emailSep = this.email.split("@");
		if (name) {
			return [emailSep[0], emailSep[1]];
		} else {
			return [emailSep[1]];
		}
	}

	validatePassword(minCharacters = 5, nonContaining = ["password"]) {
		const properPasswordLength = this.password.length + 1;

		nonContaining.forEach((value, index) => {
			if (typeof value != "string") {
				throw new TypeError(
					`Array 'nonContaining' must only contain strings. Expected array containing strings, but got ${value} at index ${index}.`
				);
			}
		});

		if (properPasswordLength < minCharacters) {
			return false;
		} else if (nonContaining.includes(this.password)) {
			return false;
		} else {
			return true;
		}
	}
	changePassword(currentPassword, newPassword) {
		if (currentPassword != this.password) {
			return {
				changed: false,
				newPassword: this.password,
				message:
					"Could not change password due to the current password passed not matching with the actual current password.",
			};
		} else if (currentPassword == newPassword) {
			return {
				changed: false,
				newPassword: this.password,
				message:
					"Could not change password due to the current password having the same value as the new password.",
			};
		} else {
			this.password = newPassword;
			return {
				changed: true,
				newPassword: this.password,
				message: "Successfully changed the password!",
			};
		}
	}

	toggleExistsStatus(value) {
		this.exists = value == "yes" ? true : false;
		return this.exists;
	}
	toggleAdminStatus(value) {
		this.admin = value == "yes" ? true : false;
		return this.admin;
	}
	toggleSignedOutStatus(value, email = null, password = null) {
		if ((value == "no" && !email) || !password) {
			throw new TypeError(
				`Expected email and password while signing in. Expected email and password, but got ${email} and ${password}.`
			);
		} else if (value == "no") {
			if (this.email != email || this.password != password) {
				return {
					action: "Sign In",
					succeded: false,
					message: "Could not sign in due to email or password not matching.",
				};
			} else {
				this.signedOut = false;
				return { action: "Sign In", succeded: true, message: "Signed in successfully!" };
			}
		} else {
			this.signedOut = true;
			return { action: "Sign Out", succeded: true, message: "Signed out successfully!" };
		}
	}
}

module.exports = {
	websiteVersion,
	version,
	keyboardShortcuts,
	randomGreeting,
	getWeather,
	changeWeatherData,
	BasicSearch,
	URLSearch,
	SmartSearch,
	User,
};
