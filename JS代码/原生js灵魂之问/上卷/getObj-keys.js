/**
 * for in遍历可以遍历到对象的原型中的key-value
 * 那么Object中的方法 keys   getOwnPropertyNames  两个可以获取到对象原型上的方法吗
 *          answer：不可以
 * */
function Person(p) {
    this.name = p.name;
    this.age = p.age
}
Person.prototype = {
    gender: 'male'
}

const p = new Person({name: 'zhl', age: 12});
console.log(Object.keys(p), Object.getOwnPropertyNames(p))
for(let key in p) {
    console.log(key,':  ',p[key]);
}
/**
 * 精确的比较：
 *    1. in是只要在对象/对象的原型链中就行
 *    2. obj的实例属性：
 *          1). hasOwnProperty: 判断属性是否在对象本身
 *          2). isPrototypeOf:  属性是否在原型链中，不包括对象本身
 * */
console.log('gender' in p, p.hasOwnProperty('gender'), p.isPrototypeOf('name'))
