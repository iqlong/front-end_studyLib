function Person(){

}
Person.prototype.name = 'zhl'
Person.prototype.message = {name: 'z'}
let p1= new Person();
let p2=new Person();
p1.name="zz"
console.log(p1.name,p2.name,p1.hasOwnProperty('name'))
