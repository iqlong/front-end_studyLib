//给定以 没有重复 的序列，返回所有可能出现的全排列

// console.log([1,2,3].splice(1,2))

// let rowArray = [1,2,6]
// let rowLen = rowArray.length;
// // 封装一个C 5-5
// // let endArray = new Array(rowArray.length)
// let endArray = [];
// rowArray.forEach( function(item,index,arr) {
//     let temptArray = new Array(rowlen)
//     let temptLen = temptArray.length;
//     temptArray.push(item);
//     while(temptLen < rowLen) {
        
//     }
// })
let str = [1,2,3,4];

function zhl(str) {
    let endStr = [];
    let strLen = str.length;
    function main() {
        for( let i=0; i<strLen; i++) {
            var tempStr = [];
            tempStr.push(str[i]);
            //整理好tempStr后
            endStr.push(tempStr);
        }
    }
    
}

