# 前端学习

## 	框架-Vue学习

#### day1

```
day01
let x= y;
硅谷课程：
1.vue基础
		貌似顺序：Angular --> React --> Vue
	Vue：从Angular框架启发而来，后起之秀，但是生态完善，已成为国内前端工程师的必备技能。
     一套用于构建用户界面的渐进式(Vue可以自底向上逐层的应用)js框架
        Vue的特点：
	    1.组件化模块模块，提高代码复用率、让代码更好维护(Vue创建了一个文件后缀.vue--hcj都有)
	    2."声明式编码"，让编码人员无需直接操作DOM，提高开发效率;js操作DOM是"命令式编码"(一步一步有顺序)
	    3.使用虚拟的DOM+优秀的Diff算法，尽量复用DOM节点
	    	例如：将数组[{name:'张三'},{name:'李四'},{name:'王五'}]用js操作dom.innerHTML = `</>`
		dom插入到页面，若是数组加了一个张慧，那么加入页面不是多加一个张慧，而是重新将四个都放innerHTML
		在再次放入到页面中
		   Vue相对与普通js操作dom：Vue是创建虚拟Dom，就是一次性用品和非一次性用品的区别。
		      dom改变时会将新旧虚拟DOM做Diff比较！
	    4.学习Vue之前需要掌握的Js基础知识
2.vue-cli
3.vue-router
4.vuex
5.element-ui
6.vue3
从早到晚
项目从大到小开发使用的框架
Angular  --->  React  --->   Vue	1. 借鉴 Angular 的模板和数据绑定技术
					2. 借鉴 React 的组件化和虚拟 DOM 技术


 稳固Vue.js：
        初见vue于html的引入，开发者版本和生产者版本。  // 以阻止 vue 在启动时生成生产提示。
	chrom的console中会有提示信息：安装vue插件和提示Vue.config.productionTip = false;
      
        html中引入了vue.js，相当于在全局加了一个Vue构造函数，并且构造函数中的el属性
	是''引起来的选择器，也可以写document.getElementById('#')去获取dom，其中的
	data中的数据都是供el指定的容器去使用
小结：初始Vue
    1.想让Vue工作，就需要创建一个Vue实例，且传入一个配置对象；
    2.root容器中的代码依然符合html规范，只是混入了一些特殊的Vue语法；
    3.root容器中的代码称为vue模板

    Vue中的{{}}语法，其中可以放js表达式，表达式是一种特殊的js语句/代码，因为表达式一定会有一个返回值

    4.Vue实例和容器是一一对应的；
    5.真是开发中只有一个Vue实例，且会配合这组件一起使用；
    6.{{xxx}}中的xxx只要js表达式，且xxx可以自动更新到data中的所有属性；
    7.一旦data中的数据发生变化，模板中用到该数据的地方就会自动更新。
    ****其实开发版本和生产版本都会提示警告，只是生产不会报页面中的错误，只会报底层
    的错误。***  并且文件中是有.js的源码，其中{{}}是怎么从data中拿数据的可以借鉴源码---三入vue的时候
    *new Vue中使用new关键自创建形式的this就是Vue
	chart6
    ？Vue语法是啥，就是模板语法(包括插值语法和指令语法)吗
       插值语法：{{}} 
       指令语法：v-开头  v-bind:x='',所以简写是:x='';将''中的东西当作js表达式
     day2.Vue模板语法有两大类：
     	1.插值语法：
		功能：用于解析标签体内容
		写法：{{xxx}}，xxx是js表达式，且可以直接读取到data中的所有属性
	2.指令语法：
		功能：用于解析标签（包括：标签属性、标签内容、绑定事件。。。）
		举例：略
		备注：Vue中有很多的指令，且形式都是：v-???，此处我们只是拿v-bind举例
	    数据绑定：
	        v-bind：  单项数据绑定
		v-model： 双向数据绑定：vue2中只可以设置有value的标签，
		   设置为contenteditable的标签也不可以
		   ！！！它其实有非简写形式：v-model:value='??'
	
	突然出现！el和data的两种写法
	   输出的new Vue():$开头的是给cxy用的，也就是封装后的表现层； 
	   下面的_开头的是底层的东西啦！
	   指定容器的另一种方法，$mount是原型中的方法__prop__指向的：
	   	el: '#app',
	   	vm.$mount('#root')

	  data的两种写法：
	  	对象式： data: {}
		函数： data: function() {return {}}  ===> 不是自己调用的，vue来调用的
			可以在function中输出this查看
	 小结：一个重要的原则：
	 	   由Vue管理的函数，一定不要写箭头函数，一旦写了，this就是window了

   架构模型：MVVM模型 ---》虽然vue没有完全遵守mvvm，但vue借鉴了mvvm
   	M: 模型(model)			对应data中的数据
	V: 视图(View)			模板
	VM：视图模型(ViewModel)		Vue对象实例

	观察发现：
		1.data中所有的属性，最后都出现在了vm身上
		2.vm身上所有的属性 以及 Vue原型上所有的属性，Vue模板中都可以直接用{{}}
	
   **数据代理** 定义：通过一个对象代理对另一个对象属性的操作：读或者写
       Object.defineProperty方法(Vue底层中常用的方法)
     *何为数据代理
     *Vue中数据代理的应用
	vm._data 就是定义中的data：并且涉嫌到数据劫持！！
		 也是options.data!!  但不是vm.??(数据代理的data: {??:''})
	

   事件处理：其中有event比较重要 ---> event.target拿到按钮(触发事件的dom)
				所以其中的东西就是：event.target.innerText
 调用不传参的时候，函数可以用第一个参数默认接受event
	例如：
	consl();
	methods: {
	   consl(q) {
		//接受到的q就是event事件
	   }
	}
 调用传参后，向获取event 就要在调用中写上 $event
	consl(1,$event);
	methods: {
	   consl(a,q) {
		//接受到的q=传入的$event,这样显示传递才可以获取event
	   }
	}
    Vue中的事件修饰符：
        1.prevent：阻止默认事件(常用)
	2.stop：阻止事件冒泡(常用)
	3.once：事件只触发一次(常用)
	4.capture：使用事件的捕获模式 
	5.self：只有event.target是当前操作的元素才是触发事件(冒泡到的不是.target)
	6.passive：事件的默认行为立即执行，无需等待事件回调执行完毕。
		overflow: 超出部分怎么显示的属性
		@whell(鼠标滚轮在动就触发)  @scroll
	    处理顺序：点击滚轮，执行指向的函数，在执行事件的默认行为---滚动条向下移动一些
	    看着好像很有用，但是少部分类似@whell是这种顺序执行，@scroll就是先执行
	    默认行为，在执行回调函数！,这个修饰符在移动端用的多一些

```

#### day 3

