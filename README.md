![logo](https://raw.githubusercontent.com/ErrorGamer2000/base-convert.js/main/base-convert.js.svg)
# base-convert.js
A npm module to convert numbers to and from any base from 2 to 62.
## Importing
### Node.js
First, in the terminal:
```
npm i base-convert.js
```
Then, in the script:
```javascript
const baseConvert = require('base-convert.js')
```
------
### Browser
```html
<script type="application/javascript" src="https://cdn.jsdelivr.net/gh/ErrorGamer2000/base-cnvert.js/browser.js"></script>
```
## Usage and Syntax
### Syntax
```javascript
baseConvert.changeBase('number to convert', 'base of original number', 'base to convert to')
```
Please note that capitalization does matter with this module, even if the number does not need it. The module also returns only strings.
### Examples
```javascript
baseConvert.changeBase(2021, 10, 16) //Convert the base 10 number '2021' to base 16 (hexadecimal)
// returns "7E5"
baseConvert.changeBase("7E5", 16, 10) //Convert the base 16 number '7E5' to base 10
//returns "2021"
```
### Make sure you keep the capitalization the same!
For example:
```javascript
baseConvert.changeBase("7e5", 16, 10)
//returns "2437", NOT "2021"
```
