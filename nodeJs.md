# Node Js学习开始

#### 	忘却的一天 の 开始接触nodeJs 

```
1. mdn也叫shell!
	win中mdn中的常用命令：  dir(列出当前目录的所有文件)  cd(切换文件夹)
		md(新建一个文件夹)  rd(删除一个文件夹) 
	目录：	    . 表示当前目录    .. 表示上一级目录   其实不以/开头的相对路径就是默认省略了./
	环境变量： 就是windows系统中的变量
		目的：在任意文件夹下打开自己想要的文件 -- 所以就用到了path这个环境变量
			tip：改完之后要重启cmd窗口
		原因：在cmd中打开一个文件或调用一个程序时，会依次从当前路径  -> path变量中寻找
		       类似与作用域链： 作用域链中没找到就会报错，原型链上没找到会返回undefined
2. 进程和线程
	  进程：相当于为程序的运行提供必要的环境
	       相当于工厂中的车间
	  
	  线程：线程是计算机中的最小计算单位，线程负责执行进程中的程序
	       相当于工厂中的工人
	    单线程 vs 多线程： 但是js和浏览器都是单线程-- 应为dom渲染和js执行不好并行;但是主流的程序类似Java都是多线程的。

3. 正式开始nodeJs：  第一 -> 浏览器不是本地，是客户端上运行的(严格意义来说)
		它是和系统交互的，等于将js的战场从前端拿到了后台  发明者： Ryan Dahl
	 这个数学博士在解决web服务器的高并发问题时尝试了很多语言，都没找到合适的，直到V8引擎的出现，让他09年开始编写Node.js
	 细节： 其中node的版本  --> 基数版是测试版本，偶数版本是
		      
```



## 跟着 黑马 学的nodeJS

> > 1. ​    ***知道什么是Node.js***
> > 2. ​    ***能够知道NodeJs可以做什么***
> > 3. ​    ***可以说出NodeJs中的js的组成部分***
> > 4. ​    ***可以使用 fs 模块处理路径***
> > 5. ​     ***使用 path 模块处理路径***
> > 6. ​    ***可以使用 http 模块写一个基本的web服务区***



#### 1. 初识 Node.js

> > 1. ***简介***
> >
> >    + Node.js is a javaScript runtime built on Chrome's V8 JavaScript engine.
> >      + V8可以放在chrome中解析前端代码，也可以放在node中做服务器
> >
> > 2. ***Node.js 中运行环境图解***
> >
> >    [NodeJs运行环境](C:\Users\张慧龙\Desktop\nodeJs学习/images/NodeJs运行环境.png)
> >
> >    ![NodeJs运行环境](C:\Users\张慧龙\Desktop\nodeJs学习\images\NodeJs运行环境.png)
> >
> > 3. [***NodeJs的作用***](C:\Users\张慧龙\Desktop\nodeJs学习\images\nodeJs的作用.png)
> >
> >    ![](C:\Users\张慧龙\Desktop\nodeJs学习\images\nodeJs的作用.png)
> >
> >    ​	
> >
> > 4. ***Node环境的安装和 node.js中执行js代码***



#### 	2. 使用NodeJs

> > + readFile()
> > + writeFile()

> > ```
> > fs：
> > 	fs.readFile(file, 'utf8', (err, dataStr) => {})  和  fs.writeFile()
> > 		其中err是一个对象，为空的时候是null; dataStr是undefined
> > ```



#### 3. path路径模块

> > 1. ***什么是path路径模块***
> >    + API：	require('path')
> >      + path.join()
> >        + 路径连接，可以接受多个参数
> >      + path.basename() 
> >        +  目录的最后一个文件(有扩展名的)，可以在第二个参数上写想要去除的扩展名
> >      + path.extname
> >        + 返回文件的扩展名
> >      + 属性：__dirname
> >        + 返回档期当前文件的目录
> > 2.  ***做一个时钟案例来巩固知识***
> >    + 其中readFile和writeFile都只是用来创建文件，***不可以创建文件夹***  !
> >    + writeFile重复操作会覆盖之前的内容



#### 4. http模块