```tex

day03
键盘事件：一般用keyup事件 
    	1.Vue中常用的按键别名：
		回车：enter
		删除：delete（del和keyback键）
		推出：esc
		空格：space
		换行：tab	本来就有切换焦点的功能,说以要用keydown事件
		上：up
		下：down
		左：left
		右：right     例如：@keyup.esc="函数名"
		e.key是按键的名字  e.keyCode是按键的编码；！！！
		名字比如capsLock在使用的时候  @keyup.caps-lock:都小写+'-'
	2.系统修饰符(用法特殊): ctrl  alt  shift  meta(win)
		1) 配合keyup使用： 按下修饰符的同时，在按下别的键，随后释放，事件被触发
		2) 配合keydown使用：正常触发事件。
	*****      又出现啦：Vue.config.keyCodes.huiche = 13   Vue配置自定义键名

计算属性：computed
	data中任意数据发生了变化，vue模板都会解析一遍
		模板中若是调用了方法，方法会重新调用 
    
    小结e:computed相对与methods的优势：
    		前者有缓存，所以只会在初次调用的时候执行get函数，但是以来的data属性变化时也会用get
		computed : {
		   fullName: {
		      get() {
		         return this.fistName+this.lastName;
		      }
		   }
		}
	也可以：这样是简写形式：就是之用get不用set的时候可以这样写
	    computed: {
	      fullName() {
	         return this.fistName+this.lastName;
	      }
	    }
    总结：
    	1.定义：要用的属性不存在，要通过已有属性计算得来。
	2.原理：底层接助了Object.defineproperty方法提供得getter和setter
	3.get函数什么时候执行？
	4.	...
	5.备注：
		1.计算属性最终出现在vm上，直接读取就可以。
		2.如果计算属性要被修改，必须写set改变依赖得属性
*****    注意：使用Vuetool开发者工具，有时候有些数据已经改了，但是插件觉得
		你在页面上没有是有，就会显示

监视属性：watch
	watch: {
	   isHot: {
		immediate: true,	//初始化时handler调用一下
		//handler什么时候调用？当isHot发生变化的时候调用
		handler(newValue,oldValue) {
		   console.log('isHot被修改了!',newValue,oldValue);
		}
	   }
	}
	vm.$watch('isHot',{})注意这	个isHot加上了引号，其实上面的isHot是简写
	本来也要''起来的
   小结：监视属性watch
   	1.当被监视的属性变化时，回掉函数自动 调用，进行相关操作
	2.监视的属性必须同时存在，才能进行监视
	3.监视的两种写法：
		上面有了

深度监听：
     1）vue中的watch默认不监测对象内部值的改变（监听范围是一层）
     2）配置对象中加一个--->deep：true可以检测对象内部值的改变（多层）
 备注：
     1.Vue自身可以监测对象内部值的改变，但是Vue提供的watch默认不可以！
     2.使用watch时根据数据的具体结构，决定是否采用深度监听

  非简写形式,对象形式：
  watch: {
     isHot: {
        // immediate:true,	//初始化时让handler调用一下
	// deep:true,		//深度监视
	handler(newValue,oldValue){
	   console.log('isHot被修饰了',newValue,oldValue);
	}
     }
  }
简写形式：不需要多余的配置项，只需要handler一个方法
watch: {
   isHot(newValue,oldValue) {
      console.log()
   }
}
使用vm.$watch的简写方式和非简写方式
vm.$watch('isHot',{
  immediate: true,
  deep: true,
  handler(handlerValue,oldValue) {
    console.log('',newValue,oldValue)
  }
})
vm.$watch('isHot',function(newValue,oldValue) {
   console.log('isHot',newValue...);
})

******所有vue管理的函数，都用普通函数，不用箭头函数比较好
	不然容易出现this值的奇怪指向
  小结：学完了计算属性和监听属性，那么类似的东西有啥区别，使用时候如何选择
  	  1.在需求中计算参数改变，需要异步/等若干时间后结果改变的时候用
	     不是return返回的watch可以实现，但是computed不可以，但是一般的计算中computed确实比watch实现起来简单一些
	          vm中写的setTimeout定时器不是vm管理的，是js引擎管理的，所以可以
		  写成箭头函数，但若是不写箭头函数，this会变成window，导致函数中
		  一些数据this.parameter的this就不会是vm，导致问题出现
	  2.
	    1）所以***computed可以完成的功能，watch都可以完成，
	       但是反之不然：例如watch可以异步操作，computed不可以
	    2）所有被Vue管理的函数，最好写成普通函数，这样this的指向才是vm或者组件实例对象，

		所有不被Vue管理的函数(定时器的回调函数，ajax回调函数等),最好写成
	    	箭头函数；这样this指向的才是vm或者组件实例对象。

Vue核心：：：：：
Vue简介  初始Vue  模板语法  数据绑定  MVVM模型  
事件处理  计算属性和监听属性  class与style绑定


样式绑定： 
     绑定class样式----字符串写法，适用于：样式的类名不确定，需要动态指定
     		      数组写法，适用于：样式个数不确定、名字也不确定
		      对象写法：使用与：样式名字和个数确定，是否使用不确定
    使用不多的style样式-----
    	***例子  :style="{fontSize: fsize+'px'}"   fsize:40交给data管理
	:style="[obj1,obj2]"	obj1: {backgroundColor: 'red'}等都交给data管理
 小结：
 	1.class样式
		写法：class='xxx'  xxx可以是字符串、对象、数组
	2.style样式
		:style="{fontSize: xxx}"其中xxx是动态值
		:style="[a,b]"其中a、b是样式对象

条件渲染：
    捡到西瓜：vue有时候不在外层包裹div,因为之后的改变dom结构，会对css中的选择有影响
      template出现了，不会对dom结构有影响：并且只可以和v-if使用，
						不与v-show使用
  小结：
    条件渲染：
   	1.v-if写法
		1）v-if="表达式"
		2）v-else-if="表达式"
		3）v-else="表达式"
	   适用于：切换频率低的场景   特点：不展示的DOM直接被移除  
	   注意：v-if可以和：v-else-if、v-else一起使用，但要求结构不可以被打断
	2.v-show：使用与频率高的切换，不展示的DOM不被移除，使用样式隐藏起来了
	3.备注：使用v-if元素可能无法获取，v-show不然

 列表渲染：
    v-for(item,index in array) :key="index"
    加在谁身上就是遍历谁，key是标识，最好写上；in改成of也可以api遗留问题
    也可以遍历对象这儿的in of就没有js中的区别
      特殊的写法v-for="item in str/5"遍历字符串和遍历5次
  小结：可以遍历数组、对象、字符串(和指定次数一样用的少)

  key的原理：
	:key="index"的使用时vue使用的，在element中展示的时候会把它干掉
	***第30个视频的15分钟将key的原理涉及到了vue的虚拟DOM的细节和diff算法
	vm根据index作为表示，将新的虚拟dom和旧的虚拟DOM对比：若是不同
		就将新的虚拟dom渲染为真实dom，若相同，沿用之前的真实dom
	   有时候:key="index"没有问题(不写，vue会默认这样操作)，但是当被遍
		  历数据顺序打乱了，就容易出现问题

  大总结：面试题-->react、vue中的key有什么作用？(key的内部原理)
	 1.虚拟DOM中key的作用:
		key是虚拟DOM对象的标识，当数据发生变化时，Vue会根据[新数据]生成[新的虚拟DOM],
		随后Vue进行[新虚拟DOM]与[旧虚拟DOM]的差异比较，比较规则如F:
	2.对比规则:
	(1).旧虚拟DOM中找到了与新虚拟DOM相同的key:
		①.若虚拟DOM中内容没变，直接使用之前的真实DOM!
		②.若虚拟DOM中内容变了，则生成新的真实DOM，随后替换掉页面中之前的真实DOM。
	(2).旧虚拟DOM中未找到与新虚拟DOM相同的key
		创建新的真实DOM，随后渲染到到页面。
	3.用index作为key可能会引发的问题:
		1.若对数据进行:逆序添加、逆序删除等破坏顺序操作:
		会产生没有必要的真实DOM更新==>界面效果没问题，但效率低。
		2.如果结构中还包含输入类的DOM: 
		会产生错误DOM更新==> 界面有问题。
	4.开发中如何选择key?:
		1.最好使用每条数据的唯一标 识作为key,比如id、 手机号、身份证号、学号等唯一值。
		2.如果不存在对数据的逆序添加、逆序删除等破坏顺序操作，仅用于渲染列表用于展示，
		使用index作为key是没有间题的。

列表过滤：
     需求中学到的知识点：indexOf('')是成立的字符串中包含空字符串并返回0
     		vscode中折叠方法：#region和#endregion
     watch写模糊查询：1.data中放一个新的空数组    2.使用v-if判断
     computed去写：他在这儿和watch的区别体现出来了：
     			watch是值变化的时候才会执行，computed是一来是先执行一次，之后以来的值变化再执行
		     computed通过return返回值，watch是改变维护的值
	so：watch使用范围大于computed，但是能computed选c，没c选watch

vue监测数据改变的原理(由对象 ---> 数组)
	***  vue中的 undefined不会展示到页面中
   开始涉及到Vue.set的使用了
       然后又有vm.$set完成的东西和上面的一样！
	so：先讲数据代理在到 这儿。。。但是set方法不可以给vm或者vm中根数据对象用set添加
  变成数据啦
  *****      Vue数组中的元素没有匹配get和set，但是元素会匹配get和set
  		就是说对象包裹的有set和get，数组包裹没有，比如： [{name: 'zhl'}{name: 'logn'}]两个对象没有s和g，name有
     所以用数组的下标去改变数组vue是不承认的，只有去用js中改变数组的七个方法才好用
     		可以识别的其实vm中的数组方法，不是原来的方法了，是经过array修饰的
	所以要么全部赋值上去，要么使用修改数组的方法，要么使用set方法

总结Vue数据监测
	。。。


 
```

#### day 6  收集表单数据

```
day6：收集表单数据
    若：<input type = 'text'/>, 则v-model收集的是value值，用户输入的就是value值
    若：<input type = 'radio'/>, 则v-model收集的是value值，用户输入的就是value值
    若：<input type = 'checkbox'/>, 
	1. 要是没有配置input的value属性，那么收集的就是checked(勾选 or 未勾选，是boolean值)
	2.配置input的value属性：
		1）v-model的初始值是非数组，要么收集的是checked
		2）配置的是数组，收集到的才是value组成的数组
	   备注：v-model的三个修饰符
	   	    lazy：失去焦点再收集
		    number：字符串转为number类型
		    trim： 收尾空格去除
	   *****      注意input中输入的东西默认认为的就是字符串
	   		所以type = text和.number一起使用：前者控制输入的只可以是数字，后者将输入的转为数字

  过滤器：
  	例子timestamp的转换：使用的第三方库 ----> day.js和moment.js（bootCDN中的）
	过滤器的使用：| 管道符
		{{ time | timeFormater }}
		（目前的Vue中的属性 el,data,computed,methods,filters）
		filters: {
		   
		}
	  ***  过滤器中的传参，time永远作为timeFormater的第一个参数，之后的形参都是在value后
		   但是事件中的会被覆盖，需要$event
	  ***  和computed和methods的比较
  总结：
       定义：是对要显示的数据进行特定格式化后再显示(使用与一些简单的逻辑处理)。
       语法：
       	     1.注册过滤器：Vue.filter(name,callback) 或 new Vue(filter:{}}
	     2.使用过滤器：{{ xxx | 过滤器名}} 或 v-bind:属性 = "xxx | 过滤器名"
	备注：
	     1.过滤器也可以接受额外参数、多个过滤器也可以串联
	     2.并没有改变原本的数据，是产生新的对应的数据

503005840@qq.com	
18570552406


```

#### day7  内置指令

```
day07：内置指令
    之前学过的指令：
    	v-bind ：单项数据绑定，可以简写成：xxx
	v-model：双向数据绑定
	v-for：  遍历数组/对象/字符串
	v-on：	 绑定事件监听，可以简写成@

	v-if
	v-else-if	条件渲染(动态控制节点是否存在)
	v-else		条件渲染(动态控制节点是否存在)
	v-show

     1）v-text指令
     	1.作用：向其所在的节点中渲染文本内容。
	2.和插值语法的区别：v-text会替换掉节点的内容，{{x}}不会

     2）v-html指令
     	和v-text相比：v-html支持结构的解析
	*** 安全性问题：v-html，不如在评论中写上<a href="javascript: location.href='www.xxx'"+document.cookie></a>
	  然后保存于vue的data中，若是刚好代码中用v-html去解析且cookie没有加httponly就完蛋了！
	     所以在可信的内容上写v-html，不要在用户提交的内容上写！

     3）v-cloak指令 无值 
	  1.本质是一个特殊属性，Vue实例创建完毕并接管容器后，会删除v-clock属性
	  2.使用css配合v-cloak可以解决网速慢，页面显示的{{xxx}}问题，
	  	[v-cloak] {
		    display: none;
		}

     4) v-once  （.once是事件修饰符）
         1.v-once所在的节点在初次渲染后，就视为静态内容了。
	 2.以后数据的变化不会引起v-once所在结构的该

     5) v-pre
     	 1.跳过其他节点的编译过程
	 2.可以利用它跳过：没有使用指令语法、没有使用插值语法
	 的节点，会加快编译。

    后话：自定义指令    ---->   两种情况是不带v-的：1）报错的时候  2）定义的时候
        自己去操作DOM
      使用：===》 
        directives: {
	   big: {
	     k:v,
	     k:v,
	     k:v
	   }
	   big: function() {
	     
	   }
	}
    console.dir(element, )	 console.log(a instanceof HTMLElement)
       big函数什么时候会被调用：
       	1.指令和元素成功绑定的时(一上来)
	2.指令所在的模板被重新解析时 -----> 指令语法就是用于解析标签
js模块化的学习
  之前的历史：
  	modular模式  ---> 对象的模式  --->  立即执行函数
  一个页面需要引入多个js文件：
     问题：
     	1.请求过多
	2.依赖模糊
	3.难以依赖
     解决：
     	这些问题可以通过现代化的模块化编码和项目构建来解决。
 所以现在的模块化规范有：
 	1）CommonJS
		module.exports = value		用于暴露模块
		exports.xxx = value		

		require(xxx)		第三方模块：xxx为模块名	   自定义模块：xxx为模块文件路径
	    使用的方式：1.目录结构   2.npm init创建package.json	 3.安装uniq
	   实现：
	   	服务器端：Node.js  =>>  http://nodejs.cn/
		浏览器端：Browserify =>> http://browserify.org/  也称CommonJS的浏览器端打包工具
	2）AMD	  
	      专门用于浏览器端的(晚于commonJs)，模块是异步加载的
	      用法：
		 定义没有依赖的模块	define(function() { return 模块})
		 定义有依赖的模块：	define(['module1','module2'],funciton(m1,m2) {
						return 模块;
					})
		 引入的方式就是将define改为require
	     实现(浏览器端)：http://www.requirejs.cn/

	  我的小总结：npm init可以创建package.json
	  	ComminJs先可以运行与node服务器端，然后amd出现可以利用requireJs运行于浏览器端;之后CommonJS升级
		也可以利用browserify运行在浏览器端;	相对于自己啥也不用,他们只需在总的js中用模块js,最后在
			Html页面中<script src=''/>引入总的js;自己写需要在html中顺序引入所有的模块js!!!
	     		     
	3）CMD      4）ES6


```

