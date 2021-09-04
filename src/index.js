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

const websiteVersion = "2.0.0";
const version = "1.0.0";

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
}

module.exports = { websiteVersion, version, randomGreeting, BasicSearch };
