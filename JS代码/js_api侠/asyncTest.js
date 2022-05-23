// async function sleep(){
//     console.time('开始');
//     console.log('开始')
//     await new Promise((res) => {setTimeout(() => {
//         res()
//         console.log('xixi')
//     },3000)})
//     // console.endTime('结束')
//     console.log('结束')
// }
// sleep()

/**
 * async中的await语法糖的实际意义：
 *      await 1     ====>    Promise.resolve(1).then(() => undefined)
 * */
(async () => {
    let returnVal= await 1;
    console.log(returnVal);     // undefined
})()
console.log(Promise.resolve(1).then((v) => v).then((v) => console.log('@',v)))

(async () => {
    await console.log('first')

    console.log('normal');     // undefined
    await console.log('second')
})()
