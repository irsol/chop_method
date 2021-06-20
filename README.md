## Description

`chop` method replaces words in double curly braces with values from data object. It takes template and data object as an input and returns string with replaced values.

The parameter template is a string which contains key values in double curly braces. Key values will be replaced by actual values from data object. For example: `"I like {{cat}}"` will became  `"I like dog"`.

If key not in data object it will remain unchanged.

If value is not a number or a string it will be ignored but it will show an error message in the console.

If template will be not a string and data not an object it will show an error message in the console.

## Usage

1. Install all dependencies `npm install`
2. Run unit tests `jest`
3. Run app `npm start`

## Technical challenges

I use `node` for running app and `jest` for testing. `jest` uses commonJS while `node` uses ES6. I used babel preset to change jest to using ES6.