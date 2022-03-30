let express  = require('express')
let router = require('./3-expressRouter')

const app = express();
// 用来使用路由对象中的路由，想当于 app.get/post 多个和router中一样的路由
    // app.use()函数的作用：用来注册全局中间件！！！

// 为路由模块添加统一的前缀，和app.use()给静态资源添加前缀一样的模式
app.use(router);

app.listen(80, () => {
    console.log('server running at http://localhost')
})
