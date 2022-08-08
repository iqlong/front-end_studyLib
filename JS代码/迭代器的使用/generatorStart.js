function *geneFunc(){
    console.log('gg')
    // 这种情况就是考虑yield中断和函数表达式的求值
        // 并且通过两个yield表达式让  yield即实现了输入，又实现了输出
    console.log('11',yield 'g')

    return 'helloWorld'
}
let  g = geneFunc();
// 生成器对象的迭代器和iterable的迭代器是一样的(自引用关系)
// console.log(g==g[Symbol.iterator]())
console.log(g.next('yieldArgs'))
// 上一次让生成器函数暂停的yield关键字会接受到传给next()方法的第一个值
console.log(g.next('arug2'))
// console.log(g.next())