#### day-n

```
day-n
 自定义指令
    验证码刷新的问题

 自定义指令：
 	directives:中可以自定义指令：其中的this指向是window
		其中bind inserted updated
	   定义语法：
	   	1）局部指令：new Vue({
				directives: {指令名：配置对象/指令名:回调函数}
			     })
		2）全局指令：Vue.directive(指令名,配置对象)/。。。回调函数
	   配置对象中的常用3回调：
	   	bind	inserted	update
	   备注：定义时候 不加v-;使用时候要加v-
	         若是指令是多个单词,不用驼峰，用-连接
 Vue的生命周期：
 	1.又名：声明周期回调函数、声明周期函数、声明周期钩子函数。
	2.是什么：Vue在关键时刻帮我们调用的一些特殊名称的函数。
	3.声明周期函数的名字不可更改，但函数的具体内容是程序员自己写的。
	4.生命周期函数中的this指向是vm或组件实例对象
       vue中可以模板都是#app  标签id="app"的;也可以用template选项，不是标签哦
   在选项中的dom结构的根节点唯一（除了<template>标签除外），然后template的东西替换掉#app	
   在声明周期中的destroyed和beforeDestroy：before的时候可以正常使用vm，但是操作vm的数据
   不会触发页面更新和钩子函数的调用

 Vue声明周期总结课程
   	常用的声明周期钩子函数：
		1.mounted：发送ajax请求、启动定时器、绑定自定义事件、订阅消息【初始化操作】
		2.beforeDestroy：清除定时器、解绑自定义事件、取消订阅消息等【收尾工作】
	关于Vue实例的销毁：
		1.销毁后借助Vue开发者工具看不到任何消息
		2.销毁后自定义事件会失效，但原生DOM事件依然有效
		3.一般不会在beforeDestroy操作数据，因为即使操作了数据，也不会触发更新流程了。
			此时不会触发update了

  组件开始,一些知识点：
  	组价：可以理解为其中放了一些html css js
	模块：是js模块，不是html也不是css,在js比较庞大(高交互)的时候拆分js

      vue的组件化比较开始的css js html的写法之优势：
      	之前 ===> 关系混乱，不好维护
		  复用性不高：js和css可以复用,但是html要依靠复制，要是硬写let hhtml = `<a/>...`也不好
  组件的定义和注册：
  	定义：let comp = { 组件内容}		======>   简写形式
	使用：Vue.extend({})

	局部注册写在components中

 使用组件：根据名字定义标签(回避html已有的标签)
     小细节：组件名字的定义
     	1）一个单词：要么全小写，vue转换后将第一个边大写;要么首字母大写
	2）多个单词：小写:用-分开,这样在js中用''包裹,不然报错!	要么多个单词都是首字母大写(cli中可以识别)
	  注册的时候和使用的时候名字需要一样,但是component中有配置项name用于在卡发者工具中显示的是啥
	  	<xuexiao/>不使用脚手架的时候后续的自闭合不识别

关于VueComponent：
	 1.组件的本质是一个VueComponent的构造函数，是Vue.extend生成的
	 2.我们只需要写<school/>，Vue解析时会帮我们创建shcool组件的实例对象，
	   即帮我们执行：new VueComponent(options)。
	 3.特别注意：每次调用Vue.extend，返回的都是一个全新的VueComponent！！！
	 4.关于this指向：
	      1）组件配置中、methods中的函数、watch中的函数、computed中的函数  this都是【Vue实例对象】
	      2）new Vue(option)配置中
	      		data函数....都是【Vue实例对象】
	 5.VueComponent的实例对象，以后简称vc(也叫：组件实例对象)
	   Vue的实例对象  vm
  一个重要的内置关系：
  	1.VueComponent.prototype.__proty__ === Vue.prototype
		作用：让组件实例对象(vc)可以访问到Vue原型上的属性、方法

Vue-Cli开始分析了
	之前的页签图标：
	   	html中使用：<link rel="icon" href=""></html>
   1.在index.html中,无需在写什么相对路径了,使用<%= BASE-URL %>表示public中国的路径
      vue-devTool:
      	    Root(vm) --->  App(组件头子) ---> someComponents
   2.在.vue中写 import Vue from 'vue'，在node-module中找到vue文件夹，在package.json
     中具体到module选项
   3.render的作用：1）vue自行调用的   2）参数是一个函数(用于创建dom)
   	没有用到this,多用箭头函数的简写形式
	其中Vue：核心+模板解析器(1/3的体积) ==这1/3开发的时候有用，写完后用webpack打包后无用啦
	  esm：es Module
	 所以呀：main.js中的模板需要使用render去解析，但是<template>标签不用，可以用vue-template-compiler
     **关于不同版本的Vue:
	1.vue.js 与vue.runtime.xxx .js的区别:
	 (1).vue.js是完整版的Vue，包含:核心功能+模板解析器。
	 (2).vue.runtime.xxx.js是运行版的Vue，只包含:核心功能;没有模板解析器。
	2.因为vue.runtime.xxx.js没有模板解析器，所以不能使用template配置项，需要使用render函数接收
	  到的createElement函数去指定具体内容。
  Cli之修改默认配置：
    1.Vue脚手架隐藏了所有webpack相关的配置，若想查看具体的 webpakc配置，请执行: vue inspect > output.js
    2.其中最好不要修改的文件和文件夹：public文件夹、favicon.ico网站的图标固定名、index.html、src文件夹、main.js 
    3.vue.config.js的使用：使用module.exports(CommonJs的模块化) ===> 因为这个文件会和webpack对比;而webpack基于nodeJs,nodeJs基于CommonJs
      想改就复写配置文件于vue.config.js，文件修改以后类似新增.vue文件，需要重启项目
        webpack中的语法检查：eslint,jslint,jshint
	vue.config.js文件中关闭语法检查：	lintOnSave: false

  Vue技术之_ref属性：
     xliao1）自闭合在h5中只适应部分标签,不正当的使用会导致后面元素渲染失败,cli中不会出现此情形
     xliao2）热加载但不会手动刷新控制台：需要手动ctrl+r
     1.其中ref和getElementById的区别：主要体现在vue组件上，用id输出的是组件中所有的dom结构;ref输出的是vueComponent
        其中的vc在组件通讯中作用很大
   props配置：
     1.类似微信转账：数据要从父组件传出,子组件还要确认接受才可以正常运行;其中子组件使用props接受,存于子组件的vc中
     2.其中每个参数有三个配置项,type required default;可以是props=['name','age']接受，
     	或者配置的简写：props={name: String, age: Number}  全写：props={name: { type: String,required: true,default: 'zhl'}}
     3.传入的props最好不要修改，页面显示会成功但是控制台会爆红
        并且传入的props和data中的重复的话，页面会以props为准
    总结：
    	1）传递数据：
			使用组件的时候写在属性上<Demo name="xx"/>
		2）接受数据：
			有三种方式：1.数组形式  2.普通对象 3.对象的value还是对象
		3）props中的数据不要改变，虽然可以改变但是控制台会报错
```



#### 67/mixin混入	

```tex
功能：可以把多个组件共用的配置提取成一个混入对象

- 使用方式：

  1).定义混合，例如：{

      		data() {...},methods: {...}

		}

  2).使用混入：	

  - 全局混入：Vue.minxin(xxx)
  - 局部混入：mixins: ['xxx']  
    - 重要的是这个和data同级，必须要有[]，其中写的是import导入的
    
```

​	 

```tex
突击es6模块化
	es6的是编译时确定依赖关系，CommonJS和AMD都是运行时确定的
	并且模块自动采用严格模式：顶层的this指向的是undefined
	2.import输入的变量都是只读的：但若是对象，修改对象中的属性是可以的，但是不建议
	3.import from后的模块可以是相对路径也可以是绝对路径，如果路径只有模块名，则需要配置文件;并且import不同于export，它有提升效果
	4.import是静态执行(运行结束才可以得到语法结构)，不可以使用表达式和变量
```

#### 70/插件的使用

​		

```
功能：用于增强Vue
本质：
	包含install方法的一个对象，install的第一个参数是Vue，后面的参数是	插件使用者传递的数据
定义：(Vue.use()会自动调用install方法)
	对象.install = function (Vue, option) {
		//1.添加全局过滤器
		Vue.filter(...)
		//2.添加全局指令
		Vue.directive(...)
		....
	}
```

​       ***npm查看某个包版本的命令：npm view webpack versions***

#### 71/scoped的使用

​		`为了让样式在局部生效，防止冲突；其中在APP.vue中写样式不加scoped会让每个组    件都有样式：它是组件头子`

#### 72/Todo-list案例

```
组件化编码流程（通用）
	1.实现静态组件：抽离组件，使用组件实现静态页面效果
	2.展示动态数据：
		2.1 数据的类型、名称是什么？
		2.2 数据保存在哪个组件
	3.交互 --- 从绑定事件监听开始
	
配菜：
	1.使用组件import的时候注意组件名和html中的标签不要冲突

炒菜：
	1.两个用于生成id的包：uuid、nanoid
```

#### 11月底-周末计划

```
 周末计划：
 	 数组的reduce方法，pre current ：用来遍历数组中某个属性为想要值的数量
   总结TodoList案例
   	1.组件化编码流程：	
	    1）拆分静态组件：组件要按功能点拆分，命名不要和html元素冲突
	    2）实现动态组件：考虑好数据存放位置，数据是一个组件用还是
 localStorage中的所有方法：
 	1.localStorage.setItem('',xx)
	2.localStorage.getItem('')
	3.localStorage.removeItem('')
	4.localStorage.clear()
    特点：数据存在硬盘，关闭浏览器不消失;读取的数据不存在就返回null
 sessionStorage的api方法和localStorage一样
   这两种都叫webStorage,
   	1.内容大小一般在5MB左右
	2.浏览器通过Window.sessionStorage和Window.localStorage属性实现本地存储机制
	3.相关API：setItem()  getItem()  removeItem()  clear()

   82/组件的自定义事件：意义是为了将子组件的数据传到父组件
   	1.父组件提前传一个方法给子组件(props接受),然后子组件使用函数
	2.使用自定义事件,父组件中绑定自定义事件,在子组件使用$emit触发自定义事件
	3.利用ref可以在父中获取子组件,类似dom2级事件的写法：
		this.$refs.student.$on('',this.data);
		this.$refs.student.$once('',this.data);  只触发一次
	    是第二种写法的变形，但是比第二种写法灵活，比如想若干秒后绑定事件
   83/组件自定义事件--解绑
   	this.$off('atguigu')：解绑多个就传入数组
	或者this.$off()：     不传参数，解绑所有 
	使用this.$destory也可以销毁自定义事件监听器,原生的是不可以销毁的：例如v-click
		可以理解为：自定义事件是绑定才vc实例上的，vc无则无   内置事件可能是在原型上的
		 父组件没了，子组件也gg了
   84/组件自定义事件
   	组件中写的事件都视为自定义事件，需要加.native:  @click.native
	    .native就是给组件的根元素绑定的
 
   组件的自定义事件：
   	1.一种组件之间的通信方式，适用于：子组件 ====> 父组件
	2.使用场景：A是父组件，B是子组件，B想给A传数据，那么就要在A中给B绑定
	

```

