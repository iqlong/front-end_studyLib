async function cl(){
    let x = await console.log('g');
    let y = await console.log('gg');
    await console.log('ggg')
    await console.log('gggg')
    await console.log('ggggg')

}
cl()
// console.log('同步的')
// console.log('同步的')
// console.log('同步的')
// Promise.resolve().then(() => {
//     console.log('异步任务')
// },(x) => {
//     console.log(x)
// })
