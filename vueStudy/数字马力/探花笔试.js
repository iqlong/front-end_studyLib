/**
 * 题目一
 * */
// const array = [{value: 6}, {value: 2}, {value: 3}, {value: 5}, {value: 2}, {value: 5}, {value: 'xx'}];
//
// function multiple(array) {
//     let reduceArr = array.map((item, index) => {
//         return item.value;
//     })
//     let sum=0;
//     [...new Set(reduceArr)].forEach((item,index) => {
//         if(typeof item === 'number'){
//             if(sum == 0){
//                 sum= item;
//             }else{
//                 sum *= item;
//             }
//         }
//     })
//     return sum;
// }
//
// console.log(multiple(array)); // 应该输出180


/**
 * 题目二
 * */
// let money = '1221fadfda23';
//
// function moneyFormat(money) {
//     // todo
//     let sArr = money.split('');
//     let n=0,len = sArr.length;
//     sArr.forEach((item,index,arr) => {
//         if(index == ( (len%3)+3*n) ){
//             arr.splice(index+n, 0, ',');
//             n++;
//
//         }
//     })
//     if(len%3=== 0){
//         sArr.shift();
//     }
//     return sArr.join('');
// }
// console.log(moneyFormat(money))
// ;

/**
 * 题目三
 * */
// 获取输入
// const n = 30
// let res = []
// // c=m^2 + n^2，又m、n都大于0，所以它们一定不超过c的开方
// const len = Math.ceil(Math.sqrt(n))
//
// for (let i = 1; i < len; i++) {
//     for (let j = i + 1; j < len; j++) {
//         // m、n不互质，跳过
//         // if(isCoprime(i, j) !== 1) continue
//
//         let a = Math.pow(j, 2) - Math.pow(i, 2)
//         let b = 2 * i * j
//         let c = Math.pow(j, 2) + Math.pow(i, 2)
//         if (c <= n) {
//             // 当前勾股数数不超过给定值
//             // if ((isCoprime(a, b) === 1) && (isCoprime(a, c) === 1) && (isCoprime(b, c) === 1)) {
//                 // 勾股数两两互质
//                 res.push([a,b,c].toString())
//             // }
//         }
//     }
// }
//
// // 判断两个数是否互质：最大公因数是否为1
// function isCoprime(x, y) {
//     // 不必考虑 x、y 的大小 第一次递归之后大的总会在前面
//     if (y === 0) {
//         return x
//     } else {
//         return isCoprime(y, x % y)
//     }
// }
//
// // 输出
// console.log(res);


/**
 * 题目四
 * */
// function convert(str) {
//     // todo
//     let tn;
//     let strArr = str.split('');
//     let result  =strArr.map((item) => {
//         // 只有字母才会变化
//         if(!parseInt(item)){
//             tn = item.charCodeAt()+4;
//             if(tn>90 && tn<97) {
//                 tn = 65+(tn-90)-1;
//             }else if(tn>122){
//                 tn = 97+(tn-122)-1;
//             }
//             return String.fromCharCode(tn);
//         }else {
//             return item;
//         }
//
//     })
//     return result.join('')
// }
// console.log(convert('z1Z'))

/**
 * 题目五 -- 下策
 * */
// function x(){
//     y: function y(){
//         console.log('gg')
//     }
//
// }
// // x.y()
// x.y = '1'
// console.log(x.y, x)

// Number.prototype.add = function(added){
//     return this+added;
// }
// Number.prototype.multi = function(multi){
//     return this*multi;
// }
// Number.prototype.minus = function(minus){
//     return this-minus;
// }
// Number.prototype.div = function(div){
//     return this/div;
// }
// Number.prototype.getValue = function(){
//     return this.valueOf();
// }

function myCalculator(num) {
    // todo
    return num;
}
// console.log(myCalculator(121).getValue(), 121)          // 121
// console.log(myCalculator(121).add(1).getValue())        // 122
// console.log(myCalculator(121).add(1).minus(2).multi(3).div(4).getValue(),90)
myCalculator.add = function (){
    console.log(this)
}
myCalculator(122).add(1);


/**
 * 第五题 -- 中策
 * */
// 用class封装一下，类似promise每次函数调用都返回class linkCount实例对象
class linkCount{
    constructor(num) {
        this.value = num;
    }
    add(added){
        this.value += added;
        return this;
    }
    multi(multi){
        this.value *= multi;
        return this;
    }
    minus(minus){
        this.value -= minus;
        return this;
    }
    div(div){
        this.value /= div;
        return this;
    }
    getValue(){
        return this.value;
    }
}
function myCalculator(nums) {
    return new linkCount(nums);
}
