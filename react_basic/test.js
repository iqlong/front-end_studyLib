var qs = require("qs");
let url = "https://www.google.com/search?q=react";
let obj = qs.parse(url);
// console.log(obj);

function reportCurTime(url) {
  const eqlIndex = url.split('').lastIndexOf("=");
  const id = url.slice(eqlIndex+ 1) ;
  return id
}
console.log(reportCurTime(url));