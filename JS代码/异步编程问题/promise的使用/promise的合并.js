// const allP = Promise.all([
//     Promise.resolve('file111'),
//     Promise.resolve('file222')
// ]).then((val) => {
//     console.log(val)
// }).catch((e) => {
//     console.log(e)
// }).finally((e) => {
//     console.log(e)
// })
// console.dir(allP)
//
console.log(Promise.resolve('f'))
async function x (){
    let x= await Promise.resolve('f')
    console.log('@',x)
}
x()
