// console.log('ehllo');
// import {firstName,lastName} from "./exp.a.js"
// console.log(firstName,lastName);
// import {j} from './exp.a'
// console.log(j);

// import接受一个{}，里面放从其他模块导入的变量名，且名字要和导出接口的名称一样
    // 并且import的接口都是只读的，但若引入的是一个对象，那么可以使用obj.a来添加
    // from后面的若不是路径，是模块名；则必须要有一个配置文件告诉js引擎该模块的位置
    // 注意，import命令具有提升效果，会提升到整个模块的头部，首先执行。
        // 这种行为的本质是，import命令是编译阶段执行的，在代码运行之前。
        // 由于import是静态执行，所以不能使用表达式和变量，这些只有在运行时才能得到结果的语法结构。
        // import同一个文件多次，实际只执行一次
     // 目前阶段，通过 Babel 转码，CommonJS 模块的require命令和 ES6 模块的import命令，可以写在
     //  同一个模块里面，但是最好不要这样做。因为import在静态解析阶段执行，所以它是一个模块之中最早执行的。   

     //  还可以使用*作整体加载

// 如果想在一条import语句中，同时输入默认方法和其他接口，可以写成下面这样。
    // import _, { each, forEach } from 'lodash';

// ruan老师的笔记总结：
    // 1. 概述      2. 严格模式     3. export命令       4. import命令
    // 5. import *     6. export default    7. export和import的复合写法(本模块中又不可以用转发的接口，实用性目前几乎为0)
                                                // 但是别的模块可以通过引入这个中介模块来使用所有接口变量
    // 8. 模块的继承    9. 模块常量    10. 动态的import()

// CommonJs 和 ES6的三大差异：
    // CommonJS 模块输出的是一个值的拷贝，ES6 模块输出的是值的引用；
    // CommonJS 模块是运行时加载，ES6 模块是编译时输出接口；
    // CommonJS 模块的require()是同步加载模块，ES6 模块的import命令是异步加载，有一个独立的模块依赖的解析阶段。

// import { firstName, lastName, year } from './exp_a.mjs';
// console.log(firstName, lastName, year ); 
// import name from './exp_a.mjs'
// console.log(name);
// // export {firstName as fN} from './exp_a.mjs';
// console.log(firstName);
// console.log(this);
// import('./exp_a.mjs').then( (module) => {
//     console.log(module.year);
// })
// console.log(import('./exp_a.mjs'));

console.log('comJs csl'+require('./exp_comjs.cjs'));
