"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*   Babel in JavaScript
نصب موارد زیر در پوشه
1- npm init -y
2- npm i babel-cli babel-core babel-preset-env --save-evn

3-"scripts": {
    "babel" : "babel --presets env index.js -o build/index.js"
  }

*(add in package-json)

4- creat folder build
cmd : 5- npm run bable -> convert script 6 to script :
*/

var x = 1;

var numbers = [1, 2, 3, 4, 5, 6];
numbers.forEach(function (number) {
    console.log(number);
});

var Circle = function Circle() {
    _classCallCheck(this, Circle);
};

document.getElementById("text").innerHTML = "- Babel in JS";
