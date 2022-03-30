// 重写forEach()
// Array.prototype.forEach = function(iter) {
//     const len = this.length;
//     for(let i=0; i<len; i++){
//         iter(this[i], i, this);
//     }
// };

Array.prototype.forEach = function (fn , thisArg) { //thisArg 为设置的forEach循环过后的返回值，如果没有确定 默认为undefined
    if(typeof fn !== 'function'){
        throw new Error(`${fn} is not a function`);
    };
    if(!Array.isArray(this)){
        throw new Error(`${this} is not a Array`);
    };
    let arr = this;
    for(let i = 0 ; i < arr.length; i++) {
        fn.call(thisArg , arr[i] , i ,arr )
    }
}

let array = [1,4,3,4];
array.forEach((item) => {
    console.log(item);
    // 使用console.log()会如何
})
