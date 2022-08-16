## React中好用的api方法

1. #### React.ComponentProps( typeof Component ) 获取某个组件的props

   + ***Component.FC*** 和 ***React.PureComponent***<BasicInfoProps, BasicInfoState>

     > 以上两个都可以加两个泛型，第一个是 **props**，第二个是 **state**

2. #### 和组件更新相关的api（包括 classComp & funcComp）

   + ***shouldCompoentUpdate***.
   + 类组件中使用的是 ***PureComponent***
   + memo() 函数式组件中的使用，里面自动包裹了一个shouldCompoenntUpdate

   









## ts类型用于去除ts报错的问题

1. #### ***HTMLElement*** 类型

2. #### 