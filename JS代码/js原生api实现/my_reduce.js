// 注意要是提供了initialValue，那么accumulator累加器有初始值，
    // 要是没有初始值，那么累加器的值是数组的第一个值
    // 有初始值，数组从0开始遍历，没有初始值，数组从1开始遍历
        // 造成的结果就是：有初始值，遍历的结果就加上了一个初始值

// 要是没有提供初始值 且 数组为空，那么就会报错
Array.prototype.reduce = function (func, initial){
    // 先是形参func和initial
    let sumParam;
    let startIndex,len=this.length;
    // 没传入初始值的时候func为this的第一个值，
    initial ? sumParam=initial : sumParam=this[0];
    initial ? startIndex=0:startIndex=1;
    if(!initial && len===0){
        throw new TypeError('空数组没传入初始值.');
    }
    // 再是实参 --- func中的item, index, array
    for(startIndex; startIndex<len; startIndex++){
        sumParam = func(sumParam, this[startIndex], startIndex, this);
    }
    return sumParam;
}
// 开始测试部分
let arr = [1,4,5,3,2];
let sum = arr.reduce((accum, current) => {
    return accum+current;
})
console.log(sum);
let flattened = [[0, 1], [2, 3], [4, 5]].reduce(
    function(a, b) {
        return a.concat(b);
    },
    []
);
console.log(flattened);
[].reduce((a,b) => {return a+b})
