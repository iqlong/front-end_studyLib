Promise.reject().then(null,()=>{
    console.log('失败');
    // return 'x'
}).then(() => {
    console.log('由成功了')
},() => {
    console.log('失败')
}).then((mes) => {
    console.log('XX',mes);
    console.log('hahah')
})


