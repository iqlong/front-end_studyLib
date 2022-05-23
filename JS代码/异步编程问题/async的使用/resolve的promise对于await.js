
function innerP(){
    return Promise.resolve().then(() => {
        setTimeout(() => {
            console.log('await 的宏任务')
        })
    })
}

async function main(){
    await innerP();
    // 执行完await后，将下面的代码加入微任务队列
    Promise.resolve().then(() => {
        console.log('jj')
    })
    console.log('hk')
}
main()
