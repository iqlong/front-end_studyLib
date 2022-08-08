let express = require('express')

const app = express();
// 监听客户端请求    app.get('url', (req, res) => {}     app.post(参数和get一样)
    // res.end()方法可以返回字符串    提供了一个res.send()方法，
        // 想客户端相应一个JSON对象

// express.static() 用来托管静态资源
    // 托管多个静态资源，在url请求时会按顺序查找资源
    // app.use(express.static( '/路径前缀', root ))
app.use(express.static('../static/files'));
// 让下面这个目录中的静态资源可以通过   localhost/runCar.jpg来访问
app.use(express.static('../static/images'))

app.get('/expressTest/:id', (req,
                             res) => {
    // req.query 可以获取客户端发送过来的参数，默认res.query是一个空对象
    // req.params 可以匹配客户端传来参数中 :指定的动态参数
        // 且上面这两个时互斥的，query不会包含params
    res.send({
        name: '张慧龙',
        state: "workHard",
        query: req.query,
        params: req.params
    },)
});
app.post('/expressTest', (req, res) => {
    res.send({
        name: '张慧龙',
        state: "workHard"
    })
})

app.listen(808, () => {
    console.log('running at http://localhost')
})


