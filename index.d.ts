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

/**
 * Get the website version of the [Google Home](https://arnavthorat78.github.io/Google-Home/) website.
 *
 * This is right now a static variable, which may not be accurate. We are hoping to make a dynamic variable (or function) soon.
 *
 * @deprecated
 */
export const websiteVersion: string;
/**
 * Get the version of the [Google Home Module](https://www.npmjs.com/package/google-home-module) NPM module.
 *
 * This is right now a static variable, which may not be accurate. We are hoping to make a dynamic variable (or function) soon.
 *
 * @deprecated
 */
export const version: string;

/**
 * Get an object of objects containing the keyboard shortcuts of the website, and its information.
 */
export const keyboardShortcuts: {
	/** The keyboard shortcut for opening the Home page. */
	openHome: {
		/** The definition of what the shortcut does. */
		definition: string;
		/** The shortcut (the letters are seperated by '+'). */
		shortcut: string;
		/** All of the characters in an array of strings. */
		allCharacters: string[];
		/** If the shortcut is a redirect. */
		isRedirect: boolean;
		/** If the shortcut does a task (e.g. closes the window). */
		isTask: boolean;
		/** If the shortcut contains Ctrl. */
		containsCtrl: boolean;
		/** If the shortcut contains Alt. */
		containsAlt: boolean;
		/** If the shortcut contains Shift. */
		containsShift: boolean;
		/** If the shortcut contains a letter (A-Z). */
		containsLetter: boolean;
		/** If the shortcut contains a number (0-9). */
		containsNumber: boolean;
	};
	/** The keyboard shortcut for opening the Search page. */
	openSearch: {
		/** The definition of what the shortcut does. */
		definition: string;
		/** The shortcut (the letters are seperated by '+'). */
		shortcut: string;
		/** All of the characters in an array of strings. */
		allCharacters: string[];
		/** If the shortcut is a redirect. */
		isRedirect: boolean;
		/** If the shortcut does a task (e.g. closes the window). */
		isTask: boolean;
		/** If the shortcut contains Ctrl. */
		containsCtrl: boolean;
		/** If the shortcut contains Alt. */
		containsAlt: boolean;
		/** If the shortcut contains Shift. */
		containsShift: boolean;
		/** If the shortcut contains a letter (A-Z). */
		containsLetter: boolean;
		/** If the shortcut contains a number (0-9). */
		containsNumber: boolean;
	};
	/** The keyboard shortcut for opening the Weather page. */
	openWeather: {
		/** The definition of what the shortcut does. */
		definition: string;
		/** The shortcut (the letters are seperated by '+'). */
		shortcut: string;
		/** All of the characters in an array of strings. */
		allCharacters: string[];
		/** If the shortcut is a redirect. */
		isRedirect: boolean;
		/** If the shortcut does a task (e.g. closes the window). */
		isTask: boolean;
		/** If the shortcut contains Ctrl. */
		containsCtrl: boolean;
		/** If the shortcut contains Alt. */
		containsAlt: boolean;
		/** If the shortcut contains Shift. */
		containsShift: boolean;
		/** If the shortcut contains a letter (A-Z). */
		containsLetter: boolean;
		/** If the shortcut contains a number (0-9). */
		containsNumber: boolean;
	};
	/** The keyboard shortcut for opening the Settings page. */
	openSettings: {
		/** The definition of what the shortcut does. */
		definition: string;
		/** The shortcut (the letters are seperated by '+'). */
		shortcut: string;
		/** All of the characters in an array of strings. */
		allCharacters: string[];
		/** If the shortcut is a redirect. */
		isRedirect: boolean;
		/** If the shortcut does a task (e.g. closes the window). */
		isTask: boolean;
		/** If the shortcut contains Ctrl. */
		containsCtrl: boolean;
		/** If the shortcut contains Alt. */
		containsAlt: boolean;
		/** If the shortcut contains Shift. */
		containsShift: boolean;
		/** If the shortcut contains a letter (A-Z). */
		containsLetter: boolean;
		/** If the shortcut contains a number (0-9). */
		containsNumber: boolean;
	};
	/** The keyboard shortcut for opening the Feedback page. */
	openFeedback: {
		/** The definition of what the shortcut does. */
		definition: string;
		/** The shortcut (the letters are seperated by '+'). */
		shortcut: string;
		/** All of the characters in an array of strings. */
		allCharacters: string[];
		/** If the shortcut is a redirect. */
		isRedirect: boolean;
		/** If the shortcut does a task (e.g. closes the window). */
		isTask: boolean;
		/** If the shortcut contains Ctrl. */
		containsCtrl: boolean;
		/** If the shortcut contains Alt. */
		containsAlt: boolean;
		/** If the shortcut contains Shift. */
		containsShift: boolean;
		/** If the shortcut contains a letter (A-Z). */
		containsLetter: boolean;
		/** If the shortcut contains a number (0-9). */
		containsNumber: boolean;
	};
	/** The keyboard shortcut for navigating to the top of the current page. */
	goToTop: {
		/** The definition of what the shortcut does. */
		definition: string;
		/** The shortcut (the letters are seperated by '+'). */
		shortcut: string;
		/** All of the characters in an array of strings. */
		allCharacters: string[];
		/** If the shortcut is a redirect. */
		isRedirect: boolean;
		/** If the shortcut does a task (e.g. closes the window). */
		isTask: boolean;
		/** If the shortcut contains Ctrl. */
		containsCtrl: boolean;
		/** If the shortcut contains Alt. */
		containsAlt: boolean;
		/** If the shortcut contains Shift. */
		containsShift: boolean;
		/** If the shortcut contains a letter (A-Z). */
		containsLetter: boolean;
		/** If the shortcut contains a number (0-9). */
		containsNumber: boolean;
	};
	/** The keyboard shortcut for navigating to the bottom of the current page. */
	goToBottom: {
		/** The definition of what the shortcut does. */
		definition: string;
		/** The shortcut (the letters are seperated by '+'). */
		shortcut: string;
		/** All of the characters in an array of strings. */
		allCharacters: string[];
		/** If the shortcut is a redirect. */
		isRedirect: boolean;
		/** If the shortcut does a task (e.g. closes the window). */
		isTask: boolean;
		/** If the shortcut contains Ctrl. */
		containsCtrl: boolean;
		/** If the shortcut contains Alt. */
		containsAlt: boolean;
		/** If the shortcut contains Shift. */
		containsShift: boolean;
		/** If the shortcut contains a letter (A-Z). */
		containsLetter: boolean;
		/** If the shortcut contains a number (0-9). */
		containsNumber: boolean;
	};
	/** The keyboard shortcut for navigating to the middle of the current page. */
	goToMiddle: {
		/** The definition of what the shortcut does. */
		definition: string;
		/** The shortcut (the letters are seperated by '+'). */
		shortcut: string;
		/** All of the characters in an array of strings. */
		allCharacters: string[];
		/** If the shortcut is a redirect. */
		isRedirect: boolean;
		/** If the shortcut does a task (e.g. closes the window). */
		isTask: boolean;
		/** If the shortcut contains Ctrl. */
		containsCtrl: boolean;
		/** If the shortcut contains Alt. */
		containsAlt: boolean;
		/** If the shortcut contains Shift. */
		containsShift: boolean;
		/** If the shortcut contains a letter (A-Z). */
		containsLetter: boolean;
		/** If the shortcut contains a number (0-9). */
		containsNumber: boolean;
	};
	/** The keyboard shortcut for navigating to the centre of the current page. */
	goToCentre: {
		/** The definition of what the shortcut does. */
		definition: string;
		/** The shortcut (the letters are seperated by '+'). */
		shortcut: string;
		/** All of the characters in an array of strings. */
		allCharacters: string[];
		/** If the shortcut is a redirect. */
		isRedirect: boolean;
		/** If the shortcut does a task (e.g. closes the window). */
		isTask: boolean;
		/** If the shortcut contains Ctrl. */
		containsCtrl: boolean;
		/** If the shortcut contains Alt. */
		containsAlt: boolean;
		/** If the shortcut contains Shift. */
		containsShift: boolean;
		/** If the shortcut contains a letter (A-Z). */
		containsLetter: boolean;
		/** If the shortcut contains a number (0-9). */
		containsNumber: boolean;
	};
};

