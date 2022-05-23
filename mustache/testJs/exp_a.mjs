// 先前的主流模块化：
    //1. commonJs   AMD的requireJS：前者用于服务器，后者用于浏览器
        // CMD的Sea.js  
        // 而现在所学的是从语言方面创建的模块化标准，可以完全取代1；既可以运行在服务器上也可以用在浏览器上
            // *** 并且ES6完全做到了编译时加载；并且使用了模块化后就默认使用了'use strict'
// 正式开始import和export： 
    // 关于export(第一个是当name变量已经声明了)：  export {name} === export let name='zhanghuilong'
    // export let firstName="huilong";
    // let lastName= 'zhang';
    // export {lastName};
    // let a="zhl"
    // export default a 

// 厚礼谢特：  node默认支持commonJS,使用nodeJs时候js文件后缀要改为： .mjs   
        // 但是html中可以不用.mjs   直接.js就可以了！！！ 
    
// 特别注意：export是输出对外的接口，需要和模块内的变量建立一一对应的关系
    // export输出的接口是动态的，类似与响应式
        // （这一点与 CommonJS 规范完全不同。CommonJS 模块输出的是值的缓存，不存在动态更新）

// 终于结束一点：最后，export命令可以出现在模块的任何位置，只要处于模块顶层就可以。如果处于块级作用域内，
    // 就会报错，下一节的import命令也是如此。这是因为处于条件代码块之中，就没法做静态优化了，
    // 违背了 ES6 模块的设计初衷。

// export default的出现： 不用阅读文档就可以方便的import，并且可以随便指定名字
    // 并且可以export default 一个匿名函数:  export default function(){}  ===  export default function otherFunc() {}
    // 并且 import的时候 类似于*：可以不用{}
    //  并且export default只可以一次，export可以多次
        // 所以与之对应： import的export default不用加{},而import的export要加{}

    // tip： 本质上，export default就是输出一个叫做default的变量或方法，然后系统允许你为它取任意名字。所以，下面的写法是有效的。
        // 正是因为export default命令其实只是输出一个叫做default的变量，所以它后面不能跟变量声明语句。
            // export default var a = 1;  是错误的     export default 42; 是正确的

// 模块化打包工具
    // webpack(webpack-dev-server)、 rollup、 Parcel等等
    // mustache官方使用rollup进行模块化打包，应为webpack可以更方便的在浏览器中实时调试
        // 很多库开发的时候用webpck，开发完成可以用rollup打包
    // 生成库是UMD的，实现它不麻烦，只需一个'通用头'即可
        // UMD 叫做通用模块定义规范（Universal Module Definition）。
        // 它没有自己专有的规范，是集结了 CommonJs、CMD、AMD 的规范于一身，
            // 视频的第八节-6:00  有webpack的配置
                // webpack： 4.44.2    webpack-cli: 3.3.12   webpack-dev-server: 3.11.0

export var firstName = 'Michael';
export var lastName = 'Jackson';
export var year = 1958;
const name = 'zhl';
export default name;