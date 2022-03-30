// 手写实现map函数
    // 感觉map forEach filter some every的简单实现都是
// map函数是不改变原数组的，所以要考虑使用闭包来维护一个数组
Array.prototype.map = function (mapFunc, thisArg){
    // 传入的thisArg不要求一定是array，可以是其他的类型，
      // 但是由于循环内容，obj不可以，类数组对象可以，   因为后者有length，可以obj[index]拿到值
    let resultArr = [];
    // 若是传入了thisArg就以传入的this为准，要是没传入就是用默认的this值
    let _this = thisArg ? thisArg:this;
    let len = _this.length;
    for(let n=0; n<len; n++){
        // 将返回值放入新数组中
        resultArr.push(mapFunc(_this[n], n, _this));
    }
    return resultArr;
}
let arr=[1,2,6];
let otherArr = [4,2];
let resultArr = arr.map((item,index,arr) => {
    arr.push(2)
    return item*2;
})
console.log(resultArr, arr, otherArr);