### 一次混沌 		↓↓↓

#### 86/事件总线

```
   86/全局事件总线：任意组件间通信
      1.一种组件间通信的方式，适用于任意组件间通信。
      2.安装全局事件总线：
      		new Vue({
		   beforeCreate() {
		      Vue.prototype.$bus = this;	//安装全局事件总线，$bus就是当前应用的vm
		   },
		   ......
		})
     3.使用全局事件总线：
     		1.接受数据：A组件想接收数据，则在A组件中给$bus绑定自定义事件
			    事件的回调留在A组件自身
		2.提供数据：this.$bus.$emit('xx',数据)
    4.最好在beforeDestroy钩子中，用$off去解绑当前组件所用的事件
   	
  
```

#### 87/消息订阅与发布

```
87/消息的订阅和发布(原生js不好实现,用的是第三方库：pubsub-js)
     1.一种组件间通信的方式，使用于任意组件间通信
     2.使用步骤：
     		1.安装pubsub：npm i pubsub-js
		2.引入： import pubsub from 'pubsub-js'
		3.接受数据：A组件想接受数据，则在A组件中订阅消息，订阅消息的
		回调留在A组件自身
		4.提供数据：pubsub.publish('',数据)
		5.最好在beforeDestroy钩子中,PubSub.unsubscribe(pid)去取消订阅	
	
  91/TodoList案例_编辑
     一个判断自己身上有没有某个属性的方法：
     	obj.hasOwerPronperty('name')

 
```

#### 93/$nextTick的使用

```
93/$nextTick的使用
    1.在一个函数中,不会执行完一条改变数据的语句就马上改变dom页面,不然或是
    	函数：改变数据 > 解析模板 > 改变数据 > 解析模板(效率就会很低)
	nextTick的使用：
	    作用：在下一次DOM更新结束后执行指定的回调
	    什么时候调用：当改变数据后，要基于更新后的Dom执行某些操作 
 
```

#### 94/ Vue中的动画和过渡

```
93/动画效果
    1.<transition>标签包裹想要添加动画的元素，(其中的appear标签是控制是否开始就显示)
    	设置样式：.v-enter-active{animation: hello 0.5px reverse}
		  .v-(类名)-enter/leave-active{animation: hello 0.5s}
	@keyframes hello {
	   from{
	     transform: translateX(-100px);
	   }
	   to{
	     transform: translateX(0px);
	   }
	}
  94/过渡的效果：
  	//进入的起点,离开的终点
    1..hello-enter,.hello-leave-to { transform: translateX(-100%) }
       .hello-enter-active,.hello-leave-active{ transition: 0.5s linear}
       .hello-enter-to,.hello-leave {
          transform: translateX(0);
       }
    2.npm中配置好的库：animate

    
```

#### 95/Vue封装的过渡和动画的总结：

```
Vue封装的过渡和动画的总结：
    	1.作用：在插入、更新或移除DOM元素时，在合适的时候给元素添加样式类名
	2.图示：
		从v-enter到v-enter-to的一个过程叫做：v-enter-active
		从v-leave到v-leave-to叫做：v-leave-active
	3.写法：
		1.准备好样式：(若是动画需要active就行;过渡就都需要了)
			元素进入的样式
				1.v-enter：进的起点
				v-enter-avtive：进入的过程  v-enter-to：进入的终点
		2.使用<transition>包裹需要过渡的元素，并配置name属性：
			<transition name = "hello">
				<h1 v-show="isShow">hello啊!</h1>
			</transition>
		3.备注：若有多个元素需要过渡，则需使用<transition-group>且每个元素都需要key
		
API总结：
	1)一个判断自己身上有没有某个属性的方法：
     		obj.hasOwerProperty('name')
	2)数组的reduce方法，pre current ：用来遍历数组中某个属性为想要值的数量

  
```

#### 98/配置代理

```
   注意：同源问题只出现于前后端传值，应为只有浏览器window中有xhr，服务器之间传值用http
     1.使用cors解决：通过后端返回一个请求头加上header(“Access-Control-Allow-Origin:*”); // 允许任何来源
	header(“Access-Control-Allow-Origin:http://local.com”); //只允许来自域名http://local.com的请求
	但是这样会使所有想访问服务器的都可以拿到东西
     2.利用script标签的src属性不收跨域影响，但这可以使用get，并且前后端都需要做出相应修改
     3.使用。。。
  总结：Vue脚手架配置代理
  	方法一：
		在Vue.config.js中添加如下配置：
			devServer: {
			   proxy: "http://localhost:5000"
			}
	1.优点：配置简单，请求资源时直发送个前端(8080)即可
	2.缺点：不能配置多个代理，不能灵活的控制请求是否走代理。
	3.工作方式：若按照上述配置代理，当请求了前端不存在的资源时，那么请求转发给服务器(优先匹配起那段资源)

	编写vue.config.js配置具体代理规则：
		module.exports = {
		   devServer: {
		     'api1': {
		       target: "http://localhost:5000",  //代理目标的基础路径
		       changeOrigin: true,
		       pathRewrite: {'^/api1' : ''}
		     }
		   }
		}
	   changeOrigin设置为true时，服务器收到请求的的host是：localhost:5000 做了一次欺骗
	   changeOrigin设置为false时，服务器收到请求的的host是：localhost:8080 不当骗子
	   changeOrigin的默认值为true
	1.优点：可以配置多个代理，且可以灵活的控制请求是否走代理
	2.缺点：配置略微繁琐，请求资源时必须加前缀
*****cli文件中的public文件夹中的东西会默认放在项目打开存在的服务器
```



#### 98/github案例

```
关于在.vue文件中import引入css：不同于在html中用<link>标签引入，会做非常严格的校验,有问题就运行不了
(此时的.css文件放在src/assets/css/xxx.css )
  所以使用第二种方法会好一些：在/public/index.html引入/public/css/xxx.css
API学习：对象或者数组的合并方法：
	对象：targetObj = Object.assign(obj1,obj2)
	 或者:targetArray = {...obj1,...obj2}
	数组：targetArray = [...array1,...array2]
  特点：都是贪婪扩容，并且后面的可以覆盖前面的
```

##### 总结：

##### 		1）API学习：对象或者数组的合并方法：
					   对象：targetObj = Object.assign(obj1,obj2)
	 				  或者:targetArray = {...obj1,...obj2}
					   数组：targetArray = [...array1,...array2]
		        特点：都是贪婪扩容，并且后面的可以覆盖前面的

##### 		2）发送ajax请求的几种方法：1.xhr(在window中，原始)  2.jQuery(还行，就是内容太多无用的DOM操作了)         3.fetch(window中,promise封装，但是封装的过于复杂)  4.axios（好，轻）  5.vue-resource(vue的插件库,后来vue不维护)

​		`vue-resource和axios写法非常相似,多部分将axios -->  $http就可以了`

#### 104- /插槽学习

```
1. 前后端发送http的几种方式：ajax  axios  vue-resource  fetch  jQuery
      正式开始的插槽学习
1）slot和slot-scope在vue2.6后没有那么支持了 ----> 代替品：v-slot， 
	1-注意v-slot只可以在template标签中使用 v-slot:''
2) 作用域插槽：就是父想用到子的数据       之前可以不用template，用slot 属性，但是这儿不管新旧都要用	
		其中scope是旧的api，slot-scope是新的
 总结：父组件可以向子组件指定位置插入html结构，也是一种组件通信方式，使用于父组件  ===> 子组件
   分类：默认  具名  作用域
   作用域插槽：数据在组件本身，使用数据用什么结构由使用者决定
```

#### 109/vuex的学习

```
组成部分： 	actions、mutations、state(store管理这个三个对象)
   方法：dispatch  commit  mutate  render
  1.使用：先在main.js中下载vuex，然后建文件夹+index.js使用
  		store = new Vuex.Store({actions,mutations,state})
  	其他的配置项：getters
  2. import {mapState} from 'vuex'
  *** 变量中的名都是字符串，所以加不加引号差不多
  3. 由于总是要写$store.state.''
  		所以vuex中提供了简写：const x = mapState({he: 'sum'})  还有mapGetters
  			const x = mapState(['he'])   一个名字，两种用法
```



## promise学习

####  	异步编程

​			`异步编程：  1）fs文件操作  2）数据库操作  3）AJAX   4）定时器   promise可使用链式调用并解决回调地狱问题` 

```markdown
Promise状态(PromiseState)的改变：所有状态：pending(未决定)     	       resolved/fullfilled(成功) reejcted(失败);   
  状态只可以有未决定变为成功/失败
Promise的值(PromiseResult):保存着对对象[成功/失败的结果]
Promise中的resolve和rejected方法：Promise.resolve(new Promise
(res,rej) => {reject('error')});
   所以resolve方法若是参数为promise还二话，reject就恒为失败返回
   
Promise修改状态的几种方式：
	1.resolve  2.reject  3.throw抛出错误
promise异常穿透？
    1.promise使用then链式回调时,可在最后使用catch
    2.前面出现的任何异常都会传到最后的失败回调中处理
中断promise链
	1.使用promise的then调用，中间中断，不再调用后面的
	2.唯一办法：在回调函数中返回一个pendding状态的promise对象
	 所以.then中可以返回任意：throw、其他或者Promise
	 Promise.reject..方法中也可以包含任意，比如Promise
```



## axios学习

​		

```tex

```





# es6学习

```
  浏览器对es6存在兼容性问题: 使用babel-cli可以转换
  	*babel只会转换es6语法，不会转换api方法，还要使用babel-polyfill
  		1.let和var的区别：
  			1）相比于var不可以重复声明
  			2）all作用域：块级，全局，函数，eval(es5的严格模式中)
  		    3）不存在变量提升
  		    4）是块级作用域，但是不影响作用域链
  		2.const关键字：
  			1）一定要赋初值，一般大写，常量的值不能修改
  			2）块级作用域
  			3）对于数组和对象的元素修改，不算对常量修改，不报错
  		  **所以以后的数组和对象可以使用const生命方式防止地址误操作	
  	   3.变量的解构赋值：从数组和对象中拿值(解构中有意义的值就是相当于声明并且赋值了的变量)  ===> 变量赋值从指定值到自由化
  	   		数组可以随便起名字，对象需要按照原名(所以机构数组有顺序,对象解构无顺序)
  	   	 数组分为：解构，不完全解构，集合解构(...)，默认值解构
  	   	 对象分为：无集合解构,嵌套解构都可以用
  	   *对字符串可以用两种解构，数组就是类似split(''),对象就是相当于调用String原型中的方法
  	   *boolean和number只用对象一种解构方式，类似字符串的对象解构
           被转换成了一个类似数组的对象
  	   +*函数参数的解构赋值、圆括号问题、用途...
  	   4.模板字符串
  	       ``的使用：
  	          ·内容可以出现换行符  
  	          ·可以变量拼接(固定格式${}) ==> 叫模板字符串
  	          
  	   5.对象简化写法
  	        key-value赋值简写，函数声明简写
  	   6.箭头函数和他的特点
  	      this是函数声明所在的作用域
  	     ·不能作为构造函数,不可以用arguments
  	     ·省略：小括号和大括号 ==> 没了{}，return一定要省略
  	     
  	     
```

