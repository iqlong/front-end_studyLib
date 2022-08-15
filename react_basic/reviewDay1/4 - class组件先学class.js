class Person{
    name = 'zhl';
    // 是否使用 = 可以将属性放在原型上还是放在实例上
        // 包括：变量 函数
    // 利用static将属性放在构造器对象上
    say() {
        console.log('gg');
    }
    
}
let zhl = new Person()
console.log(zhl);