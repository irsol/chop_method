## Description

`chop` method replaces words in double curly braces with values from data object. It takes template and data object as an input and returns string with replaced values.

The parameter template is a string which contains key values in double curly braces. Key values will be replaced by actual values from data object. For example: `"I like {{cat}}"` will became  `"I like dog"`.

If key not in data object it will remain unchanged.

If value is not a number or a string it will be ignored but it will show an error message in the console.

If template will be not a string and data not an object it will show an error message in the console.