### 其他

#### js学习-Dom操作

  windows对象、location对象、navigator对象、screen对象、history对象、

总结：页面挑战方法的选择   

#### axios和常用的es6语法

```
		
抽空学下axios：
	它在浏览器端就用xmlHttpRequests向服务器发送请求
	在nodeJs中又用http发送请求
   关于axios返回值的研究：
   	res包括：config(配置项)、data(响应体,axios做了json解析->对象)
	header(响应头信息)、request(原生的AJAX请求对象)、status(状态码)、statusText：(状态字符串)
     响应报文包括：响应行，响应头，响应空行，响应体

    Request Config：
    	{
	  url: '',
	  method: '',baseURL: '',
	  tarnsformRequest: [function(data,headers) {}],
	  transformResponse: [function(data) {}],
	  headers: {},
	  //设置url的参数
	  params: {
	    id: 12323
	  },
	  //对请求的参数序列化
	  paramsSerializer: function(params){},
	  //对象格式(会自动转json),字符串传递(直接传递)
	  data: {},
	  timeout...
	  //跨域是否携带参数
	  withCreat:
	}

  其中：axios可以用axios.defaults设置默认,但是这样只可以设置一个
        想多个默认就用：axios.create({baseUrl,timeOut...})创建多个实例
     拦截器：axios.interceptors.request/response.use(function() {},function() {})
     1.取消正在发送的请求,接口中使用cancelToken: new axios.CancelToken(function(c)) {
       cancel = c;    //将局部放到全局中去
     })
     再调用cancel方法就可以取消了
     2.若上一个发送的pedding状态,那么就取消再发送

   1.es6引入rest参数，用于获取参数的实参，用来代替arguments
      不同的实：rest参数是数组，之前的是对象。数组的使用更方便：必须放在最后
   2.扩展运算符：
       作用：1）数组的合并	2）数组的克隆	3）将伪数组转为真正的数组
   3.Symbol的基本使用：
       特点：1）值是唯一的，用来解决命名冲突   2）不可以和其他的数据运算  3）不可以for..in，可以Reflect.ownKeys
         **它的唯一性是不可以见的
	 创建方式：Symbol()   Symbol.for('hl')
	 *如果Symbol的参数是一个对象，就会调用对象的toString方法
	 *不能和其他数据类型，可以转string和boolean不可以转number
	 *Symbol.prototype.description
	 ***对象的.后面的东西默认为字符串,所以Symbol和它使用的时候多要放在[]中
	 * Symbol 值作为属性名时，该属性还是公开属性，不是私有属性。
	 ** 魔术字符串
	 * Object.getOwnPropertySymbols()
	 * Reflect.ownKeys()方法可以返回所有类型的键名，包括常规键名和 Symbol 键名。

    4.iterator迭代器
         工作原理：
	 	1.第一次创建一个指针，指向数据结构的起始位置
		2.第一次调用next方法，指针指向第一个元素
		3.接下来调用next方法，指针指向下一个元素
		4.每次调用next方法返回一个包括value和done属性的对象
	    注：需要自定义遍历数据的时候，要想到迭代器
```



#### 软件库：

​	utools(火柴的升级版)、everthing、tcpview，pupStu dy(裂开中)、typora、teamViewer



### 根红苗正 es6

#### 	基础数据类型 symbol

```

```



# git回顾加深

```
git的多个配置位置：
	/etc/gitconfig/:系统中所有用户都普遍适用的配置。命令：git comfi 	 g --system(位置：git下的etc)
	~/gitconfig文件：只配置用户，命令：--global
	.git/config：当前项目的git目录中的配置文件，配置只对当前项目有效
		什么都不填就是最后一个,优先级别一次增加
```



# html解构和css表现

#### ***乱码解决和编码与解码***

- ASCII                           *美国的开始的字符集：7位-128个*
- ISO-8859-1                  *欧洲的对ascll码的改进：8位-256个*
- GBK                               *也是中文的编码*
- GB2312                        *中文系统的默认编码*
- UTF-8                             *万国码，支持地球上所有的文字*
- ANSI         **自动采用系统的编码，中文环境就是GB2312;台湾就是big5...****

```
   编码(编位二进制码)：依据一定的字符集(规则),将字符转为二进制的过程
   解码(解开二进制码)：一定的规则下，将二进制转为字符的过程
 **乱码的产生原因: 编码和解码所用的字符集不同;在中文浏览器中,默认GB2312j解码
```

```
html告诉浏览器，网页采用的是什么编码字符集：自结束标签:meta
	<meta chartset="utf-8">
	<!doctype html>      h5的写法,告诉浏览器使用的不是h4/xhtml
```

#### 		***常用的标签：***

```
标题标签：h1-h6
	关心的是标签的语义，不是显示效果(这些都可以用css修改),对于浏览器搜索     引擎来说，h1只次于title;h1只用一个,一般h3以后不怎么用
段落标签: p
    相对于普通文字，独占一行，有行距
    在html中再多的空格和换行都解析位一个空格;并且虽然elements中有变化
    但是鼠标去选择没有变化;显示源代码会空格和换行都显示<br> <hr>
图片标签：img   属性：src(图片路径)  alt(图片描述-未出现【检索使用】)
   宽度和高度的使用：只有一个,保证两个的比例
	
```

#### 		***图片的格式***

```
jpeg(jpg)：支持的颜色多，可压缩，但不支持透明(保存颜色丰富的)
           一般照片使用jpeg,因为背景一般不透明(有背景,不扣图)
gif:   支持的颜色少，只支持简单透明(直线外的透明)，支持动态图
           图片单一和动图，简单透明使用
png：   颜色多，支持复杂透明
           显示颜色复杂的透明图片(开发中使用的多)
   **使用原则：
          效果不一样使用好的(除非巨大)；一致使用小的 	
```

#### 		***meta详解***

```
1. meta标签可以用来设置网页的关键字 对content的描述
	  <meta naem="keywords" content="内容1，内容2">
2. 指定网页的描述: 搜索引擎检索页面,会检索页面的关键词和描述,但是不会影响页面在搜索引擎中的排名
	  <meta name="description" content="">
3. 可以用来做请求的重定向
   <meta http-equiv="refresh" content="5;url=www.baidu.com">
```

#### 		***xhtml(语法严格,但速度可以快些)语法规范***

```
1. html中不区分大小写，但是我们一般使用小写
2. html中注释不可以嵌套！！！
3. html标签最好解构完整：要么成对出现，要么自结束
		<p>我是 ：但这样也可以：浏览器会尽力正确解析页面，修正不规范
		   但是有时候会修正错误（标签放在html外也可以）
	 修改之后在源代码中看不到,在内存中可以(elements)看到
    ***存在原因：为了强市场,不好的html写者的页面在有的浏览器可以打开(修正过的)，有的不可以。这样用户就会先咩有下限的浏览器
4. html标签可以嵌套，但是不可以交叉嵌套
5. html标签必须有值，且值必须加引号
```

#### 		***内联框架***

```
1. 使用内联框架可以引入一个外部的页面：使用iframe来创建一个内联
		src：指向一个外部页面的路径;
		width height
		name 
		但是不推荐使用内联框架,其中的内容不会被搜索引擎所检索
```

#### 		***超链接***

```
作用：让我们可以从一个页面跳转到另一个页面
     a标签
    属性：href(不知道可以#占位)，target：还可以设置为一个内联框架中打开
 **center：纯表现的标签已经不推荐使用了
 ***常用的属性：a标签实现回到顶部或者回到底部 ==> herf="#id"
    下面这个就是当点击超链接的时候会默认打开计算机的默认电子邮件客户端
      <a href="mailto:liuyr@briup.com">联系我们</a>
    id是一个所有标签都可以设置的：以字母开头,同一个页面中只可以出现一次
```



#  css入门

​		***层叠样式表：css (Cascading  Style Sheets)***：Cascading(index-z),表(多个)

***解构-表现-行为   分离才是一个好的系统

```
css的几种形式：行内；内部样式；外部引用
	<link rel="stylesheet" type="text/css"/ href="">
	使用link的好处：可以使用缓存
```



#### 		***css中的伪类和伪元素***

```
伪类：表示元素的特殊状态
	lvha的一些规则：visited伪类只可以设置颜色变化，不可以改变字体大小(设计用户隐私：ie6可以...)
           其中link 和 visited算是a的独有;hover和active很多元素都有
	 其他的一些常用的伪类： 
	      :focus 获取焦点    :before 指定元素前   :after指定元素后   ::selection选中的元素 => 在火狐中-moz-selectio（过度）

伪元素：表示元素的特殊位置
   ::first-letter    ::first-line
  html中通用的属性：id  class  style  title   dir
属性选择器：
    [key^/$/* = value]   开头/结果/属性中包含指定内容的元素
p:first-child:
	既是p元素还是第一个子元素
	nth-child: 参数：even表示偶数位置    odd表示基数位置
  变形： :first-of-type(这个类型)  :last..  :nth-of-type
否定伪类：
	p:not(.hello) {}
样式的继承：
	
文本标签：
	功能相似但是带强烈语气：<em>斜体   <strong>加粗
	            small：   big    一个字体会比父小,一个大
	     cite：表示参考内容     q：短引用，浏览器会默认加上引号
	  使用sup和sub  设置上标签和下标
	  del使用删除内容   ins下划线：表示插入的内容
	  pre: 保留格式-预格式标签   code：表示代码的语义化,不保留空格
列表标签：都有type去设置存在的样式
	1.有序标签   2.无序标签    3.定义标签	
	默认的效果，在每个浏览器中的表现形式不同,用： list-style: none
   自定义标签： 其中的dl dt dd都可以互相嵌套
   		<dl>
   			<dt></dt>
   			<dd></dd>
   		</dl>
长度单位：
	不同的显示器一个像素大小也不同：越清晰像素点越小；
	所以计算机放4k屏幕会变小一些;但是机器有些会自动转换,感觉不到
	
```



#### 	选择器的使用

