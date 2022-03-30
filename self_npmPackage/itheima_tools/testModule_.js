const packageSelf = require('./index');

let result = packageSelf.formatDate('2021-12-01T12:13:10','hh-mm-SS');
console.log(result);

let secResult = packageSelf.htmlEscape('<p1>nihao</p1>');
console.log(secResult);

let thirdResult = packageSelf.htmlUnescape(secResult);
console.log(thirdResult);