> > 1. 什么是 http 模块
> >    + 回顾：什么是客户端，什么是服务器
> >    + 这个 模块就是node.js官方提供用来**创建** ***web服务器*** 的模块： ***http.createServer()***
> >
> > 2. 进一步了解 http 模块的作用
> >    + 服务器和普通电脑的区别就在于：服务器上安装了 web服务器软件 
> >      + 例如： IIS  Apache等
> >      + 其中url的端口若是 80,则访问url的时候会省略
> > 3. 创建基本的web服务器
> >    + 导入 http 模块，并 createServer() 创建服务器实例
> >    + 为服务器绑定 request 事件，监听客户端的请求
> >    + 启动服务器    server.listen(8080, () = > {})
> >
> > 4. API: 
> >    + let server = http.creatServer();  sever.on('request', (req, res) => {})
> >    + res.setHeader('Content-Type', 'text/html; charset=utf-8');
> >    + res.end();
> >    + server.listen(8080, () => {})



#### 5. 模块化

> + 说出模块化的好书
> + CommonJS规定了哪些内容
> + Node.js 中模块化的三大分类各自是什么
> + 可以使用npm管理包
> + 了解什么是规范的包结构
> + 能够了解模块的加载机制
>   + 模块化的好处：
>     + 提高代码的可维护性和可复用性
>     + 可以实现按需加载
>   + 模块化的分类
>     + nodejs内置模块
>     + 自定以模块
>     + 第三方 需要下载的模块
>   + ***注意： 使用require加载模块，会执行模块内的代码***



> > 1. 模块化中:   js文件可以csl一个module,其中有exports属性,每次require的就是这个对象
> >
> > 2. node中为了简化module.exprots的写法,用exports对象代替
> >
> >    + 两个对象      exports === module.exports
> >    + 第三方模块  ===   包
> >
> > 3. ***[npm与包](C:\Users\张慧龙\Desktop\nodeJs学习\images\nrm_切换npm路径.png)***
> >
> >    ![](C:\Users\张慧龙\Desktop\nodeJs学习\images\nrm_切换npm路径.png)
> >
> > 4. [开发属于自己的npm包](C:\Users\张慧龙\Desktop\nodeJs学习\images\nodeJs的作用.png)
> >
> >    ![](C:\Users\张慧龙\Desktop\nodeJs学习\images\开发自己的npm包.png)
> >
> > 5. **发布自己开发好的包**
> >
> >    + cmd中使用npm login登录自己的npm账号
> >    + 在包项目根目录上npm publish
> >
> >    **删除已发布的包**
> >
> >    + npm unpublish 报名 --force
> >      + 这个命令只可以删除72小时内发布的包
> >      + 删除后，24小时内不可以重复发布



#### 6. 模块的加载机制

> + 会优先从缓存中进行加载 --- 任何三种加载方式都是这样
>
> + 使用require导入 ***自定义模块*** 时省略文件的扩展名，nodeJs补全的顺序
>
>   1. 按确切的顺序加载
>   2. 补全 .js 扩展名加载
>   3. 补全 .json
>   4. 补全 .node （不可以写js代码，是一个win32的应用程序）
>   5. 加载失败，终端报错
>
> + ***第三方模块的加载机制***
>
>   + 逐层向上找目录中是否有node_modules中是否有 require的模块
>
> + ***[目录作为模块](C:\Users\张慧龙\Desktop\nodeJs学习\images\目录作为模块来加载.png)***
>
>   ![](C:\Users\张慧龙\Desktop\nodeJs学习\images\目录作为模块来加载.png)



#### 7. express - 认识express并简单的使用

> + ***能够使用 express.static() 快速托管静态资源***
> + ***使用 express 路由精简项目结构***
> + ***使用常见的 express 中间件***
> + ***使用 express 创建API接口***
> + ***在 express 中启用cors跨域资源共享***

### 中间件

#### 中间件的分类

+ 应用级别：全局和局部中间件

+ 路由级别

+ 错误级别

+ express内置中间件

  + express.static

  + express.json

  + express.urlencoded

    ![](C:\Users\张慧龙\Desktop\nodeJs学习\images\express-json&urlencoded.png)

+ nodeJs中解析form-data数据

  ![](C:\Users\张慧龙\Desktop\react学习\image\form-data解析.png)

+ 查询字符串转对象

  ![](C:\Users\张慧龙\Desktop\react学习\image\查询字串转对象.png)

  
  

