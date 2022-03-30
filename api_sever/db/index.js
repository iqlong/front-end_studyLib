const mySql = require('mysql')

// 创建数据库的连接对象
const db = mySql.createPool({
    host: 'localhost',
    user: 'root',
    password: '118097',
    database: 'apiserver'
});

module.exports = db;
