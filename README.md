# Google Home Module

![npm](https://img.shields.io/npm/v/google-home-module?color=red&label=npm&logo=version&logoColor=grey)
![npm](https://img.shields.io/npm/dt/google-home-module?color=green&label=downloads&logo=downloads&logoColor=grey)

[//]: # (To change the frequency of the downloads in the second Shield, find '.../npm/*dt*/...' in the URL, and replace 'dt' with 'dw', 'dm', 'dy', or 'dt'.)

This module includes everything of Google Home!

## Website & Documentation URL

#### Website

See the website at https://arnavthorat78.github.io/Google-Home/.

#### Documentation

See the website at https://arnavthorat78.github.io/Google-Home/developer.html.

## Installation

```
npm install google-home-module
```

It's that easy!

## Usage

_Quick Note: We are going to soon seperate the code to make it more neat!_

```js
const googleHome = require("google-home-module");

googleHome.randomGreeting(true, "Someone");
// =>  Good morning, Someone!

googleHome
	.getWeather("metric", "Melbourne", "VIC", "AUS")
	.then((res) => {
		console.log(`In ${res.name}, it is ${main.temp.toFixed(1)} degrees Celcius.`);
	})
	.catch((err) => {
		console.log(err);
	});
// =>  In Melbourne, it is 20.2 degrees Celcius.

const search = new BasicSearch("JavaScript", "Google");
search
	.searchQuery()
	.then((res) => {
		console.log(`URL: ${res}`);
	})
	.catch((err) => {
		console.log(err);
	});
// =>  URL: https://www.google.com/search?q=JavaScript

const me = new User("Someone", "someone@gmail.com", "password", true, false, false);
me.validateEmail();
// =>  true
me.validatePassword(5, ["password", "test"]);
// =>  false
me.toggleSignedOutStatus("no", "someone@gmail.com", "password");
// =>  { action: "Sign In", succeded: true, message: "Signed in successfully!" }
me.changePassword("password", "mypassword");
// =>  { changed: true, newPassword: "mypassword", message: "Successfully changed the password!" }
```

## Commands

| Commands                                                                                                                                     | Description                                                                                                               |
| -------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `websiteVersion: string`                                                                                                                     | **Deprecated!** Get the website version of the [Google Home](https://arnavthorat78.github.io/Google-Home/) website.       |
| `version: string`                                                                                                                            | **Deprecated!** Get the version of the [Google Home Module](https://www.npmjs.com/package/google-home-module) NPM module. |
| `keyboardShortcuts: { openHome: { definition: string, shortcut: string, ...more }, ...more }`                                                | Get all of the keyboard shortcuts and the information from the website!                                                   |
| `randomGreeting: (signedIn: boolean, username?: string) => string`                                                                           | Get a random greeting for the user.                                                                                       |
| `getWeather: (units: string, city: string, stateCode?: string, countryCode?: string) => Promise<object>`                                     | Get the weather for your location chosen.                                                                                 |
| `changeWeatherData: (icon: string, sunrise: number, sunset: number) => { icon: string; dayNight: string; sunrise: string; sunset: string; }` | Change the format of the weather data retrieved with the `getWeather` method.                                             |
| `BasicSearch(query: string, searchEngine?: string): BasicSearch`                                                                             | Make a new _BasicSearch_ so the user can search with their desired search engine.                                         |
| `URLSearch(url: string): URLSearch`                                                                                                          | Make a new _URLSearch_ for a user to use.                                                                                 |
| `User(displayName: string, email: string, password: string, exists?: boolean, admin?: boolean, signedOut?: boolean): User`                   | Make a new _User_ for a user's account.                                                                                   |
