# TypeScript 学习

### ts转js常用命令
1. tsc: 将ts文件转为js文件
2. tsc --init #生成配置文件: 解决ts和js冲突的问题
3. tsc --watch: 自动编译
4. tsc --noEmitOnError hello.ts: 发出错误


### 基础语法

1. 模块		2. 变量       3. 表达式和语句		4. 注释      5. 函数

### 基础类型：

+ 其中any类型就像js中的松散类型，可以定义任意类型

+ 使用|来支持
+ void是显示的返回的void类型，never是啥也没有，
  + 函数的默认返回值是undefined
  + never的返回值可以是函数中抛出的error

+ ts中的基本数据类型：
  + number	string	boolean	any
  + array        元组tuple        枚举enum
  + void
  + undefined      null      never
  + ***  object 对象类型 ***

### 变量声明

+ 除了 ***_*** 和 ***$*** 符号外,不可以包括其他的特殊符号
+ 是否设置了***类型/值***
  + 没设置类型的默认值是: any
  + 没设置值的默认类型是: undefined

 类型断言:   <类型> 值        或者           值 as 类型

***转换通常意味着某种运行时的支持。但是，类型断言纯粹是一个编译时语法***

### TypeScript运算符



### 接口

+ ***需要注意接口不能转换为 JavaScript。 它只是 TypeScript 的一部分。***

+ ```
  namespace Aoly{
      export interface Person{
          // 函数接口的两种写法
          ():string,
          say: () => string
      }
  }
  ```

  + 坑人的匿名函数实现:  接口中包含一个匿名函数的时候才可以执行



### 命名空间

+ 基本使用:
  + <refrence path=''/>的使用
  + namespce后面的大括号要写export
  + 就是嵌套命名空间,第二个namespace也要写上export



