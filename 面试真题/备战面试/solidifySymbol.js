let sybZhl = Symbol.for('zhl');
let obj = {
    [Symbol.for('zhl')]: '张慧龙'
}
console.log(obj[sybZhl], Symbol.for('zhl') === sybZhl)
let x= Symbol.for('zzh')
console.log(Symbol.keyFor(x))

console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@')
class Father{

}
class Son extends Father{

}
console.log(new Father() instanceof Son)        // false，只会向上查找不会向下查找