/**
 * Get a random greeting for the user.
 *
 * If the user is signed in, then the user will get a random greeting, with their username. Sometimes, the function will greet the user depending on their local time (e.g. Good morning!).
 * When the user is signed in, the username parameter *must* be filled. If not, a `TypeError` will be thrown.
 *
 * If no error occurs, the function will return the greeting it chose. If the user isn't signed in, it will simply return, "Welcome!".
 *
 * This function will get updates along with its website, such as more greetings, or if this function gets an update that the website already has, such as Settings.
 *
 * Usage (please note that return values and error values may vary):
 * ```js
 * const googleHome = require("google-home-module");
 *
 * const greetOne = googleHome.randomGreeting(true);
 * // => TypeError: Parameters 'signedIn' was true while 'username' was false. Expected a value for 'username' while 'signedIn' was true, but got true for 'signedIn' and false for 'username'.
 * //      at randomGreeting (<anonymous>:26:15)
 * //      at <anonymous>:1:1
 *
 * let greetTwo = googleHome.randomGreeting(true, "Google");
 * // => Good afternoon, Google!
 * greetTwo = googleHome.randomGreeting(true, "Google");
 * // => Welcome back, Google!
 *
 * const greetThree = googleHome.randomGreeting(false);
 * // => Welcome!
 * ```
 *
 * @param signedIn If the user is signed in or not.
 * @param username The username of the user. If the user does not have an account, you do not have to fill this parameter.
 * @returns The greeting produced randomly.
 */
