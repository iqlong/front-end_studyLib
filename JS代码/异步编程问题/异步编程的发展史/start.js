// 回调函数 -> promises -> generator -> async/await 
function a(func){
    setTimeout(() => {
        console.log('A is called');
        func && func()
    }, 2000);
}
function b(){
    setTimeout(() => {
        console.log('B is called');
    },1000)
}
a(b)