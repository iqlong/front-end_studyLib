let flag=false
function first(){
    console.log('我是第一个')
}
function second(){
    setTimeout(() => {
        flag=true
        console.log('我是第二个');
    },2000)
}
function third(){
    console.log('我是第三个')
}

(function main(){
    first();
    // Promise中的then方法会受到 eventLoop规则的约束
    Promise.resolve().then(() => {
        return new Promise((res,rej) => {
            second()
            if(flag){
                res()
            }
        })
    }).then(() => {
        third()
    })
})()
