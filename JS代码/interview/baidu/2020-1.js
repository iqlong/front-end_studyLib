// let x=prompt();
// let testBegin=2,testEnd=4;
// function xor(begin,end) {
//     let result = begin;
//     if(begin>end) {
//         new Error('开始大于结束，你在干神魔？')
//     }else if(begin==end) {
//         return result;
//     }else {
//         for(let i=begin+1;i<=end;i++) {
//             result=i^result;
//         }
//         return result;
//     }
// }
// console.log(xor(testBegin,testEnd));

// console.log(2^3^4,parseInt(808))

// console.log(new Error('error'))
let fun = function(){ return _typeof(1) === 'number'};
function _typeof(value) {
    // 补全代码
    console.log(typeof(value));
}

_typeof(fun)