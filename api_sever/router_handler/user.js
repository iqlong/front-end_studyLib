// 在接口操作函数中使用数据库操作模块
const db = require('../db/index');
// 加密密码用的中间件
const bcryptjs = require('bcryptjs');
// 生成tokenStr
const jwt = require('jsonwebtoken')

const configJwt = require('../config')

// 注册新用户的处理函数
let registerHandler = (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const bPassword = bcryptjs.hashSync(password, 10);
    // 服务端做校验：插入的用户名和密码不可以为空
    if(!username || !password) {
        return res.send({
            status: 0,
            message: '用户名或者密码不可以为空!'
        })
    }
    // 判断插入的用户是否在已经在数据库中存在
    const selUserStr = "select * from users where username=?";
    const insUserStr = "insert into users set ? ";
    db.query(selUserStr, username, (err, result) => {
        if(err) {
            return res.send({
                status: '00',
                message: err.message
            })
        }else if(result.length) {
            return res.send({
                status: 1,
                message: '用户已存在!'
            })
        }else {
            db.query(insUserStr, {username, password: bPassword}, (err, result) => {
                res.send(`插入了${result.affectedRows}条数据`);
            })
        }
    })
}
// 处理用户登录的函数
function loginHandler(req, res){
    // 判断数据库中是否有这个用户
    const username = req.body.username;
    const password = req.body.password;
    const selUserStr = "select * from users where username=?";
    let user = null;
    db.query(selUserStr, username, (err, result) => {
        if(result.length!==1) {
            return res.cc('不存在此用户');
        }
        // 判断用户的密码是否正确
        if(!bcryptjs.compareSync(password, result[0].password)) {
            return res.cc('密码错误');
        }
        // 用来生成token的对象不可以包含密码等私密信息!
        user = {...result[0], password: ''};
        const tokenStr = jwt.sign({...user}, configJwt.config.jwtSecretKey, {expiresIn: configJwt.config.expressIn});
        res.send({
            status: 200,
            message: '登录成功',
            token: 'Bearer '+ tokenStr
        })
    })
    // 生成jwt的Token字符串
}

function getInfo(req, res) {
    console.log(req.user)
    res.send(req.user);
}

function testRouter(req, res) {
    console.log(req.fields,req.files.img)
    res.send('<h1>请传入图片!</h1>'+req.files.img)

}
module.exports = {
    registerHandler,
    loginHandler,
    getInfo,
    testRouter
}