export const randomGreeting: (signedIn: boolean, username?: string) => string;

/**
 * Get the weather data for a specific area.
 *
 * Get the weather using a city by specifing the `city` parameter. If there are multiple cities, and the response provides the wrong one, you can fill in `stateCode` and `countryCode`. Howeverm if you provide one value, you must provide the other, otherwise a `TypeError` expection will be thrown.
 *
 * Example:
 * ```js
 * const googleHome = require("google-home-module");
 *
 * googleHome.getWeather("metric", "Melbourne", "VIC");
 * // => TypeError: Parameter 'stateCode' was true, which 'countryCode' was false. Expected either false or true for both values, but got true and false.
 * //      at getWeather (<anonymous>:78:9)
 * //      at <anonymous>:1:1
 *
 * googleHome.getWeather("metric", "Melbourne", "VIC", "AUS").then((res) => {
 * 		console.log(`In ${res.name}, it is ${main.temp.toFixed(1)} degrees Celcius.`);
 * }).catch((err) => {
 * 		console.log(err);
 * });
 * // => In Melbourne, it is 20.2 degrees Celcius.
 * ```
 *
 * Please note that an error could occur if the city name is wrong, or if the server is down, etc.
 *
 * To see the whole object, just `console.log()` the whole response object.
 *
 * @param units The units of the returned object with weather data. Must be either _metric_, _imperial_, or _default_ (which is Kelvin).
 * @param city The city of which you would like to get the weather for.
 * @param stateCode The state code of the location. This is useful if you would like to get a region which has two or more names. Please note that if you provide this value, but not `countryCode`, a `TypeError` exception will be thrown.
 * @param countryCode The country code of the location. This is useful if you would like to get a region which has two or more names. Please note that if you provide this value, but not `stateCode`, a `TypeError` exception will be thrown.
 * @returns A Promise which contains the weather data.
 */
