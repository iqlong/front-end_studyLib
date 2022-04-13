Promise.reject().then(()=>{
    console.log('a')
},() => {
    console.log('变化的东西')
}).then(() => {
    console.log('b');
    return new Promise((resolve,reject) => {
        reject('gg')
    })
}).then(() => {
    console.log('c')
}).catch((e) => {
    console.log('问题少年是',e)
})
