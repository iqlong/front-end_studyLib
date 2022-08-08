const express = require('express');
const multer = require('multer');
const path = require('path');
const cors=require('cors')
const fs=require('fs')

let app = express();
app.use(cors())
app.listen(8888);

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

//创建一个multer对象，dest用来设置上传文件存放的目录
let upload = multer({dest: 'uploads/'});
//single()方法是用来处理单个文件上传，注意参数的名字要与表单中的name值一致
app.post('/upload', upload.single('image'), function (req, res) {
    if(fs.existsSync(`./uploads/${req.file.originalname}`)){
        // 文件重名了，删除原文件再上传并重命名
        fs.unlink(`./uploads/${req.file.originalname}`,(err)=>{
            if(err){
                console.log(`删除文件错误，原因是${err}`)
            }else {
                console.log('删除文件成功')
            }
        })
        res.end('覆盖成功');
        fs.renameSync('./uploads/' + req.file.filename,`./uploads/${req.file.originalname}`);
    }else {
        // 直接上传并重命名
        fs.renameSync('./uploads/' + req.file.filename,`./uploads/${req.file.originalname}`);
        res.end('上传成功');
    }
});
