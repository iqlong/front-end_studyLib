let obj={
    name: 'zhl',
    // 尽管可以结合使用getter和setter来创建一个伪属性，但是不可能同时将
    // 一个 getter 绑定到一个属性并且该属性实际上具有一个值
        // 只不过这种写法没有报错

    /**
     * 需要注意的点：
     *     1. 可以使用字符串或者数值作为标识
     *          setter也是
     *     2. get不可以有参数
     *          setter必须有参数
     *     3. get和对象的属性名不可以冲突
     *          setter也是两种不可以冲突
     * */
    // 优点：访问之前不会计算属性的值(懒加载)  (记忆性)
        // 记忆性应该指的是return 返回的基本计算值
    get age(){
        return this.name+='A'
    }
}
obj.age=12
console.log(obj.age)
console.log(obj.age)
