// 使用符号 - Symbol
    // Symbol()来创建独有的符号，且不可以new Symbol()   最多使用： new Object(Symbol('just try'))
    // 可以Symbol.keyFor()来查询所有使用的字符串，
    // 且： 在对象中不论是定义还是使用的时候都要使用[]来包裹变量才有用.
let sNmae = Symbol.for('g');
let sAge = Symbol('g');
let obj = {
    [sNmae]: '张慧龙',
    [sAge]: 21,
}
console.log(obj[sNmae], obj[sAge]);