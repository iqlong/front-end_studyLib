// let obj = {
//     a: 'zhl'
// }

// function change(param) {
//     param.a='nnn'
// }
// console.log(obj)
// change(obj)
// console.log(obj)

let array = [
    {age: 1},
    {age: 2}
]
console.log(array)
// console.log(array.map( (item) => {
//     return item.age =2;
// }))
// console.log(array)
console.log(array.forEach( (item) => {
    item.age =2;
}))
console.log(array)