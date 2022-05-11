Promise.resolve().then(() =>{
    console.log('我是a，我调用了');
    throw new Error('ggggg')

},() => {

}).then(() => {
    console.log('我是b，我调用了');
    new Promise((resolve,reject) => {
        resolve('g');
    }).then(() => {
        console.log('我是c，我执行了')
    })
}, ()=>{
    console.log('错误改变状态')
}).then(() => {
    console.log('cg')
},() =>{
    console.log('失败')

})
