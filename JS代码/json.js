let str = {
    name : 'zhl',
    age : 3
}
let cpyStr = str;
let jsnStr = JSON.parse(JSON.stringify(str))
console.log(cpyStr == str,"dd")
console.log(cpyStr === str)

console.log(cpyStr == jsnStr,"dd")
console.log(cpyStr === jsnStr)

