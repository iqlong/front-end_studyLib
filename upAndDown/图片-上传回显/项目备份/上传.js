const multer = require('multer');//上传文件
const express=require('express')
const app=express()
//上传配置
let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // 指定路径保存
        cb(null, path.join(__dirname,'./', 'public', 'img', 'avatar'))
    },
    filename: function (req, file, cb) {
        // 将保存文件名设置为 文件原始名 + 时间戳
        var suffix = file.originalname.split('.')
        cb(null, file.fieldname + '-' + Date.now() + '.' + suffix[suffix.length - 1]);
    }
})
// 创建中间件
let upload = multer({storage: storage});
app.post('/reg', upload.single('avatar') , function(req, res) {

    let username = req.body.username
    let password = req.body.password
    let imgname = req.file.filename;

})
