// 导入express模块
const express = require('express')
// 创建 express的服务器实例
const app = express();
// 配置以解决跨域问题
// const cors = require('cors')

const userRouter = require('./router/user')
const joi = require('joi')
const expressJwt = require('express-jwt')
// 表单验证package
const configJwt = require('./config')
// 解析form-data数据
const formidable = require('express-formidable')


// app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended: false}));

// 不是错误中间件，需要放在路由注册之前!
    // 这儿是为了封装一个send函数 --- cc()
app.use((req,res, next) => {
    res.cc = function (err, status = 1) {
        res.send({
            status,
            message: err instanceof Error ? err.message:err
        })
    }
    next();
})

// 将tokenStr转化为token对象
    // 这样配置后就可以在路由中使用req.user属性了
app.use(expressJwt({
    secret: configJwt.config.jwtSecretKey,
    algorithms: ['HS256']
}).unless({path: [/^\/api\//]}));
// package的中间件需要加上 next()方法，express的内置中间件貌似就不用
app.use(formidable())

app.use(userRouter);


// 解决遇到错误不让服务停止的中间件
app.use((err,req,res,next) => {
    if(err){
        res.send({data:err,msg:'错误级别中间件捕获的错误'})
        return
    }

    // 验证失败的错误
    if(err instanceof joi.ValidationError) {
       return res.cc(err);
    }else if(err.name = "UnauthorizedError") {
        return res.send({status: 401, message: '身份认证失败!'})
    }
    // 未知的错误
    res.cc(err)
    // next();
})

app.listen(808, () => {
    console.log('Express server running at http://localhost:808')
})



