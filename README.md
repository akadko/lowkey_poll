##### Lowkey Test Challenge

_1. Please recreate the UI and some basic functionality. (For icons feel free to use any suitable)_

_2. Create a function that turns a random string from lowercase to uppercase. For example, if the coming string is ‘lowkey’, the outcome should be ‘LOWKEY’. To spice up this challenge, usage of the .toUpperCase() method is not allowed._


The solution for the first assignment is the actual React Native project.
Please run it as an ordinary one: `git clone ...` ->  `yarn` -> `react-native run-ios`

I've recreated the 'New Poll' screen as detailed as I could in an available time.
I wish I had time to work on the modal sheet shadow and the switch buttons styling.

The solution for the second assignment is the function `toUpperCase(string)` in the 
`toUpperCaseImpl.js` file. It loads `unicodeUppercaseMap.json` which represents a map
of lowercased and respecting uppercased Unicode symbols. This map was created by the
`unicodeCSVToJSON.js` script: it loads the csv-table based on the official [UnicodeData.txt](http://www.unicode.org/Public/10.0.0/ucd/UnicodeData.txt) 
(fields definition [here](http://www.unicode.org/reports/tr44/tr44-20.html#UnicodeData.txt))
and transforms it into the map. So the `toUpperCase` function is supposed to work with 
any Unicode characters but I guess some unhandled linguistic exceptions could exist.
In the file some test strings in different languages are presented.
