# Vue官方文档的学习

## 	2.x教程

### 		基础

#### 介绍：

```
在prop中： 
	1. 是单向数据流，父可以改变子，但是反之会warning，  若是使用对象传递，子改变值会影响父
	2. 可以指定传递的prop类型---default中是对象或数组时候要用工厂函数
		可以自定义验证函数： validator: function() {}  通过函数return的boolean值确定
		** prop中数据可this.访问，但是default/validator函数在data/computed中不可用
三个大小写则注意：
	不同于组件和 prop，事件名不会被用作一个 JavaScript 变量名或 property 名，所以就没有理由使用 camelCase 或 PascalCase 了。
```

### 可复用性 & 组合

​	概述：Vue在插入、更新或移除DOM时，提供多种方式的应用过渡效果

- 原生的css，第三方CSS动画库
- 过度钩子中使用js，配合第三方JS动画库		

#### 混入

```
 
```



#### 自定义指令

​	自己有的钩子函数

- bind： 只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。

- inserted： 被绑定元素插入到父节点的时调用(只保证父节点存在)

- update：   

- componentUpdated：

- unbind：

  ***自定义指令的钩子函数中： 参数有 - el, binding, vnode, oldVnode***

  * *除了el外，其他参数应该都是只读的，切勿进行修改。如果需要在钩子之间共享数据，建议通过元素的**dataset**来进行*

```
自定义指令的函数简写：
	很多时候，想在bind和update时出发相同的行为，不关心其他的钩子
	  Vue.directive('color-swatch',function (el, binding) {
	  	el.style.backgroundColor = binding.value;
	  })
```



#### 渲染函数 & JSX	

- 基础
  - Vue推荐在绝大数情况下使用模板来创建你的HTML，然而在一些场景中实在需要JavaScript的完全编程能力。这时候可以使用渲染函数，它比模板更接近编译器。
  - 但是使用render需要对  ***实例property API***  比较了解

```

```



#### 插件

```

```



#### 过滤器

### Vue  Router

```
草稿中的潦草
   router, routes, new VueRouter({})  <router-link to="">
   <router-link></router-link>
 分类： 
 	命名路由(name)、 重定向路由(redirect-可以是路径也可以是 name)、
    别名(URL不变，内容变)
    动态路由匹配
    	:匹配的会放到 this.$route.params中
    	*匹配的会放到 this.$route.params中的pathMatch
    	两个路由渲染同一个组件的时候，组件不会销毁再创建，会复用
    嵌套路由
    	* 要注意，以 / 开头的嵌套路径会被当作根路径。 这让你充分的使用			嵌套组件而无须设置嵌套的路径。
    	- 就是在VueRouter.routes中加入children对象
    	-* 子匹配到了，父也一定会匹配到
    编程式导航
    	编程式路由：  就是api方法操作了   
    		router.push()  router.replace()  router.go(num)
     例：声明式： <router-link :to="...">
        编程式： router.push(...)
        	 <router-link :to="..." replace>							  router.replace(...)
      !!!注意：Vue Router的导航方法(push,replace,go)在各类路由模式-history, hash, abstract下的表现不一样
```

***路由模式***

- Hash模式
  - 使用URL的hash来模拟一个完整的URL，当URL改变的时候，页面不重新加载。
- history模式
  - 充分利用 history.pushState API 来完成 URL 跳转而无须重新加载页面。

```
注意对比push传递params与传递query的区别
1. 传递params的时候，参数不会拼接到浏览地址栏，重新刷新参数将会丢失
2. 传递query的时候，参数会拼接到浏览器地址栏

```

***导航守卫***

- ​		路由的改变会触发导航守卫： 1. 全局前置守卫(beforeEach( () => {} ) )      2. 全局后置守卫
- 路由独享守卫
- 组件内守卫

***↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑是briup的阉割版学到的***

### Vue Router官方文档中的

#### 命名视图

- 有时候想同时展示多个视图，而不是嵌套    (xzdp：和命名插槽有点像)
- 

```

```



### Vuex官方文档

- ***vuex是什么***
  - 专门为Vue.js应用程序开发的***状态管理模式***--集中存储组件状态

```

```





## 3.x 教程

