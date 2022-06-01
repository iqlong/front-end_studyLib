// var x = yield 2;    当第一次next后，x会被赋予yield后的值吗
    // 由于要在函数外部看函数内部的值，所以两种解决方法: 
        // 第一种是利用对象的引用机制，  一种是利用闭包的方式解决

// let obj = {};
// function * generatorFunc() {
//     obj.result = yield 3;
// }
// let func = generatorFunc();
// console.log(obj);
// console.log(func.next());
// console.log(obj);

// func.next();
// console.log(obj);

// 结果是不会被赋值  且yield x的返回值是undefined, generator.next()输出的才是 yield后面的表达式结果

// 使用闭包来实现
function * generatorFunc() {

    let result=1;
    result = yield 3;
    console.log('$',result);
}
let func = generatorFunc();
console.log('1',func);
console.log(func.next());
console.log(func.next());
// func();
    // 所以generator中的return貌似要不上了

