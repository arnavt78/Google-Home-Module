# Google Home Module

![npm](https://img.shields.io/npm/v/google-home-module?color=red&label=npm&logo=version&logoColor=grey)

This module includes everything of Google Home!

## Website URL

See the website at https://arnavthorat78.github.io/Google-Home/.

## Installation

```
npm install google-home-module
```

It's that easy!

## Usage

```js
const googleHome = require("google-home-module");

console.log(googleHome.randomGreeting(true, "Someone"));
// =>  Good morning, Someone!

const search = new BasicSearch("JavaScript", "Google");
console.log(search.formatQuery("Someone"));
// =>  Someone has searched for 'JavaScript' using Google.
console.log(search.search("_blank"));
// =>  { url: "..."; target: "_blank" }
```

## Commands

| Commands                                                           | Description                                                                                               |
| ------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------- |
| `websiteVersion: string`                                           | Get the website version of the [Google Home](https://arnavthorat78.github.io/Google-Home/) website.       |
| `version: string`                                                  | Get the version of the [Google Home Module](https://www.npmjs.com/package/google-home-module) NPM module. |
| `randomGreeting: (signedIn: boolean, username?: string) => string` | Get a random greeting for the user.                                                                       |
| `BasicSearch(query: string, searchEngine?: string): BasicSearch`   | Make a new _BasicSearch_ so the user can search with their desired search engine.                         |
