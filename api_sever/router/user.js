const express = require('express');
const router = express.Router();

const routerHand = require('../router_handler/user')

// 导入验证表单的中间件和规则对象
const expressJoi = require('@escook/express-joi')
const rules = require('../schema/user')

// 注册新用户
router.post('/register',expressJoi(rules), routerHand.registerHandler);

// 登录
router.post('/login',expressJoi(rules), routerHand.loginHandler);

// 获取用户信息
router.get('/getInfo',routerHand.getInfo);

// 测试接口
router.get('/api/test',routerHand.testRouter);

module.exports = router;
