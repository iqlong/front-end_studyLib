// 局部生效的中间件，就是想中间件函数放在路由的第二个参数上
    // 如果时多个中间件就放多个参数或者数组

// 使用中间件的注意事项
    // 1. middleware需要在路由之前注册；   2. 每个中间件都要用next()，且其后不要再写额外的代码了
    // 3. 客户端发送的请求可以连续调用多个中间件   4. 连续调用多个中间件，共享req和res

// 中间件的分类
    // 1. 应用级别的中间件：分为全局中间件和局部中间件， 定义就是： 绑定在app.use()/app.get/post()上的中间件
    // 2. 路由级别的中间件：绑定到express.Router()实例上的中间件，用法一样，绑定位置不同
    // 3. 错误级别的中间件：捕获program中的异常，防止崩溃。 必须有四个参数(err, req, res, next)
            // **  直接实在app.use(错误中间件)的全局写法；因为可能时路由中出错，在用中间件捕获
            // 而不是 中间件  -->  路由
    // 4. express内置的中间件
        //express.static       express.json(解析json格式的请求体)   express.urlencoded   后面两个都是 v4.16.0+
            // 使用   app.use(express.static())   app.use(express.json)   app.use(express.urlencoded({extended: false}))

    // 5. 第三方中间件
        // body-parser     使用：app.use(parser.urlencoded({extend: false}))
            // 内置的urlencoded中间件就是基于这个封装出来的，所以用法很相似