export const getWeather: (
	units: string,
	city: string,
	stateCode?: string,
	countryCode?: string
) => Promise<object>;

/**
 * Change the icon to a URL for the picture, see if the location is day or night, and get the Locale string for sunrise and sunset instead of Epoch time.
 *
 * This method is meant to be used with the `getWeather` method.
 *
 * @param icon The icon of the weather. This is used for the URL and for infering the day/night status.
 * @param sunrise The sunrise of the location in Epoch time.
 * @param sunset The sunset of the location in Epoch time.
 * @returns The object of the new items.
 */
export const changeWeatherData: (
	icon: string,
	sunrise: number,
	sunset: number
) => {
	icon: string;
	dayNight: string;
	sunrise: string;
	sunset: string;
};

/**
 * Creates a new BasicSearch.
 */
export class BasicSearch {
	/**
	 * Make a new BasicSearch.
	 *
	 * @param query The query that the user has (what they want to search for).
	 * @param searchEngine The search engine that the user uses. The default is Google.
	 */
	constructor(readonly query: string, readonly searchEngine?: string) {}
	/**
	 * Format the query of the user.
	 *
	 * @param username The username of the user. If you leave this blank, the value will be defaulted to _Anonymous_.
	 * @returns The formatted string.
	 */
	formatQuery(username?: string): string;
	/**
	 * **This method is deprecated!** Use `searchQuery` instead.
	 *
	 * Search for user's query with the search engine and the user's query.
	 *
	 * This method does not actually search, but we are hoping to implement that feature soon.
	 * This method does not guarentee that the search will actually be successful.
	 *
	 * @param target The target of the URL. Can be only __blank_, __self_, __parent_ or __top_.
	 * @returns The object consisting the url and the target.
	 *
	 * @deprecated Use `searchQuery` instead.
	 */
	search(target: string): { url: string; target: string };
	/**
	 * Search for a query using the default browser the user has set on their device. It will, however, still use the search engine set.
	 *
	 * This method returns a Promise, which contains the URL that was opened. When the task is done, the tab will open with whatever the use searched.
	 *
	 * ```js
	 * const googleHome = require("google-home-module");
	 *
	 * const search = new BasicSearch("Google");
	 * search.searchQuery().then((res) => {
	 * 		console.log(`URL: ${res}`);
	 * }).catch((err) => {
	 * 		console.log(err);
	 * });
	 * ```
	 *
	 * @returns A Promise, which has a string (the URL).
	 */
	searchQuery(): Promise<string>;
}

/**
 * Create a new User.
 */