```
伪类：not ==> 选择没有什么的元素
     empty ==> 选择
 1. 自定义字体的工具：ai  fontLab Studio www.fontsquirrel.com  好的站点：icomoon
   震惊：visibility的性能高于display;但是opacity的性能比visibility的性能更高
 2. 移动端开发需要的标签：<meta name = "viewport" content="width=device-width",initial-scale=1.0,user-scalable=no"/>	
 3. white-space: nowrap;  overflow: hidden;
 	text-overflow: ellipsis;
 4. resize的使用：resize且要配合overflow: auto使用
 5. box-sizing的使用
 6. UI方案：文本新增样式、盒模型新增样式(盒模型阴影,倒影,resize,box-sizing)、
 		新增UI样式(圆角,边框图片,背景,渐变)
 7. 长的border-radius分部：超过50的百分比都是50%   使用椭圆的时候：短半轴/长半轴
         ** 使用百分比的特殊：父div的宽高不同的时候，50%会针对长宽
     小知识：pc端的浏览器是可以独立更新的；而手机的浏览器是随着系统更新的
    禁止请用滚动条的方式：html,body {height: 100%;overflow: hidden}
    
 8. 滚动条需要出现在html还是body上或者是在document上：默认出现的窗口的滚动条是在document上的
      总结：
      1. html中不会出现滚动条，html或者body设置一个overflow -- 滚动出现在document上
      2. 根据设置滚动条的规则 -- 消除默认滚动条：就是html和body随便在一个地方设置overflow: hidden就行
         html和body 都设置overflow -- 滚动条可以出现在body上
    遗留：初始包含块和overflow在动body还是html或者是document的问题
    		面经每日一看+每日任务
    边框图片	
    background-image：无论边框多大，图片的大小还是不会变化
 9. 默认情况下，背景图片从padding-box开始绘制，从border-box开始剪裁
 
   图片中：若是图片的高度或者宽度修改了一个，另外的一个会自适应
       所以，想不用图片的自适应样式，自己可以用background-size自己指定
      建议：简写属性使用的时候最好是不超过三个，超过三个的简写属性就不再使用了
 10. 渐变不是颜色，是图片，是图片!
       使用方式：linear-gradient(-45deg, red, yellow, green)
         第一个参数可以是角度/to left(top,right,bottom) 后面的多个参数都表示颜色的变化
 c3中的重点：过渡   2d/3d变形    动画   布局扩展
 
 
```

#### 

#### 		***文本基础 | 盒子的几个关键字及其使用***

```
text-decoration:
	none	underline	overline	line-through
a：默认添加下划线---underline
letter-spacing：设置字符间距(中文和英文都有用)
word-spacing:	设置单词之间的距离 -->设置空格之间的大小
text-align:		默认值：left
text-indent:	设置首行缩进  2em (可以设置为负值,将字隐藏--用户看不到,搜索引擎看得到)

margin的使用：
	由于盒子默认是从左，从上布局的，所以设置左，上边距的时候会影响盒子自身对的位置;设置右和下边距会影响其他的盒子摆放(可以设置为负值,反向移动)
  设置为负值后会让块级元素重叠！！！
  		auto值：一般设置给水平(贪婪距离)=>所以left和right:auto:居中
  		  垂直方向：默认就是0(垂直方向的外边距[相邻]：塌陷，取最大值)
  	 *** 出现塌陷的需要的两个条件：垂直方向的margin  相邻(兄弟/父子)
  	   兄弟之间：取最大的margin
  	   父子之间：同时设置一个margin,位置都变化
  	     解决这个父子的问题：
  	       1.需要不相邻 => 使用元素,border/padding都可以隔开,是他不相邻	
  	       2.用padding不用margin  
  	      ***但是两种方式都需要仔细计算

```

#### 		***浏览器的默认样式***

```
浏览器为了在页面中没有样式时候，也会有一个比较好的呈现效果
  它为许多元素设置了默认的padding和margin
    开发中其实不想有：去除 => 清除浏览器的默认样式
    让那个有自己行为的标签也gg了
    * {
        margin: 0;
        padding: 0
    }
```

#### 		***内联元素的盒子模型***

```
可以设置水平方向的pedding  
	垂直方向的也会显示：**但是不会影响布局** 改变后不会让别的盒子移动
border也是：水平会影响别人,垂直不会影响(类似块元素的负值margin！！！)
不可以设置宽高
margin：水平方向的外边距不会重合;内联不支持垂直方向的外边距
**** 就是水平都可以用；垂直都有问题！
```

#### 		***display和visibility***

```
通过该display修改元素的类型(block inline-block inline)
	none: 不显示元素不占地方
visibility：值 = visible(默认) hidden(不可见)
```

#### 		***overflow的使用***

```
子元素默认是存在父元素的内容区中的;超出部分会在父元素以外的位置显示
值：visble(默认值) hidden(溢剪没) scroll(滚动条一直存在) auto(好用)

```

#### 		***文档流***

```
定义：文档流存在网页的最底层，表示的是一个页面中的位置
  我们创建的元素默认都在文档流中
  **元素在-文档流-中的特点：
  		块元素
  		    1. 块元素在文档流中会独占一行，从上到下排列
  		    2. 块元素在文档流中默认宽度是父元素的100%
  		*** 3. 默认高度默认被子元素撑开
  		内联元素
  			1. 内联元素在文档流中占自身大小，默认从左向右排列；会自动换行
  			2. 宽高都被内联元素撑开
  	  当元素宽高为auto,指定padding不会影响可见框大小，只适应
  	***小细节：几个行内块元素中间有缝隙，可能是换行的原因(解析为空格了)！！
```

#### 		***开始脱离文档流***

```
1.使用float： 默认none、不继承
    浮动后，下面元素立即向上移动，并且会尽量想页面的左上或右上移动
2.浮动元素的宽度不适合后，浮动会乱走 
3.***讲究的浮动元素：浮动元素不会超高他的兄弟***
4.浮动的元素不会盖住文字，文字会自动环绕在浮动元素的周围
     文档流中的块元素：宽度为父;高撑开  非文档流中块：宽高都是子撑开的
5.内联元素脱离文档流后类似块元素：可以设置宽高
```

#### 		***固定布局和自适应布局***

```
固定布局 和 响应式布局
颜色的几种方式：
		名字；十进制的rgb表示和十六进制的#表示
   字体分类：（直接使用这种大分类，每个浏览器实现不同）可以使用来兜底
   	serif  sans-serif  monospace  cursive fantasy
	衬线字体  非衬      等宽        草书     虚幻
     有书法钩  横平竖直  每个字符一样宽
   font的简写：斜体 加粗 小写大写字母可以随便（有无，顺序）
      但是大小 和 字体样式必须有；而且是倒数第二和倒数第一
     方便，而且多次css写在一个简写(一个css上),多次解析变为一次，对性能好些

   行间距：css中其实并没有直接的方法设置行间距;简介改变行高
      文字默认在看不见的行中居中显示
      行间距 = 行高-字体大写；所以每行可以重叠显示;行高的百分比相对于字体大小
     font中也可以设置行高：font: 20px/50px '微软雅黑';  没指定行高,默认为字体大小
       所以先设置行高，再font;后面的可以覆盖后面的
```

#### 		***高度塌陷问题***

```
子元素浮动 -> 父元素高度塌陷 -> 父元素下面的兄弟就造反了
  所以在开发中避免高度塌陷的问题
  解决： 1.父元素写死高度
 概念：根据W3C的标准：在页面中元素都有一个隐含的属性叫做Block Formatting Context(块级格式化环境)
   简称：BFC  ==> 属性是打开或者关闭;默认是关闭的
    当开启元素的BFC以后,元素将会具有如下的特性:
    1.父元素的垂直外边距不会和子元素重叠
	2.开启BFC的元素不会被浮动元素所覆盖3.开启BFC的元素可以包含浮动的子元素
  所以：开启BFC开启需要间接开启：
  	1.设置浮动（不为none0）
    2.设置元素的绝对定位（absolute,fixed）
       上面两种方法会带来新的问题
  	3.设置display为inline-block,table-cell,table-caption,flex,inline-flex
  	   好一点，还是有副作用
  	4.overflow不为visible的值
  	   小问题：ie6及以下的不符合BFC,在ie6中虽然没BFC,但是有hasLayout,通过开启它：zoom: 1 (副作用小)原意：表示放大几倍
  	** 在IE6中，如果为元素指定了一个宽度，则会默认开启hasLayoutl
总结：想多多支持都写 overflow: auto;zoom: 1

```

####     ***总结高度塌陷的解决方法***

```
解决高度塌陷的问题
    	1. BFC
	     比较好的方式：overflow: hidden
	     带来的问题：父元素设置之后,子元素中若是使用relative就会有问题,元素看不到了!

	2. 清除浮动
	     lear: both  清除两侧的影响,但实际效果是比较左右,清除影响最大的浮动影响
   ps的使用/ps学习：
   	1. 开始就将单位设置为px(标尺和xx)
	2. ctrl+r(2?)可以打开坐标轴  ctrl+1 ctrl+0(适应页面的大小)
	3. f8看截取到的信息或者点击感叹号
	4. 从标尺可以拖出来来辅助线(ctrl+h  显示或隐藏)
	5. 

 
```

#### 	***浮动到定位***

```
定位：static(默认值,未开启定位) relative absolute fixed sticky
   relative相对定位
     1.当开启了元素的相对定位后，而不设置偏移时，元素不会发生任何变化
     2.相对定位是相对于元素的文档流，原来的位置定位的
     3.相对定位元素不会脱离文档流
     4.相对定位会使元素提升一个层级
     5.相对定位不会改变元素的性质，块还是块，内联还是内联
   absolute：绝对定位
     1.开启绝对定位，会使元素脱离文档流
     2.开启绝对定位，不设置偏移量，位置不不变化
     3.绝对定位是相对于离他最近的开启了定位的祖先元素进行定位的
     	 如果祖先元素都没有开启定位，则会相对于浏览器市口(html)
     4.绝对定位会让元素提升一个层级
     5.绝对定位会改变元素的性质
     	  内联元素变为块元素
     	  块元素的高度和高度默认被内容撑开
   fixed固定定位
   	 当元素的position设置为fixed后就开启了固定定位
    
    全部新增总结：
       选择器、自定义字体、新的UI方案、过渡、2d/3d变形、动画、布局扩展 
     方案：文本新增样式，盒模型新增样式，新增UI样式(圆角,边框图,背景和渐变)
   	 
```

#### 		***元素的层级***

```
1. 如果元素的层级是一样的，那么下面的会盖上面的，例如margin未负值的时候
2. 使用z-index设置层级：正整数，越大越在上面，但是父元素再高也不会盖住子元素：水涨船高!
	  但是只可以给开启定位的元素使用：其他的就是按照后盖前的规则
3. opacity：0-1设置透明度： ie8及以下换(filter: alpha(opacity=50))
```

#### 		***css中的backgrounds***

