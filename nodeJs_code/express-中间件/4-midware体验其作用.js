// 多个中间件和 路由 之间共用同一份req和res
    // 基于这种特性，可以在中间件的上有定义属性，下游使用

const express = require('express');
const app = express();


// 全局生效的中间件
    // 定义多个中间件就是多次app.use
app.use((req, res, next) => {
    console.log('i am middleWare function.')
    // 把轮流关系转交给下一个中间件或路由
    next();
});

app.get('/', (req, res) => {
    res.send('home page');
})
app.get('/list', (req,res) => {
    res.send('list page');
})

app.listen(80, () => {
    console.log('running at http://localhost')
})
