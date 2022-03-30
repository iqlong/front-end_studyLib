let obj={};
Object.defineProperties(obj, {
    name: {
        configurable: true,
        writable: true,
        enumerable: false,
        value: 'zhl',
    }

})
console.log(obj, Object.getOwnPropertyDescriptors(obj));
for(x in obj){
    console.log('@',x)
}
console.log('@@','name' in obj)
/**
 * 判断超过两个数字的相等情况
 * */
// 在函数参数中...可以表示解开也可以表示聚合：  需要看传入的参数是如何传入的
function multiEqual(x, ...args){
    // && 优先级高于 ||
    return Object.is(x,args[0]) && (args.length<2 || multiEqual(...args));
}
console.log(multiEqual(2,2,2,3))
/**
 * 对对象的解构赋值
 * */
let secondObj = {name: 'zhl', age: 21};
let {age} = secondObj;
console.log(`对象中的age是${age}`)

/**
 * 8.1 的学习内容和一些api
 *      都是Object上的方法
 *  defineProperty  defineProperties
 *  getOwnPropertyDescriptor    getOwnPropertyDescriptors
 *  assign()   is()
 * */
