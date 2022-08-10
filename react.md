# React开始啦

## 学习的目标的技术
+ React基础
+ PubSub
> 1. 多了一个消息管理的仓库
> > + 是一个类似于**全局事件总线吗**

+ Redux
+ Ant Design

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

+ ![jsx语法规则](d:\Users\Admin\Desktop\react学习\image\jsx语法规则.png)


### 关于 jsx 的思考过程
1. jsx: js + xml; 其中就是一种方便的形式去表示虚拟Dom的形式，也是React.createElement()的一个语法糖
> + 使用转移：nativeMethod: React.creatElement(标签名, attribute, containt)
> + to:                    ReactDOM.render(divs, containner)

2. 对于其中使用变量和使用样式的方式
> + 表达式使用 **{}**, class在 **jsx** 中为了避免和 js 中的class冲突，为className

3. jsx 对于内联样式 { object类型变量 } 

4. 虚拟dom只有一个根标签

5. jsx中对于表达式和语句的使用：从jsx 使用v-for循环的一个思考

6. 对于函数式组件和类式组件，给render的第一个参数传入 大写的标签

#### react中定义组件

+ [***函数式组件***](d:\Users\Admin\Desktop\react学习\image\函数式组件.png)  ---  简单组件

  + ![](d:\Users\Admin\Desktop\react学习\image\函数式组件.png)

    

+ [***类式组件***](d:\Users\Admin\Desktop\react学习\image\类式组件.png)  ----  复杂组件

  + 必须extend React.Compon ent

  + ![](d:\Users\Admin\Desktop\react学习\image\类式组件.png)

  + 类实例中主要的属性： props, refs, state +     context

    + tip: 三个属性是只有在class定义的组件中才有的，但是新版本的react出现了hooks可以让函数中也支持这三个属性

  + 使用

    + 属性写在 **constructor** 中，其中使用super()的固定写法，然后 this. 使用自身的属性
    + 需要渲染的东西写在render函数中

    

+ ***然后开始学习组件中的三大实例对象***

  + 开始使用***state***

    + 然后由于完成的功能需要，开始接触组件的事件

      + react中的事件：时间名要camel，函数不加(),表达式放{}中： onClick = {conl

    + [***强烈注意***](d:\Users\Admin\Desktop\react学习\image\强烈注意.png)

      <img src="d:\Users\Admin\Desktop\react学习\image\强烈注意.png"  />



#### class的写法

+ class中  可以写函数声明(放在对象的原型中)   + 构造函数
  + 也可以写函数赋值表达式和变量赋值表达式：
    + age =12; fu = function()
    + 其前不用加let，且其中内容会放在对象中
+ 且在类中定义的函数在局部都开启了严格模式
+ **class** 中合法的内容
  1. 直接写赋值的变量
  2. 函数 (包括构造函数)



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

    ![](d:\Users\Admin\Desktop\react学习\image\回调refs的问题.png)

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
> 4. **注意，在classComp中，class中的函数交给了时间处理回调，所以this的指向会被改变**

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



### 受控组件和非受控组件

+ 其中非受控组件的定义是：现用现取

### 组件的生命周期

+ 首先接触的：ReactDOM.unmountComponentAtNode
+ 一个用例的反思：
  2. render中计时的改变状态：
     + 会触发递归的调用
+ componentDidMount
+ componentWillUnmount
+ review:   constructor()    componentWillMount()    render()     componentDidMount()    componentWillUnmount

+ 从父/更新的角度来说：
  1. shouldComponentUpdate
  2. componentWillUpdate
  3. ///////////////////////render
  4. componetDidUpdate
  5. componentWillReceiveProps

### 生命周期的过度

+ 废弃了：ComponentWillReceiveProps         ComponentWillUpdate       ComponentWillMount
+ 新增了：getDerivedStateFromProps                getSnapshotBeforeUpdate



### 一个jsx中折叠的小技巧

+ //#region            
+ //#endregion

## 开始react工程化学习

1. 安装 **create-react-app**
2. 使用命令 **create-react-app ...**







## react-router 的使用

### link标签的使用

> 1. NavLink 可以利用 activeClassName 来指定激活添加的类名
> 2. 任何标签都可以通过 children 属性指定标签体的body的内容
> 3. 封装一下 **Link** 可以通过使用react特殊的用于对象解构的操作符   {...obj}
>    + 其中 **{}** 表示的是其中包裹这运算符

### 一次思考

> 1. react可以不用路由的映射关系实现router效果   ===>   利用 Route 的path属性
> 2. Link / NavLink 标签和 Route / Switch   都需要被 BrowserRouter / HashRouter 所包裹
> 3. 需要学习的东西
>    + 多级路由
>    + 动态参数匹配
>    + 参数的传递和获取
>    + 命名视图
>    + re'direct 放在route组件的最后

### 巩固项目

> + 自己封装一个NavLink标签
> + 实现嵌套路由
>   + react中不适用路由表 / 命名
>   + 总感觉路由信息写的太分散了，要找的时候不好找
>   + 普通组件卸载 component中 路由组件写在 pages 中



### 参数的传递

> + params参数： this.props.match.params
> + search参数 ：  this.props.loaction.search             =>> 需要使用    qs.parse() 解析一下
> + state参数：      to中传入的是一个对象： path   state   
>   + this.props.location.state
> + 利用 withRouter 将一般组件变为路由组件

### 



| **项目提测**       |                                         |
| ------------------ | --------------------------------------- |
| **所属项目\***     | pc-student-client-new 11040             |
| **提测功能\***     | 【PC 1V1】学生端文案优化                |
| **研发\***         | 前端：杨晋 后端：张尚磊                 |
| **测试\***         |                                         |
| **产品\***         | 黄喆婷                                  |
| **jira**           | http://jira.zmops.cc/browse/PCSTUD-1518 |
| **项目功能地址\*** |                                         |
| **其他环境说明\*** |                                         |





















