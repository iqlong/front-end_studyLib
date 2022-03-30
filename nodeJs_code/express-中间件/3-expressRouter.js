// 最简单的就是之前的挂载在app上，但是这样不利于管理，所以路由模块化出现了
// 实现的步骤就是
    // 创建路由模块对应的.js文件
    // 调用express.Router() 函数创建路由对象
    // 向路由对象上挂载具体的路由
    // 使用module.exports向外共享路由对象
    // 使用app.use()函数注册路由模块
const express = require('express')
let router = express.Router();

router.get('/get/list', (req, res) => {
    res.send('got list')
});
router.post('/post/list', (req, res) => {
    res.send({
        message: 'posted list',
        time: new Date().toLocaleDateString()
    })
});

module.exports = router;
