# Google Home Module

<img src="https://arnavthorat78.github.io/Google-Home/img/Google.png" alt="Logo" width="100" height="100" />

![npm](https://img.shields.io/npm/v/google-home-module?color=red&label=npm&logo=version&logoColor=grey)
![npm](https://img.shields.io/npm/dt/google-home-module?color=orange&label=downloads&logo=downloads&logoColor=grey)
[![install size](https://packagephobia.now.sh/badge?p=axios)](https://packagephobia.now.sh/result?p=axios)
![Lines of code](https://img.shields.io/tokei/lines/github/arnavthorat78/Google-Home-Module?color=blue&label=total%20lines&logo=downloads&logoColor=grey)
![Website](https://img.shields.io/website?down_color=red&down_message=offline&label=website%20status&logo=status&up_color=green&up_message=online&url=https%3A%2F%2Farnavthorat78.github.io%2FGoogle-Home%2F)

[//]: # "To change the frequency of the downloads in the second Shield, find '.../npm/*dt*/...' in the URL, and replace 'dt' with 'dw', 'dm', 'dy', or 'dt'."

This module includes everything of Google Home!

## Table of Contents

1. [Website & Documentation URL](#webAndDocs)
    1. [Website](#websiteUrl)
    2. [Documentation](#docsUrl)
2. [Installation](#install)
3. [Usage](#usage)
    1. [Weather](#weatherUsage)
4. [Commands](#commands)
    1. [Variables](#variableCommands)
    2. [Methods](#methodCommands)
    3. [Classes](#classCommands)

## Website & Documentation URL <a name="webAndDocs"></a>

#### Website <a name="websiteUrl"></a>

See the website at https://arnavthorat78.github.io/Google-Home/.

#### Documentation <a name="docsUrl"></a>

See the website at https://arnavthorat78.github.io/Google-Home/developer.html.

## Installation <a name="install"></a>

```
npm install google-home-module
```

It's that easy!

To then use it in your project, simple `require` it.

```js
const googleHome = require("google-home-module");
```

## Usage <a name="usage"></a>

**Popular only!** We only have the popular variables, methods and classes. Sorry for any inconvenience caused by this.

#### Weather <a name="weatherUsage"></a>

To get the weather, you can use the `getWeather` method, as described below. It returns a `Promise` with the data. Please note that the data is by default parsed.

```js
googleHome
	.getWeather(
		"metric", // units: string
		"Melbourne", // city: string
		"VIC", // stateCode?: string
		"AUS" // countryCode?: string
	)
	.then((data) => {
		console.log(`In ${data.name}, it is ${data.temp.toFixed(1)} degrees Celcius.`);
	})
	.catch((err) => {
		console.log(err);
	});
```

This outputs...

```
In Melbourne, it is 20.2 degrees Celcius.
```

With the weather data, we can change some values that are non-human readable, and also add some values. The `changeWeatherData` method helps us with that.

```js
googleHome
	.getWeather("metric", "Melbourne", "VIC", "AUS")
	.then((data) => {
		console.log(
			googleHome.changeWeatherData(
				data.weather[0].icon, // icon: string
				data.sys.sunrise, // sunrise: number
				data.sys.sunset // sunset: number
			)
		);
	})
	.catch((err) => {
		console.log(err);
	});
```

This should output something like this, depending on your data.

```
{
	"http://openweathermap.org/img/wn/03d@2x.png",
	"day",
	'readable-sunrise-date',
	'readable-sunset-date'
}
```

##### More are coming soon!

## Commands <a name="comamnds"></a>

#### Variables <a name="variableCommands"></a>

| Commands                                                                                      | Description                                                                                                               |
| --------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `websiteVersion: string`                                                                      | **Deprecated!** Get the website version of the [Google Home](https://arnavthorat78.github.io/Google-Home/) website.       |
| `version: string`                                                                             | **Deprecated!** Get the version of the [Google Home Module](https://www.npmjs.com/package/google-home-module) NPM module. |
| `keyboardShortcuts: { openHome: { definition: string, shortcut: string, ...more }, ...more }` | Get all of the keyboard shortcuts and the information from the website!                                                   |

#### Methods <a name="methodCommands"></a>

| Commands                                                                                                                                     | Description                                                                   |
| -------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `randomGreeting: (signedIn: boolean, username?: string) => string`                                                                           | Get a random greeting for the user.                                           |
| `getWeather: (units: string, city: string, stateCode?: string, countryCode?: string) => Promise<object>`                                     | Get the weather for your location chosen.                                     |
| `changeWeatherData: (icon: string, sunrise: number, sunset: number) => { icon: string; dayNight: string; sunrise: string; sunset: string; }` | Change the format of the weather data retrieved with the `getWeather` method. |

#### Classes <a name="classCommands"></a>

| Commands                                                                                                                   | Description                                                                       |
| -------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `BasicSearch(query: string, searchEngine?: string): BasicSearch`                                                           | Make a new _BasicSearch_ so the user can search with their desired search engine. |
| `URLSearch(url: string): URLSearch`                                                                                        | Make a new _URLSearch_ for a user to use.                                         |
| `SmartSearch(command: string): SmartSearch`                                                                                | Make a new _SmartSearch_ for a user to interact with.                             |
| `User(displayName: string, email: string, password: string, exists?: boolean, admin?: boolean, signedOut?: boolean): User` | Make a new _User_ for a user's account.                                           |
