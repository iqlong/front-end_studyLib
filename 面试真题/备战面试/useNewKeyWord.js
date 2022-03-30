/**
 * 使用new关键字的过程：
 *      1. 创建一个新的对象
 *      2. this的__proto__指向构造函数的prototype
 *      3. 将构造函数中的this指向新的对象  ----  构造函数内部的this被赋值为这个新对象
 *      4. 执行构造函数中的代码
 *      5. 看构造函数是否返回对象 ? return=对象 : return=创建的新对象
 *
 * */
function x(...args){
    console.log(args,arguments)
}
x([1,2,3])
function myNew(construct, ...args){
    let o=new Object();
    Object.setPrototypeOf(o, construct.prototype);
    let result = construct.apply(o, args);
    return result instanceof Object ? result: o;
}
class Father{

}
class Son extends Father{

}
let s=new Son()
console.log(Son.isPrototypeOf(new Son()), s instanceof Father)
