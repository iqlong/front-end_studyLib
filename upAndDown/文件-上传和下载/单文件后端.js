const express = require('express');
const multer = require('multer');
const path = require('path');

let app = express();
app.listen(8888);

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

//创建一个multer对象，dest用来设置上传文件存放的目录
let upload = multer({dest: 'uploads/'});
//single()方法是用来处理单个文件上传，注意参数的名字要与表单中的name值一致
app.post('/upload', upload.single('img'), function (req, res) {
    //body里面存放了表单的文本域信息
    console.log(req.body);
    //file存放了单个文件的信息
    console.log(req.file);

    res.end('ok');
});
