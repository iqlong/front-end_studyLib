async function foo() {
    const result1 = await new Promise((resolve) => setTimeout(() => resolve('1')))
    console.log(result1)
    const result2 = await new Promise((resolve) => setTimeout(() => resolve('2')))
    console.log(result2)
}
foo()
Promise.resolve().then(() => console.log('ggg'
))
console.log('hhhh')
// 说明：async内部可以保证顺序，但是它和外部代码的执行还是需要按照eventLoop的规定来执行