#### 8. cors解决跨域问题

1. 下面的***Access-Control-Allow-?***  来使用cors解决跨域问题

   + Access-Control-Allow-**Origin**
     + res.setHeader('Access-Control-Allow-Origin', '*');

   + [***CORS相应头 -- Access-Control-Allow-Headers***](C:\Users\张慧龙\Desktop\nodeJs学习\images\CORS响应头.png)

     ![](C:\Users\张慧龙\Desktop\nodeJs学习\images\CORS响应头.png)

     ​	**添加额外的请求头示例：**

     ​	![](C:\Users\张慧龙\Desktop\nodeJs学习\images\添加cors9外的请求头.png)

   + ***Access-Control-Allow-Methods***

     ![](C:\Users\张慧龙\Desktop\nodeJs学习\images\acam.png)

   

   2. ***CORS请求的分类***

      + *简单请求*

        ![](C:\Users\张慧龙\Desktop\nodeJs学习\images\CORS简单请求.png)

      + *预检请求*

        + ***注意Content-Type中值为application/x-www-form-urlencoded, multipart/form-data, text/plain是简单请求，***

          ***application/json是预检请求***

        ![](C:\Users\张慧龙\Desktop\nodeJs学习\images\CORS预检请求.png)

        + 浏览器和服务器正式通信前，浏览器会发送OPTION请求进行预检，以获得服务器是否允许该实际请求，所以这一次OPTION被称为”预检请求“。   ***服务器成功相应OPTION后才会发送真正的请求，并携带真实数据***

          + 通常我遇见的出现OPTION情况的应该是： Content-Type = application/json

          ​	

   + 简单请求和预检请求的区别： 一次请求和两次请求的区别



3. JSONP接口

   + JSONP的概念

     ![](C:\Users\张慧龙\Desktop\nodeJs学习\images\回顾jsonp.png)

   + 注意事项

     ![](C:\Users\张慧龙\Desktop\nodeJs学习\images\开启JSONP的注意事项.png)

   + 实现步骤

     ![](C:\Users\张慧龙\Desktop\nodeJs学习\images\JSONP开启步骤.png)

   + 代码实现

     ![](C:\Users\张慧龙\Desktop\nodeJs学习\images\JSONP实现代码.png)

     + $.ajax中  dataType: 'jsonp'



### 数据库方面

+ 知道如何配置 MySQL 数据库环境
+ 可以认识常见的 SQL 语句操作数据库
+ 可以在express中操作MySQL数据库
+ 了解Session的实现原理
+ ***了解 JMT 的实现原理***

+ 前后端的身份认证



### 1.2 常见的数据库的分类

+ MySQL数据库 (目前使用最广泛、流行度最高的开源数据库;Community + Enterprise)
+ Oracle数据库 (收费)
+ SQL数据库 (收费)
  + 上面三种都是传统数据库，又叫关系型数据库或者SQL数据库
+ Mongodb数据库 (Community + Enterprise)
  + 这种是新型数据库(叫非关系型数据库 或 NoSQL数据库)



### 1.3 传统数据库的组织结构

+ 组织结构：数据以什么样的结构进行存储。

+ 学到的小灯泡
  + database类似与excel表
  + 组织结构都是: database,  table,   row,   field(字段)



#### 3.2 使用SQL数据库

+ 什么是SQL：Structed Query Language，是结构查询语言，专门用来访问和处理数据库的编程语言。能够让我们以编程的形式，操作数据库里面的数据。
+ 三个关键点：
  + SQL是一门数据库编程语言
  + 使用SQL语言写出来的代码，叫做SQL语句
  + SQL语句只能在关系型数据库中使用(例如MySQL、Oracle、SQL Server)，非关系型数据库(例如 Mongodb)不支持SQL语言。
  + SQL中的注释： -- 



#### SQL语句-select    insert    update    delete

+ where子句中的操作符：
  + <> / !=不等于          between某个范围间         like模糊匹配
  + and 和 or

+ order by子句

  + 默认是asc升序排序，可以自己指定desc对结果进行降序排序
  + 可以用 ',' 进行多重排序

+ count(*) 函数来统计结果

+ 使用as关键字给 列 设置别名

  

