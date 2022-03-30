// import { name } from "./test";

var obj=[]
var changedObj = JSON.stringify(obj)
console.log(obj)
console.log(changedObj)

// console.log('从外部导入的名字是：',name)

var _name = 'zhl';
var workTime = 0.1;
//在es5中只可以使用拼接的方法
console.log('我的名字是'+_name,'\n开始工作了'+workTime+'年');
//es6中优雅的写法
console.log(`我的名字是${_name}
开始工作了${workTime}年`);

console.log('.......')
console.log('nihao\n'+'zhl');
console.log(`nihao
            zhl`);
console.log('kkk')
var dx= {
    productName: ''
}
let mid= JSON.stringify(dx)
console.log(mid)
console.log(JSON.parse(mid))

