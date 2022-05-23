import { count } from './export.mjs';
setTimeout(() => {
    console.log("count is " + count + ' in es6'); // 1
}, 1000)
// 由于值是只读的，所以不可以重新赋值
// count = 22;
console.log(count)

// commonJs输出的是值的拷贝，ES6输出的是值的引用