#### ***SQL数据库的存储位置***

+ ***[数据库中表存放的位置](C:\ProgramData\MySQL\MySQL Server 8.0\Data\)***
  + C:\ProgramData\MySQL\MySQL Server 8.0\Data\

+ [***数据库的安装位置***](C:\ProgramData\MySQL\MySQL Server 8.0\Data)
  + C:\ProgramData\MySQL\MySQL Server 8.0\Data



#### 在项目中操作 MySQL数据库

+ 安装操作MySQL数据库的嗲三方模块
+ 通过mysql模块连接到MySQL数据库
+ 通过msyql模块执行SQL语句
  + npm i mysql

+ ***sql的简单使用见文件夹-- [node_oprDateBese](C:\Users\张慧龙\Desktop\nodeJs学习\node_oprDateBese)***





### 5. 前后端的身份认证



#### 5.1 开发者模式

+ 目前主流的 Web 开发者模式：

  + 基于***服务端渲染***的传统 Web 开发模式

    + ***概念：***html页面是服务器以数据的形式发送给客户端的，客户端不需要使用ajax技术请求数据
    + ***优点：***
      + 前端耗时少，由于html是服务器动态生成的，浏览器只需要直接渲染，尤其是移动端
      + 有利于SEO，爬虫更容易是获取内容

    + ***缺点：***
      + 占用服务器端资源
      + 不利于前后端分离，开发效率低

  + 基于***前后端分离***的新型 Web 开发模式

  + 前后端分离的Web开发模式

    + ***概念：***此模式依赖于Ajax技术的广泛应用。后端只负责提供API接口，前端使用Ajax调用接口
    + ***优点：***
      + 开发体验好
      + 用户体验好
      + 减轻了服务器端的渲染压力
    + ***缺点：***
      + 不利于SEO，完整的HTML页面需要在客户端动态拼接，
        + 但是利用Vue、React等框架的SSR(server side render)技术可以很好的解决



+ 如何选择 Web 开发模式
  + 企业级网站，主要是展示且没有复杂的交互，需要良好的SEO，使用服务器端渲染
  + 后台管理项目，交互性强，不考虑SEO，那么使用前后端分离的模式

+ 有时候还是用，首页服务器渲染，其他前后端分离的方式

### 前后端的身份认证

####  身份认证

+ ***概念：***又称“身份验证”，“鉴权”，是通过一定的手段，*完成对用户身份的确认*。
+ 为什么需要：确认用户的身份
+ 不同开发模式下的身份认证
  + 服务端渲染：推荐使用 ***Session*** 认证机制
  + 前后端分离：推荐使用 ***JWT*** 认证机制

#### Session 认证机制

+ HTTP协议的无状态性：客户端的每次HTTP请求时独立的，服务器不会主动保留每次HTTP请求的状态

+ ***目标：***突破HTTP的无状态性  ---  使用(添加)cookie

  + cookie定义：存储在浏览器中不超过4KB的字符串，有一个Name和Value以及其他几个可选的用于控制cookie的安全性、有效期、适用范围的可选属性组成。
  + 每个域名下的cookie相互独立，客户端发请求时自动将域名下未过期的cookie发送给服务器
  + cookie的特性： 
    + 自动发送
    + 域名独立
    + 有效时间
    + 4KB大小限制

  + cookie在身份认证中的作用：
    + 客户端发起***登录请求***，然后服务器将cookie放在响应头中给客户端，客户端将cookie存于浏览器，以便之后将cookie放在请求头中发出

  + Cookie不具备安全性！

#### 在Express中使用Session认证

+ express-session中间件安装成功后，需要通过app.use()来注册session中间件

  ![](C:\Users\张慧龙\Desktop\nodeJs学习\images\express中导入session.png)



#### JWT 机制认证

+ Session机制需要配合Cookie才可以实现，由于Cookie默认不支持跨域，所以***涉及前端跨域请求***，要做很多的配置，才可以实现跨域Session认证

+ JWT: Json Web Token; 是目前最流行的跨域认证解决方案

  [JWT的工作原理](C:\Users\张慧龙\Desktop\nodeJs学习\images\JWT工作原理.png)

  ![          ](C:\Users\张慧龙\Desktop\nodeJs学习\images\JWT工作原理.png)



