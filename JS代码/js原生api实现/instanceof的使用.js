/**
 * aim: 对基本数据类型使用instanceof来判断数据类型
 * */
class myDefineNumber {
    // Symbol.hasInstance用于判断某对象(x)是否为某构造函器(myDefineNumber)的实例。
    // 因此你可以用它自定义instanceof操作符在某个类上的行为
    static [Symbol.hasInstance](x) {
        return typeof x === 'number';
    }
}
console.log(11 instanceof myDefineNumber)
