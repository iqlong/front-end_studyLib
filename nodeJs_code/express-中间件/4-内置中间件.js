const express = require('express')
const app = express();
const cors = require('cors');
// 不配置解析表单服务的中间件，req.body = undefined
    // 除了错误中间件在路由时候，其他都在路由之前

// nodemon动态的跑js程序

app.use(express.json());
app.use(cors())
app.use(express.urlencoded({extended: false}))

// ******  req.body可以获取 json 的表单数据和 url-encoded 格式的数据
app.post('/login', (req, res) => {
    res.send(req.body);
    // 通过这个属性来查看请求体的数据
    // res.send(req.body);
    // req.body可以输出但是send报错：Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client
    console.log(req.body);
})

// app.use((err,req,res,next) => {
//     if(err){
//         console.log(err);
//         throw (err);
//     }
//     next();
// })


app.listen(80, () => {
    console.log('server running at http://localhost')
})



