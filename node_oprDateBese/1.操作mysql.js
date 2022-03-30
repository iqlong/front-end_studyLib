// 1. 导入mysql模块
const mySql = require('mysql')

const db = mySql.createPool({
    host: 'localhost',
    user: 'root',
    password: '118097',
    database: 'nodebase'
});

const user = ['李港生','成龙'];
// 由于是sql语句是在string中，所以要用占位符，多一个入参
const insertUser = 'insert into users(姓名) value(?),(?)';
const  updateUser = 'update users set 姓名=?,性别=? where 姓名 like "-李%" or 姓名="成龙"'
// 测试mysql模块是否可以正常工作  -------db.query
let selectAll = function () {
    db.query('select * from users', (err,result) => {
        if(err) return console.log(err.message);
        console.log(result);
    })
};
// 搜索数据
db.query('select * from users', (err,result) => {
    if(err) return console.log(err.message);
    console.log(result);
})

// 插入数据
db.query(insertUser, user, (err,result) => {
    if(err) return console.log(err.message);
    console.log(`插入了${result.affectedRows}数据!`);
});

//更新数据
db.query(updateUser, ['张老龙', 'nan'], (err, result) => {
    if(err) return console.log(err.message);
    console.log(`更新了${result.affectedRows}数据!`)
});

// 插入和更新展示
selectAll();

// 插入数据中的id要注意： id具有唯一性，就是delete也不可以释放
    // 插入数据的快捷方式： insert into users set ?    ?中可以直接传入一个对象过去
    // 类似更新数据的快捷方式： update users set ?      ? 直接传入一个对象过去

// 标记删除： 加一个status的字段表示是否删除
    // 防止误操作删除，导致数据找不回来
