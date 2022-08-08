# React开始啦

### 为什么要学习前端框架

+ 原生js操作dom比较繁琐且效率低

+ 使用js操作dom会造成大量的重绘和重排

+ 原生的js没有组件化编码，代码复用率低

  

### 虚拟Dom创建的两种方式

+ cc***使用 jsx 创建虚拟dom***
  
  + 全称： JavaScriptHtml------ react定义的类似XML的js扩展语法
+ ***使用js创建 --- React.createElement()***
+ ***虚拟Dom和真实Dom***
  + 本质就是一般对象
  + 虚拟dom比较轻，真是dom重，应为多一部渲染到浏览器中，要一些真实dom的API啥的
  + 虚拟的归宿就是渲染为真实Dom

+ [jsx语法规则](C:\Users\张慧龙\Desktop\react学习\image\jsx语法规则.png)

  ![](C:\Users\张慧龙\Desktop\react学习\image\jsx语法规则.png)



#### react中定义组件

+ [***函数式组件***](C:\Users\张慧龙\Desktop\react学习\image\函数式组件.png)  ---  简单组件

  + ![](C:\Users\张慧龙\Desktop\react学习\image\函数式组件.png)

+ [***类式组件***](C:\Users\张慧龙\Desktop\react学习\image\类式组件.png)  ----  复杂组件

  + 必须extend React.Component

  + ![](C:\Users\张慧龙\Desktop\react学习\image\类式组件.png)

  + 类实例中主要的属性： props, refs, state +     context

    + tip: 三个属性是只有在class定义的组件中才有的，但是新版本的react出现了hooks可以让函数中也支持这三个属性

      

+ ***然后开始学习组件中的三大实例对象***

  + 开始使用***state***

    + 然后由于完成的功能需要，开始接触组件的事件

      + react中的事件：时间名要camel，函数不加(),表达式放{}中： onClick = {conl

    + [***强烈注意***](C:\Users\张慧龙\Desktop\react学习\image\强烈注意.png)

      <img src="C:\Users\张慧龙\Desktop\react学习\image\强烈注意.png"  />



#### class的写法

+ class中  可以写函数声明(放在对象的原型中)   + 构造函数
  + 也可以写函数赋值表达式和变量赋值表达式：
    + age =12; fu = function()
    + 其前不用加let，且其中内容会放在对象中



#### 组件三大核心属性之二： props

+ 简单的使用：  在组件的render函数中写 this.props访问 组件中传入的属性

+ 补习班：
  + reduce()方法	
    + 可以用于累加
    + 二维数组转一维数组
    + 统计数组中元素出现的次数
    + 数组去重
    + 按属性对object分类
  + ...运算符
    + 一般是用来拓展数组，但是也可以给对象： {...obj} √	  csl(...obj)  obj haven't @@iterator
      + 还可以{...obj, xxx=xx} 修改obj中的属性
    + 在babel+react中： 可以在{}中揭开一个obj
+ ***总的来说，需要的东西：***
  + **一个一个的传props，**
  + **批量传递props**
    + 给props的**数据类型限制**，加上**默认的值**:
    + 以方便组件的使用者在不完全了解组件的时候  减少误操作
    + CompName.propTypes = { name: React.PropTypes.string}
      + 当时16.x之后，为了不让React中有太多东西，直接使用PropTypes.string.isRequired
        + 并且这种写法需要重新引入一个prop-type的js文件
      + 默认值的写法： CompName.defaultProps = {sex: '不男不女'}
      + 限制传入的props必须为函数： CompName.propTypes  = {xx: PropTypes.func}
        + 因为之前的string不会和js关键字冲突，function会，所以react中使用 func
  + 且props 和Vue中一样：都是不可以修改的
+ ***states和props的简写形式总结：***
  + states的简写就是利用 直接在class中写变量和函数，变为了实例的属性
  + props的简写就是将数据限制变为Class类的静态属性
  + ***都是利用class的语法来实现简化操作的***
+ 类中的构造器可写可不写，但是如果用来，不super(props)  那么this.props就会有bug
  + 构造器中是否接受props，是否传递给super()	  取决于：是否需要在构造器中使用this.props



#### 组件三大核心属性：refs与事件处理

+ ***字符串类型的ref***：this.$refs.xx 获取的是真实节点

  + react不推荐使用这种方式了：渲染效率问题

+ ***回调refs***的问题

  + 每次组件更新会造成两次函数执行

  + 原因：         解决方法就是html中不内联js函数，函数写在class中

    ![](C:\Users\张慧龙\Desktop\react学习\image\回调refs的问题.png)

+ 小课堂：jsx中是标签形式：

  + 写注释又不可以<!-- -->  要用{//} ，先将标签转为js语法，再用js中的注释
  + {//}不可以，需要使用{ /**/ }

+ ***React.createRef()***API的使用
  + 生成一个存储ref的容器
  + 专人专用，只存一个 {current:  dom}
  + ***react最推荐的，但是很麻烦，估计效率高***



### 事件处理

> #### 基础
>
> 1. 通过onXxx属性指定事件处理函数(注意大小写)
>    + react使用的是自定义事件，而不是原生的DOM事件 ---------- 为了更好的兼容性
>    + 事件通过事件委托的方式进行处理
> 2. 通过event.target得到要发生事件的DOM元素对象
> 3. ***两个新名词***
>    1. 受控组件 和 非受控组件
>    2. 高阶函数_函数的柯里化
> 4. vscode中的折叠小技巧： // #region             // #endregion

#### HOC 高阶组件在react中和再vue中的实现

- Vue中，可以利用 mixins 和 对象中返回一个对象来实现： 利用$slots $attrs $listeners $props来个包裹的组件绑定

  1. mixins是将组件中的方法，不包括dom结构的混入；

     所以让这种方法的实现是一种 --- 侵入式的HOC实现方式

  2. 利用$属性，再包裹的组件拿到，父组件的传入，  渗透

### react 中的diff算法浅析

#### 宽脑门的思想

1. ***diff算法需要考虑的几种情况***            结构上就是考虑dom树的变化
   + dom属性的变化
   + dom的增删
   + dom的移动
