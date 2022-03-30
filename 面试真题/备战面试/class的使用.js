class Person{
   static x=1;
   // 下面这样直接写是实例的数据，原型中有方法但是没有数据
   y=1;
   static get newX(){
       return '我是类的get方法'
   }
    get newY(){
        return '我是实例的get方法'
    }

}
console.log(Person.x, new Person().hasOwnProperty('y'))
console.log(Person.newX, new Person().newY)