```
1. 当盒子的大小比图片小的时候,显示的是图片的坐上部分
2. 要是盒子大于图片：显示的就是许多重复的图片
*3.可以同时设置背景颜色和背景图片，背景颜色会作为图片的底色
       一般的都是同时指定的，图片没又是好看一点
4：属性：
	background-color	background-image=url()
	background-repeat: 背景图片是否重复
		默认是reapt,可以设置repeat-x,repeat-y,no-repeat
		
  background-position
  	可以指定两个值：一个水平一个垂直
		可以是自定义的%和px  ==> 水平和垂直
		还可以在left right bottom top center中选两个
  backgground-attachment:
  	scroll和fixed：设置为fixed后会相对于浏览器的窗口定位
	  不随窗口滚动的图片，一般多是设置给body，不会设置个其他元素
	   这样导致：图片不会随着页面滚动而滚动，但是div没了图片也会没有
      图片使用url引入-切换的时候闪烁的原因：
      	   背景图片是以外部资源的形式加载页面的，每次加载一个外部资源，就发一次请求 
	   当伪类:hover触发才去加载图片,:active触发有加载响应的图片
	   **所以：三个按钮放在一个图片中，同时加载
	   	之所以三个图片放一起比单独的三个图片空间小--三套颜色点变为了一套颜色点
	 自己设计雪碧图：先扩展画布宽高，在图片拖入，然后生成图片
```

#### 		***css3中对background的扩展***

```
   c2中的5个属性： -image -color -repeat -position -attachment

bakground添加的图片可以多张：越前越上
   c3中的3个属性： -clip -size -origin
```

#### 		***表格的使用***

```
1. css属性:border-spacing边框距离  broder-collapse:collapse合并边框
  html属性：cell-spacing单元格距离  cell-padding单元格的距离
2. 长表格的模块划分：thead、tbody、tfoot
	  三个的顺序永远在上 中 下部分
	  **如果table中没有加上tbody，那么会将tr外面自动加上tbody
3. 表格的发展史
	  之前的网页布局使用的就是table，但是现在css已经将他淘汰了
    *表格的小特点：列的数量由最多的列决定;td是无意义的标签
```

#### 		***完善clearfix-清除浮动***

```
1. 父子margin塌陷的问题：
	1）使用空的div隔开不可以解决，但是添加table标签可以！
	    所以用伪类 :before {content: '';display: table}
	   发现：这种解决margin塌陷和解决高度塌陷的方法很相似：
	   	所以都用一种.clearfix:after,clearfix:before 	                {content:'';display:table;clear:both;zoom:1(兼容ie6)}
```

#### 		***表单***

```
     最常见的表单：百度的搜索框就是！
       默认选中：radio和checkbox中是checked
          select中是selected;select由特殊的属性：multiple=""
         并且select下可以写optgroup(lable='')中分组
 3. inptu的type=submit(无字也会出现默认字)和type=button(单纯的按钮)==>功能用js自定
      自结束标签input，非自结束button
 4. html中专门提供了一个标签，来选中表单 的提示文字
 5. 长表单：大表单拆成几个部分
   		在表单中使用fieldset为表单分组，它可以有一个legend子标签，
   		来指定表单模块的名字
```

#### 		***框架和框架集***

```
  框架集和框架类似，都是用于在一个页面中引入其他页面，多个和一个之分
1. frameset(属性-行显示还是竖显示)来创建框架集,注意：它和body不和
	属性：rows="40% , 50%"  cols=""  必须二选一，且指定没个子元素占用的大小    *：表示剩余大小
	** frameset可以嵌套自己
	子标签：frame ~ iframe： 只frame是自结束的标签
	   src属性
	 tip：iframe和frameset一样，其中的内容都不会被搜索引擎检索
	     其中不可以有自己的内容，每一个框架都会发送一个请求
```

#### 	   ***ie6中对png24支持度不高--可以用png8代替***

```
但是最佳的解决方法是：使用js来解决该问题：
	引用外部的js(DD_belatedPNG....js)+自己的js代码
	<script>
	   DD_belatedPNG.fix("选择器,选择器");
	</script>
2. 类似这种只需要在固定的浏览器中执行，别的不用执行
	使用CSS Hack：条件Hack，只对低版本IE有效，其他的当它为注释
	 <!--[if IE]>  固定ie6： if IE 6 范围: if lt/lte/gt IE 9
	 	<p>低版本的ie就别用了！</p>
	 <![endif]-->
	 *还可以用在伪类兼容ie而写的css样式
	 **hack分为：条件hack  
	 	属性级hack  _background-color: red;(_：ie6及以下,*:7)
	 	 用法：在前面或后面加上hack修饰
	 	 注意：不到万不得已不用
	 	选择符级hack
	 	  用法：在选择器前使用修饰符---各个浏览器都有自己的hack
```

#### 		***深入了解浮动元素***

```
  浮动元素会生成一个块级框：所以浮动后就类似声明了一个display: block
************** 浮动元素的规则 ***************
1. 浮动元素的左右外边界不会超过包含块的左右内边距(浮动的父子)
2. 浮动元素在竖直方向上有交集，则挨着上一个兄弟浮动元素，否则可以挨着父
		所以浮动元素不会出现相互覆盖问题
3. 拗口的一条规定让left和right的浮动也不会重叠
4. 类似第一条：浮动元素的顶不会高于父元素的顶;两个非浮动的元素中一个浮动可以撑开父元素

```

#### 		***菠萝的hcdemo***

```
1. chrom中最下支持的字体是12
2. ieTester的使用问题和h builder的插件下载问题
3. 考虑优化的问题：压缩css使用的软件：jscssZip
     图片是用sprite雪碧图搞定
```

#       css3

​		***选择器的使用***

```
伪类：not ==> 选择没有什么的元素
     empty ==> 选择
 1. 自定义字体的工具：ai  fontLab Studio www.fontsquirrel.com  好的站点：icomoon
   震惊：visibility的性能高于display;但是opacity的性能比visibility的性能更高
 2. 移动端开发需要的标签：<meta name = "viewport" content="width=device-width",initial-scale=1.0,user-scalable=no"/>	
 3. white-space: nowrap;  overflow: hidden;
 	text-overflow: ellipsis;
 4. resize的使用：resize且要配合overflow: auto使用
 5. box-sizing的使用
 6. UI方案：文本新增样式、盒模型新增样式(盒模型阴影,倒影,resize,box-sizing)、
 		新增UI样式(圆角,边框图片,背景,渐变)
 7. 长的border-radius分部：超过50的百分比都是50%   使用椭圆的时候：短半轴/长半轴
         ** 使用百分比的特殊：父div的宽高不同的时候，50%会针对长宽
     小知识：pc端的浏览器是可以独立更新的；而手机的浏览器是随着系统更新的
    禁止请用滚动条的方式：html,body {height: 100%;overflow: hidden}
    
 8. 滚动条需要出现在html还是body上或者是在document上：默认出现的窗口的滚动条是在document上的
      总结：
      1. html中不会出现滚动条，html或者body设置一个overflow -- 滚动出现在document上
      2. 根据设置滚动条的规则 -- 消除默认滚动条：就是html和body随便在一个地方设置overflow: hidden就行
         html和body 都设置overflow -- 滚动条可以出现在body上
    遗留：初始包含块和overflow在动body还是html或者是document的问题
    		面经每日一看+每日任务
    边框图片	
    background-image：无论边框多大，图片的大小还是不会变化
 9. 默认情况下，背景图片从padding-box开始绘制，从border-box开始剪裁
 
   图片中：若是图片的高度或者宽度修改了一个，另外的一个会自适应
       所以，想不用图片的自适应样式，自己可以用background-size自己指定
      建议：简写属性使用的时候最好是不超过三个，超过三个的简写属性就不再使用了
 10. 渐变不是颜色，是图片，是图片!
       使用方式：linear-gradient(-45deg, red, yellow, green)
         第一个参数可以是角度/to left(top,right,bottom) 后面的多个参数都表示颜色的变化
 c3中的重点：过渡   2d/3d变形    动画   布局扩展
 
 
```

#### c3 2-1 复习

```  
过度只关心元素的初始和结束状态，没有办法获取到过度的每一帧的状态
  元素在初次渲染没有结束的时候，没有办法出发过度
  绝大部分变换样式切换时，变换的组合个数和位置需要一样
1. 再次总结百分比使用的时候相对于谁
	 top、hieght：参照于包含块的高度
	 left、margin、padding、width：参照的是包含快的宽度
	 translate(-50%,-50%)：参照于自身的宽高
	 background-position：参照于(图片区域-图片的位图像素值)
2. translate不会触发重新布局！


导读. 细腻的名字：样式表由一条条的规则组成；规则是选择器和声明块组成，声明块是	css属性+属性值
      浏览器渲染选择器是从右往左
    本节的内容和完成目标：1）选择器 2）自定义字体 3）新的UI方案 4）过度 5）2d/3d变形 6）动画 7)布局扩展
       less的熟练使用
css权威指南笔记：
	1. 元素的样式不会想上传递，唯一的列外---body可以传到html上
	2. 零特殊性比没有特殊性要强：所以*通配选择器会造成继承短路的问题
  c3的复习：
  	1. 盒模型新增的样式
  		 box-shadow
  		 	关键字(内外阴影)
  		 	lenght length lenght lenght color
  		 	 x轴		y轴	模糊程度  阴影面积 阴影颜色
  		 text-shadow
  		 	只有x轴 y轴 模糊程度 阴影颜色四种 
    2. 倒影(webkit内核、文字描边、背景镂空)
    	-webkit-box-reflect: left 10px;
    		可以加渐变
    3. box-sizing
```

##### ***animation中的属性   @keyframes***

<img src="C:\Users\张慧龙\Desktop\typora笔记\animationApi.png" style="zoom: 80%;" />

```
1. 基本的和transition类似的属性：animation-name, animation-duration,animation-time-function,animation-delay
   它特有的属性：animation-direction(normal,reverse,alernate), animation-iteration-count,
      反转会反转keyframes和timing-function(可以贝塞尔/step)  重复会重复keyframes
    ***属性：animation-fill-mode,animation-play-state	 
      元素在动画(from ~ to)外的状态: forwards,backwards,both 动画前/后状态和from/to一致
       定义动画的执行和暂停：pause和running
```

##### ***复习***

```
	元素垂直水平居中方案
		已知高宽
			1.position=absolute,lrtb=0,margin=auto,包含块一定的是容器。（绝对定位盒模型的特性）
					left+right+w+p+m = 包含块的宽度
					top+bottom+h+p+m = 包含块的高度
			2.position=absolute,lt=50%,包含块一定的是容器,marginT/L为负的自身的一半。
			3.position=absolute,lt=50%,包含块一定的是容器,transform:tranlate3d(-50%,-50%,0)
			4.flex
		未知高宽
			1.position=absolute,lt=50%,包含块一定的是容器,transform:tranlate3d(-50%,-50%,0)
			2.flex
		img元素如何元素垂直水平居中
			1.基线
```

​	 		

##### **富余空间**

```
flex中的富余k
```

##### ***规范***

```
	html和css可以看看w3c的规范定义
	js中的三个重要的规范：ECMA规范  DOM规范	BOM没有规范(H5制定中)  规范虽然出来了，但浏览器还要慢慢兼容
		window是浏览器，看BOM可以看看window
```

##### ***网格布局的使用***

