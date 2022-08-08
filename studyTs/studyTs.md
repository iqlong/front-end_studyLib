### 变量类型
> 1. boolean string number

> 2. array的定义： 
> > - number[] 
> > - Array<number>

> 3. 上下文类型：
> > - 例如高阶函数forEach：其中参数函数可以不用指定类型
> > - 而且对于变量或者函数的返回值由于存在类型推断，也可以不用指定类型

> 4. 函数类型：
> > - 可选参数：再参数后面加上一个?表示此参数可以不传递

> 5. 联合类型：|
> > - 使用 | 表示d
> > - 可以让类型变宽，但是在使用的时候要考虑缩小/某些方法是否可以使用

> 6. 类型别名：给类型定义一个名字/定义一个新的类型
> > - type Point = { x: number, y: number }
> > - 可以通过 & 扩展类型，类似于 interface 中的 extends 


> 7. 接口(interface)：定义的方式和类型别名差不多，只是大括号前不用使用等号
> > - 接口可以被扩展： 使用 extends 关键字
> > - 从一个a阶段接口，扩展到b阶段的接口
> > - 两次定义同名的 interface 可以实现属性新增

> 8. interface 和 type 的区别
> > - type定义后不可以同名扩展

> 9. 类型断言
> > - any 和 unknow 作为中转
> > - 语法： str as number / <number> str

> 10. 文字类型推断
> > - 可以使用 'left' | 'right' 或者 1 | 2 这种类型的约束条件
> > - 但是会出现 'Get' 和 let x = 'Get' 不匹配的现象
> > > 1. 可以使用 ***类型断言***  ``` let x = 'Get' as const ``` 固定类型或者使用 ``` let x = 'Get' as 'Get'``` 

> 11. ts中的 null 和 undefined
> > - 可以使用 **!** 来表示类型去除了 *null* 和 *undefined* 的情况

> 12. 枚举 enum
> > - 

> 13. 原语：bigInt 和 symbol
> > - 