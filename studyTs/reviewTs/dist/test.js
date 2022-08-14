"use strict";
const foo = { x: 'string' };
var charList;
(function (charList) {
    charList["first"] = "x";
    charList[charList["second"] = 1] = "second";
})(charList || (charList = {}));
console.log(charList.first, charList.second);
let hello = charList.first;
let x = {
    x: '',
};
