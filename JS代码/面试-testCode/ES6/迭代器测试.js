let iteArray = [1,2,4,5,2];
let iteFactory = iteArray[Symbol.iterator];
// 为什么不可以 iteFactory()???
let iteFunc = iteArray[Symbol.iterator]();
console.log(iteFunc.next());
console.log(iteFunc.next().value);