export class User {
	/**
	 * Creates a new User, in which the user can use to personalise their experience.
	 *
	 * @param displayName The display name for the user.
	 * @param email The email of the user.
	 * @param password The password of the user. This is encrypted and only going to be allowed to be shown in special situations.
	 * @param exists If the user exists on the database. Defaults to true.
	 * @param admin If the user is an administrator. Defaults to false.
	 * @param signedOut If the user has signed out of their account. Defaults to false.
	 */
	constructor(
		public displayName: string,
		readonly email: string,
		private password: string,
		readonly exists?: boolean,
		readonly admin?: boolean,
		readonly signedOut?: boolean
	) {}
	/**
	 * Change the display name of the user.
	 *
	 * If the parameter `newName` passed in isn't a string, a `TypeError` exception will be thrown.
	 *
	 * @param newName The new display name of the user.
	 * @returns The new display name.
	 */
	changeDisplayName(newName: string): string;
	/**
	 * Validate the email that the user has. This cannot be customized, but we are hoping to implement it soon.
	 *
	 * Uses a RegExp pattern to test the email to see if it passes.
	 * This pattern is guarenteed to work 99.99% of the time (since no email RegEx is perfect)! Credits for this go to [this website](https://emailregex.com/).
	 *
	 * ```js
	 * const googleHome = require("google-home-module");
	 *
	 * const userOne = new googleHome.User("Someome", "someone@gmail.c", "test1234", true, false, false);
	 * const userTwo = new googleHome.User("SomeomeElse", "someoneelse@gmail.com", "test12345", true, false, false);
	 *
	 * userOne.validateEmail();
	 * // => false
	 * userTwo.validateEmail();
	 * // => true
	 * ```
	 *
	 * @returns The result of the validation (false if failed, else true).
	 */
	validateEmail(): boolean;
	/**
	 * Get the domain of the email. Returns an array containing the name of the email (if requested in the parameter), and the domain of the email.
	 *
	 * @param name If the name should be returned. Defaults to false.
	 * @returns The array containing the name (if requested) and the domain.
	 */
	getEmailDomain(name?: boolean): string[];
	/**
	 * Test the users' password using your own custom fields.
	 *
	 * @param minCharacters The number of minimum characters the password should contain. The default is 5.
	 * @param nonContaining An array of strings showing what the password should not **be**. If this array contains any elements other than strings, a `TypeError` exception will be thrown.
	 * @returns A boolean, indicating whether or not the password passed the test.
	 */
	validatePassword(minCharacters?: number, nonContaining?: string[]): boolean;
	/**
	 * Change the user's password. This takes in the current password so the password can be changed securely, and the new password thay the user would like to change to.
	 *
	 * This returns an object containing whether or not the password was changed, the new password (can be the current one if an error occured), and the message for changing.
	 * For security reasons, **do not** use the `newPassword` key for unstable uses. Use it properly, and if possible, don't use it at all.
	 *
	 * ```js
	 * const googleHome = require("google-home-module");
	 *
	 * const user = new googleHome.User("Someome", "someone@gmail.com", "test1234", true, false, false);
	 * user.changePassword("test12345", "testing123");
	 * // => { changed: false, newPassword: "test1234", message: "Could not change password due to the current password passed not matching with the actual current password." }
	 * user.changePassword("test1234", "test1234");
	 * // => { changed: false, newPassword: "test1234", message: "Could not change password due to the current password having the same value as the new password." }
	 * user.changePassword("test1234", "testing123");
	 * // => { changed: true, newPassword: "testing123", message: "Successfully changed the password!" }
	 * ```
	 *
	 * @param currentPassword The current password of the user. This must be correct, otherwise the function will return without changing the password.
	 * @param newPassword The new password that the user wants to change to. This must not equal to the current password, otherwise the password won't be changed.
	 * @returns An object containing three key values: `changed`, which is a boolean of whether or not the password was successfully changed, `newPassword`, which contains the new password, and `message`, which shows the message result of changing the password.
	 */
	changePassword(
		currentPassword: string,
		newPassword: string
	): { changed: boolean; newPassword: string; message: string };
	/**
	 * Toggle the exists status. Leaves it the same if the passed value is already the same.
	 *
	 * @param value What to change the value to. Either _yes_ or _no_.
	 * @returns The new value for `exists`.
	 */
	toggleExistsStatus(value: string): boolean;
	/**
	 * Toggle the admin status. Leaves it the same if the passed value is already the same.
	 *
	 * @param value What to change the value to. Either _yes_ or _no_.
	 * @returns The new value for `admin`.
	 */
	toggleAdminStatus(value: string): boolean;
	/**
	 * Toggle the signed out status.
	 *
	 * If `value` is no, you must pass in the email and the password. Otherwise, an error will be thrown. If you are signing out, then you can leave these fields empty.
	 *
	 * @param value What to change the value to. Either _yes_ or _no_.
	 * @param email The email of the user.
	 * @param password The password of the user.
	 * @returns An object containing the information of the action, whether or not it succeded, and the message.
	 */
	toggleSignedOutStatus(
		value: string,
		email?: string,
		password?: string
	): { action: string; succeded: boolean; message: string };
}
