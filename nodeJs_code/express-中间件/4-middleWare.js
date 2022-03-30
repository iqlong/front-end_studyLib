// 中间件的概念： 特指 *业务流程的中间处理环节*
// express的中间件的调用流程： 请求到达 express服务器后，可以连续调用多个中间件，从而对请求进行处理
// 中间件的格式： 本质就是一个函数，只是路由处理函数中只包含req和res，中间件多一个next参数函数

const express = require('express');
const app = express();

const midWare = function (req, res, next) {
    console.log('i am middleWare function.')
    // 把轮流关系转交给下一个中间件或路由
    next();
}

// 全局生效的中间件
app.use(midWare);

app.get('/', (req, res) => {
    res.send('home page');
})
app.get('/list', (req,res) => {
    res.send('list page');
})

app.listen(80, () => {
    console.log('running at http://localhost')
})