```
1. 网格布局：  display: grid
	  其中 grid-template-columns和grid-template-rows的值
	   px  %  fr  repeat()函数
	 1. 对其中的项目的：(默认值：strtch)
	 	 justify-items: start/center/end/stretch
	 	 align-items:   start/end/center/stretch
	    两者的简写属性：   place-items: <> <>
	    *** 这些属性定义了网格的轨道，一个网格轨道就是网格中任意两条线之间的空间。
	    
	  2. 整个内容的设置：  justify-content:  整个内容在容器上的对齐方式
	  				 align-content:	   。。。垂直上的对齐
	  				 place-content:	 上两个的简写
	  3. 每个内容的命名：grid-template-areas  无名就用.
	  
	  4. 每个项目的开头和结尾
	  	  grid-row-start  grid-row-end: 简写形式 -> grid-row: e-start/e-end;
	  	  实现类似的效果也可以： grid-area: 设置好的name;
	  5. 每个内容的： align-self/justify-self/place-self
	  
	** fr单位的使用：一个fr代表着网格中可用空间的一等分
	  
```

#### 

#### 		过渡和动画

```
1. 要明白的一点是：***并不是所有的css属性都有动画！*** 比如：display: none就没有过渡效果
 transition的属性：众所周知，css改变样式的速度极快，一瞬间的事情
    transition-property:
    transition-duration：
      这两个大哥不一样长的时候，duration会被复制以供property来使用
      而且duration需要加单位哦，不可以是负值
    transition-timing-function:
    transition-delay:
     小总结：其中property对应的下面三个---带时间的不够都要全部复制，timing则使用默认值
2. 检查过度是否完成(transitionend/webkitTransitionEnd)
     dom事件：行内事件、dom0级事件、dom2级事件(不用带on)
     1）使用transition和js实践：过渡会自己回来，js不会
     2）每一个属性的过渡完成都会触发transitionend事件
     	   但若是之前就设置了display: none;就没有后面过渡的事了(
     	     过程式 -> 异步思想：js读代码块，css渲染页面慢)
```

#### 		过渡天坑

```
1. 其中异步和过渡的渲染问题
2. transition 在元素首次渲染还没有结束的情况下是不会被触发的
    所以需要将东西写在window.onload()中
  transation由简写属性，由于其中的有两个同样的属性值，所有第一个时间给的是duration第二个给的是delay
3. 在绝大部分变换样式切换时，如果变换函数的位置和个数不相同也不会触发过渡
   不仅是个数需要相同，位置也应该一样
  ！！！rotate的使用类似方向盘，可以记忆状态
```

#### 变形

```
1. 2d变化translate使用
    可以在变形中使用过渡
    其中的属性：translate() rotate() scale() skew() matrix()
    			平移		  旋转      缩放    倾斜
    transform-origin: 可以改变基点
     matrix：矩阵-它就包含上面的四个东西
     使用：可以接受6个值
    即等价于矩阵变化函数：matrix(cosθ, sinθ, -sinθ, cosθ, 0, 0)
    注意：变换组合时候，从右往走运算  transform: scale(.5) tanslateX(100px) 
   像上面这种的组合运算可以视为从左往右，有缩放会让坐标轴缩放，影响后面的移动，当然只是心算的时候可以这这样想一下 ；！！并且矩阵的运算不满足交换律，所以顺序不同的组合是会产生不同的结果的   --- 组合是一起跑动的                  
```

#### 		***景深的效果***

​        <img src="C:\Users\huilong.zhang\Desktop\typora的笔记\QQ截图20211222145700.png" style="zoom:80%;" />      

```
1. 让3D场景有进大远小的效果（我们肉眼距离屏幕的距离）
	 是一个不可继承的元素，作用于子元素：perspective: 300px
	 让他作用于自己本身的写法：transform: perspective(300px)，但是这样写需要注意transform是有毒的！  而且perspective要在第一个
2. 景深的定义：  景深越大，灭点越远，元素变形越小
  景深基点：控制眼睛的位置  x和y：perspective-origin y:perspective
 实现的目标：3d感(近大远小)和层次感

3. transform-style: 营造有层级的3d舞台  transform-style: preserve-3d
	和perspective类似： 不可以继承，作用于子元素

出现的问题： 景深叠加--一个复杂的每个浏览器不同表现的问题
4. 属性：backface-visibility(hidden/visible)
	默认是visible，设置是否显示元素的背面
	
```

#### 		***animation中的属性   @keyframes***

​       ![](C:\Users\huilong.zhang\Desktop\typora的笔记\animationApi.png)  

```
1. 基本的和transition类似的属性：animation-name, animation-duration,animation-time-function,animation-delay

   1. 它特有的属性：animation-direction(normal,reverse,alernate), animation-iteration-count,
      反转会反转keyframes和timing-function(可以贝塞尔/step)  重复会重复keyframes
      
***2. 属性：animation-fill-mode,animation-play-state	 
      元素在动画(from ~ to)外的状态: forwards,backwards,both 动画前/后状态和from/to一致
       定义动画的执行和暂停：pause和running
```

#### ***居中方法的小总结***

```
	元素垂直水平居中方案
		已知高宽
			1.position=absolute,lrtb=0,margin=auto,包含块一定的是容器。（绝对定位盒模型的特性）
					left+right+w+p+m = 包含块的宽度
					top+bottom+h+p+m = 包含块的高度
			2.position=absolute,lt=50%,包含块一定的是容器,marginT/L为负的自身的一半。
			3.position=absolute,lt=50%,包含块一定的是容器,transform:tranlate3d(-50%,-50%,0)
			4.flex
		未知高宽
			1.position=absolute,lt=50%,包含块一定的是容器,transform:tranlate3d(-50%,-50%,0)
			2.flex
		img元素如何元素垂直水平居中
			1.基线
```

#### 		***自己学完3d的总结***

```
1. steps中，start看不到第一帧，end看不到最后一帧
2. 应用景深的元素称为“舞台元素”，舞台元素的所有后代元素都会受影响，（如果后代元素中也添加了perspective属性，效果会叠加而不是覆盖）
3. CSS 属性 transform-style 设置元素的子元素是位于 3D 空间中还是平面中。
	这个属性不会被继承，因此必须为元素的所有非叶子子元素设置它。
	
 1）其中开机动画中：
 		css代码行1：
 		在移动端必须要有的一个标签：<meta name="viewport" content="width=device-width, initial-scale=1.0,user-scalable=no”/>

** transform只对块级元素有效
** 
```

#### 		***flex开始咯***

```
1. 最早的flex其实是display(display: box)  在移动端用的很多
	postcss  使用的几种方式display: -webkit-flex/flex/-webkit-box
    
2. 旧版本的box和新版本的flex的区别：
	 1）定义主轴：-webkit-orient: vertical/horizontal;    flex-direction: column;
	 2）控制主轴的方向：-webkit-direction: normal/reverse;  还是flex-direction: culumn-reverse;
	 3）富裕空间：-webkit-box-pack: start/end/center/justify   justify-content: 
	 
学完了flex：我的笔记是：
	1） 属性分为容器： flex-direction	flex-wrap  justify-content  align-items  align-content
			   flex-flow: direction和wrap的简写形式： 控制主轴和侧轴上的位置和方向
	2） 项目中的属性： align-self  flex-grow  flex-shrink  flex-basis  order(越大越后)
	
	简写属性： flex 其中flex: 1是一个语法塘，同时设置了flex-basis: 0;flex-shrink: 1;flex-grow: 1
 **关于侧轴控制上的--   align-self和align-content和align-items的区别
  			优先级-> align-content(多行看作一个整体) align-self(单独项目) align-items(每一行)
 **其中align-content中的属性有align-items和justify-content中所有好用的属性    
```

#### 		***响应式开始咯***

```
  css3响应式查询是响应式的核心：
  	1. css2中出现的类似概念：css代码行2：<link rel="stylesheet" type="text/css" href="index.css" media="print"/>
  	   效果：只有在浏览器 ‘打印’ 的时候才会显示出来（类似css中使用if-else）
  	     media=screen  就是只有在彩色屏幕上才显示
  	2. css3中对他的扩展
            #操作符    #媒体类型(all, screen, print)   #媒体属性
            
 其中：flex布局和响应式布局  相对于  多列(分栏)布局,要重要一些
 
ecma404：json规范
ecma262：js规范
```

#### canvas开始了 

```
1. canvas的画布默认就有宽高-   width: 300px;height: 150px
2. 默认的颜色
```



# 		Html5

```
    attr和prop的使用
1. DOM中nodeType的几个值：1 2 3分别是元素节点、属性节点、文本节点
		attribute一般是html标签中的属性,
		property是js节点对象的属性
2. property值是否是boolean分为：bool值属性和非bool值属性
     布尔值属性：1. 改变property时，不会同步attribute
     		   2. 没有动过property，attribute会同步property
     		        一旦动过property后，attribute不同步
     非布尔值属性：可以同步
    代码操作：attribute: node.setAttribute() = '' 
            property:  node.property = ''
总结：浏览器认识的和用户操作的都是property，所以attr虽然不好用但是成本底，所以*** 布尔用attr其他都用property ***

   H5提供的小功能

1. atrribut中的class对应到property就是className,但是className是字符串不好操作，所以出现了classList

*2. 自定义属性没有property？不可以node.property了,用setAttribute*
     自定义属性前面加data-： 可以用node.dataset.xxx来访问
    而classList通过：node.classList.add()/remove/toggle方法使用
   
 3. 新增属性：contenteditable
	
```

#### 	  h5和一些横向知识的了解

```
1. h5的优势：唯一一个通吃pc mac iphone android等主流平台的跨平台语言，其实就是浏览器的跨平台(h5运行再浏览器上)
     快速迭代  低成本 导流入口多 分发效率高
2. 三个前端分支及开发语言： c/s架构的  ios-oc语言  android-java语言
                b/s架构的： web前端-h5语言
      上面的两种由于走的本地，更新要下载apk  后面改下服务器和页面就行了
```

#### 		h5和h4的区别

```
1. 在页面结构上：关于DTD
	浏览器的三种模式：标准模式(standards/strict)，近乎标准模式       
	(almost)，怪异模式(quirks)
查看方式：                
   document.compatMode(CSS1Compat,CSS1Compat,BackCompat)
	  
```

### 		***开始使用canvas***

#### 菜鸟教程首页

> + 常用的方法：画线和画圆
>   + const ctx  = document.getElementById("myCanvas").getContext("2d");
>   + 画直线：ctx.moveTo()     ctx.lineTo()     ctx.stroke()
>   + 画圆圈：ctx.beginPath();   ctx.arc(x,y,start,stop)   ctx.stroke()
>   + 写文字：ctx.font   ***属性*** 定义字体    ctx.fillText(text, x, y)    ctx.strokeText(text, x, y)

















## Vue官方文档的随手记

```
处理边界情况：
  访问元素&组件：
	子组件访问根： $root
	自组件访问父： $parent
	访问子组件实例或者子元素： $refs
	依赖注入：	关键字--provide 和 inject	
	  后两种是非响应的,并且最后一种让组件耦合 且不好重构
  程序化的事件侦听器：
  
 在和jsAPI交互的时候而不渲染HTML的抽象组件组件的时候
 
 	
```

