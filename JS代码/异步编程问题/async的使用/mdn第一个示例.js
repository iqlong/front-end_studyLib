function resolveAfter2Seconds(resMsg) {
    // return new Promise(resolve => {
    //     setTimeout(() => {
    //         resolve(resMsg);
    //     }, 2000);
    // });
    return Promise.resolve().then(() => {
        setTimeout(() => {
            console.log('我是await中的输出')
        })
    })
}

 async function asyncCall() {
    console.log('calling');
    let result='kk';
    result = await resolveAfter2Seconds('第一个resolve.');
    setTimeout(() =>{
        console.log('我是宏任务')
    },2100)
    console.log('@',result);

     result = await resolveAfter2Seconds('第二个resolve.');
     console.log('await后的第一个输出')
     setTimeout(() =>{
         console.log('我是宏任务222')
     },10)
     console.log('@',result);
    // expected output: "resolved"
}

asyncCall();
