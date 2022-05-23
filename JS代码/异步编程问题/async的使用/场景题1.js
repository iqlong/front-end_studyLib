// 三个异步的p
const p1 = function (){
    return Promise.reject('gg').then(()=>{

    },(mes) => {
        console.log('失败=第一个请求',mes)
    }).then((mes) => {
        console.log('cg=第一个请求',mes)
    })
}
const p2 = function (){
    return Promise.resolve().then(() => {
        console.log('第二个请求')
    })
}
const p3 = function (){
    return Promise.resolve().then(() => {
        console.log('第三个请求')
    })
}
// 若是成功： p1 -> p2 -> p3

async function main(){
    await p1();
    await p2();
    await p3()
    // p1().then(() => {
    //     p2()
    // }).then(() => {
    //     p3()
    // })
}
main().catch((e) => {
    console.log(e)
})
