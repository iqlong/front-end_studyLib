let pa= Promise.resolve();
let pb= Promise.resolve();
let pc= Promise.reject().catch((e) => {
    // console.log(e)
});

Promise.all([pa,pb]).then(() => {
    console.log('all成功了')
}, () => {
    console.log('不是全部成功了')
})

let PTimeA = new Promise((rlv,rjt) => {
    setTimeout(rlv, 200);
})
let PTimeB = new Promise((rlv,rjt) => {
    setTimeout(rjt, 300);
})
Promise.race([PTimeA,PTimeB]).then(() => {
    console.log('成功')
},() => {
    console.log('失败')
})
