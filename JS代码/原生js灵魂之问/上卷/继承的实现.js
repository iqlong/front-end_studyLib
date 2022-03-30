/**
 * 1. 使用call继承父类中的元素，但是不可以继承方法
 *      1）子构造函数通过call调用父构造函数
 * 2. 借助原型链实现继承
 * */
function Person(name, age){
    this.name = name;
    this.age = age;
}
Person.prototype = {
    id: [1]
}
let p1 = new Person('xz', 21);
let p2 = new Person('xh', 18);
console.log(p1.__proto__ == p2.__proto__);
// 若是修改基本数据类型，只是在obj中修改
    // 若是改变引用类型，才会让原型改变
p1.id.push(2);
console.log(p1.id,p2.id);
console.log(p1.__proto__ == p2.__proto__, p1.__proto__, p2.__proto__);
