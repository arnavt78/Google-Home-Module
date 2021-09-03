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
 */
export const websiteVersion: string;
/**
 * Get the version of the [Google Home Module](https://www.npmjs.com/package/google-home-module) NPM module.
 *
 * This is right now a static variable, which may not be accurate. We are hoping to make a dynamic variable (or function) soon.
 */
export const version: string;

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
 * // => Uncaught TypeError: Parameters 'signedIn' was true while 'username' was false. Expected a value for 'username' while 'signedIn' was true, but got true for 'signedIn' and false for 'username'.
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
 * @param {boolean} signedIn If the user is signed in or not.
 * @param {string} username The username of the user. If the user does not have an account, you do not have to fill this parameter.
 * @returns The greeting produced randomly.
 */
export const randomGreeting: (signedIn: boolean, username: string = "") => string;
