// let obj = {};
// Object.defineProperty(obj,'name',{writable: true, value: 'ff'})
// obj.name = 'zhl'
// console.log(obj.name);



// 闭包是什么j8
// function x() {
//     var x=1;
//     return function y() {
//         console.log(++x)
//     }
// }
// let xy = x();
// xy();
// xy();

// assign()
// let rusult = {}
// let fir = {
//     // set name(val) {
//     //     console.log(val);
//     // }
// };
// let sec = {
//     name: 'seconde',
//     get hello() {
//        throw new Error('f')
//     },
//     age: 12}
// try{
//     rusult = Object.assign(fir,sec)
// }catch(e) {
//     console.log(e)
// }

// console.log(fir);

// let x = 1;
// function colx() {
//     console.log(x);
// }
// colx()

// function Person() {
    
// }
// Person.prototype = {
//     name: 'person'
// };
// let person = new Person();

// person.name = 'zhl';
// Object.defineProperty(person,'age',{
//     enumerable: true,
//     value: 15
// })
// person.name = 'zhl'
// for ( x in person){
//     console.log('x',person[x]);
// }
// let person1 = new Person();
// console.log(person1.name,person);

// (function col() {
//     console.log('hello');
// })()

// class Person {
//     constructor() {
//         console.log('hello');
//         if(new.target == Person) {
//             console.log('choiced');
//         }
//     }
    
// }
// Person.prototype.nname = 'person'
// Person.type = 'PP'
// class zhl extends Person {
//     get getName() {
//         console.log('hh');
//         return super.type 
//     }
// }
// console.log(zhl.prototype.getName,zhl.type);
// console.log(new.target);
// new zhl();
// let x = new Person();
// console.log(new.target);

// function  test() {
//     var n = 4399;
//     function add() {
//         n++;
//         console.log(n);
//     }
//     return {n:n,add:add}
// }
// var result = test();
// var result2 = test();
// result.add();
// result2.add();
// console.log(result.n);
// result2.add();

console.log(this);