+ ***[JWT的三个部分代表的含义](C:\Users\张慧龙\Desktop\nodeJs学习\images\JWT的三部分.png)***

  ![](C:\Users\张慧龙\Desktop\nodeJs学习\images\JWT的三部分.png)



+ [JWT的使用方式](C:\Users\张慧龙\Desktop\nodeJs学习\images\JWT的使用方式.png)

  ![](C:\Users\张慧龙\Desktop\nodeJs学习\images\JWT的使用方式.png)



#### 在Express中使用JWT

+ ***[安装JWT相关的包](C:\Users\张慧龙\Desktop\nodeJs学习\images\安装JWT相关的包.png)***

  ![](C:\Users\张慧龙\Desktop\nodeJs学习\images\安装JWT相关的包.png)



+ [定义secret密钥](C:\Users\张慧龙\Desktop\nodeJs学习\images\定义secret密钥.png)

  ![](C:\Users\张慧龙\Desktop\nodeJs学习\images\定义secret密钥.png)

+ [***登录成功后生成JWT字符串***]()

  ![](C:\Users\张慧龙\Desktop\nodeJs学习\images\登录成功后生成JWT字符串.png)



+ [***将JWT字符串还原为JSON对象***](C:\Users\张慧龙\Desktop\nodeJs学习\images\将JWT字符串还原为JSON对象.png)

  ![](C:\Users\张慧龙\Desktop\nodeJs学习\images\将JWT字符串还原为JSON对象.png)

+ [***使用req.user获取用户信息***](C:\Users\张慧龙\Desktop\nodeJs学习\images\req-user获取用户信息.png)

  <img src="C:\Users\张慧龙\Desktop\nodeJs学习\images\req-user获取用户信息.png" style="zoom:200%;" />



+ [解析tokenStr注意点](C:\Users\张慧龙\Desktop\nodeJs学习\images\解析tokenStr.png)

  要添加<img src="C:\Users\张慧龙\Desktop\nodeJs学习\images\解析tokenStr.png" style="zoom:200%;" />

+ [***捕获解析JWT失败后产生的错误***](C:\Users\张慧龙\Desktop\nodeJs学习\images\捕获解析JWT失败后产生的错误.png)

  <img src="C:\Users\张慧龙\Desktop\nodeJs学习\images\捕获解析JWT失败后产生的错误.png" style="zoom:200%;" />



+ [***对密码进行加密处理***](C:\Users\张慧龙\Desktop\nodeJs学习\images\对密码进行加密处理.png)

  ![](C:\Users\张慧龙\Desktop\nodeJs学习\images\对密码进行加密处理.png)



+ ***[优化表单数据验证](C:\Users\张慧龙\Desktop\nodeJs学习\images\优化表单数据验证.png)***

  ![](C:\Users\张慧龙\Desktop\nodeJs学习\images\优化表单数据验证.png)

  + [***插件的使用方式***](C:\Users\张慧龙\Desktop\nodeJs学习\images\服务器端验证的两个插件.png)

    <img src="C:\Users\张慧龙\Desktop\nodeJs学习\images\服务器端验证的两个插件.png" style="zoom:200%;" />



+ [***登录接口的实现***](C:\Users\张慧龙\Desktop\nodeJs学习\images\登录接口的实现.png)

  <img src="C:\Users\张慧龙\Desktop\nodeJs学习\images\登录接口的实现.png" style="zoom:150%;" />

  + ***判断用户输入的密码是否和数据库中加密的密码一样***
    + ***bcrypt.compareSync(用户提交的密码, 数据库中的密码)***
      + 返回的时bool值





#### vue方面看看封装的那个验证码和cavans的使用

+ 为什么之后页面无法访问，未登录是怎么限制的

+ 跨域 proxy中的处理问题

  

## ajax和jqury的学习

## webpack和cli学习

## jquery学习



### 和nodeJs一起实现文件的上传和下载

#### 图片的上传和回显

#### 文件的上传和下载





```
或许，我只是一个捞上的笔试通过，但是    路 ----  还很长，视野要放远一点，
		并且，相信自己，为什么自己就比别人差一呢，不要自以为是，更加不要自已微小，
		既然我笔试过了，就没有什么h
```













































