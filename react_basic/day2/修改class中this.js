class Person{
    constructor() {
        this.name = 'zhl';
        // 注意：这让会生成一个新的函数，不会让this原型对象上的函数的this被改变
        this.getName.bind(this);
    }
    getName() {
        console.log(this.name);
    }
}

let p=new Person();
console.log(p);
let getName = p.getName;
p.getName();
getName();