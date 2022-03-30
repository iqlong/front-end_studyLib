const  express = require('express');
const app = express();

// 1. 导入session中间件
let  session = require('express-session');
// app.use(express.json())
app.use(express.urlencoded({extended: false}))

// 2. 配置session中间件
app.use(session({
    secret: "kjfl",                 // secret属性值可以为任意字符串
    resave: false,                  // 固定写法
    saveUninitialized: true         // 固定写法
}))

app.post('/api/login', (req, res) => {
    console.log(req.body);
    if(req.body.username !== 'admin' || req.body.password !== '000000') {
        return res.send({status: 1, msg: '登录失败'})
    }
    // 只有配置了session中间件后才可以访问.session这个属性
    req.session.user = req.body;
    req.session.isLogin = true;

    res.send({status: 0, msg: '登录成功'});
})

app.get('/api/getUser',(req,res) => {
    if(req.session.isLogin) {
        return res.send({status: '已经登录'})
    }
    res.send({status:'未登录'});
})

app.listen(808, () => {
    console.log('express is running at https://127.0.0.1:80');
})


// req.session.destroy()函数用于清空服务器保存的session
