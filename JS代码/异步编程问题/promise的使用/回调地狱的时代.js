let jkFunc=function (callBack,success,fail){
    setTimeout(() => {
        callBack('异步结束了')
    },1000)
}
// 目标：想在异步执行结束后马上执行指定的代码
function callBack(val){
    console.log('我知道你输出了值：',val)
}
jkFunc(callBack)
