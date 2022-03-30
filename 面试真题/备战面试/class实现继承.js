class Student{
    id=12;
    logId (){
        console.log(this.id);
        return this.id;
    }

}
function x(){
    let name='zh';
    x: 3;

}
x.age='f';
console.log(new Student().hasOwnProperty('logId'))
console.log(new Student().constructor === Student.prototype.constructor)
console.log('@@',x.hasOwnProperty('name'),x.name,x.age)
// 类和类.prototype上的方法都是不可枚举的
console.log(Object.keys(Student), Object.keys(Student.prototype), Object.keys(x))

class Boy extends Student{
    // id=21;
    gg(){
        return 'x'+super.logId()
    }
}
new Boy().logId();
console.log(new Boy().gg());
