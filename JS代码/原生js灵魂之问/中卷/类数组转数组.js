/**
 * 几种思路：
 *   1.
 * */
Array.prototype.zxSlice = function zxSlice() {
    var arr = [], i = 0, o = 0, len = this.length,
        one = parseInt(arguments[0]),
        two = parseInt(arguments[1]);

//只有有参数时才会进入下面，没有参数时，i和len的值为默认值，走下面的for循环，复制this的值，返回出去
    if(arguments.length){
        // if(one > len || two == 0) return [];  // 只有一个参数并且大于数组长度时返回空数组
        if(one >= 0) //第一个参数是正数的时候
            i = one;
        else  //第一个参数是负数的时候
            i = len + one;
        if(two !== NaN){  //如果有第二个参数
            if(two > len) //如果第二个参数大于数组长度时，len 等于数组的长度
                len = len;
            else if(two >= 0) //第二个参数为正数的时候
                len = two;
            else   //第二个参数为负数的时候
                len = len + two;
        };
    };

    for(i; i < len; i++){
        arr[o] = this[i];
        o++;
    }

    return arr;
}

// function getTrueArray(a, b, c){
//     console.log(arguments);
//     console.log(Array.prototype.zxSlice.call(arguments));
// }
// getTrueArray(1,4,5);
let arr = [1,3,5,6,8,3,3]

console.log('@',arr.zxSlice(1))
