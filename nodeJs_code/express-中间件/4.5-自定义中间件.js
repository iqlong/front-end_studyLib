// 自定义中间件的实现步骤
    // 1. 定义中间件   2. 监听req的data事件   3. 监听req的end事件
    // 4. 使用querystring模块解析请求体数据    5. 将解析出来的数据挂载到 req.body
    // 6. 将自定义中间件封装为模块

// 导入express模块
const express = require('express')
// 创建 express的服务器实例
const app = express();
const queryString = require('querystring')
const formidable = require('express-formidable') // 引入
const cors = require('cors')

app.use(cors())
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(
    formidable());  // 中间件
// 存储客户端发过来的请求体数据

// 解析表单的中间件
// app.use((req,res,next) => {
//     // 监听req 的data事件
//         // 如果数据量过大，无法一次性发送完毕，则客户端会将数据切割后，分批发送到服务器，所以data事件可以出发多次
//     req.on('data', (chunk) => {
//         str+=chunk;
//     });
//     res.end('end', () => {
//         // str存储的是完整的请求体数据了
//         // console.log(str);
//         // TODO: 将字符数据转换为对象
//             //nodeJs中内置了一个querystring类型的模块，其中的parse()函数可以将查询字符串格式转为对象格式
//         let parsed = queryString.parse(str);
//         console.log(parsed,str);
//     })
//     next();
// })

app.post('/f', (req, res) => {
    // 非文件项
    // res.send(req.fields);
    // console.log(req.fields)
    // res.send(req.body);
    console.log(req.files.fdfd,req.fields)

    // 文件项
    res.send(req.fields);
})

app.listen(88, () => {
    console.log('Express server running at http://localhost:88')
})



