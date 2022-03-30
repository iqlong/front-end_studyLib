const express = require('express');
const multer = require('multer');
const fs = require('fs');
const path = require('path')
const cors = require('cors')

// 另一种解决form-data数类型的方法
// const formidable = require('express-formidable')

const app = express();
// input标签访问接口不可以跨域，form表单可以实现跨域
app.use(cors())
// 路由前面的中间件
app.use(multer({dest: '/temp/'}).array('image'));
// app.use(formidable())

app.use((err, req, res, next) => {
    if(err) {
        console.log(err.name,err.message);
        next()
    }
})

// 上传文件的接口
app.post('/uploadFile', (req, res) => {
    // throw new Error('g')
    // 上传的文件信息
    console.log('@',req.files[0]);
    const files = req.files[0];
    // 需要用的的两个files的东西
    let paths = path.join(__dirname,'/uploadedFile',files.originalname);
    console.log(paths)
    fs.readFile(files.path, (err, data) => {
        if(err) {
            console.log('读取失败')
        }else {
            fs.writeFile(paths, data, (err) => {
                if(err) {
                    console.log('文件写入失败!',err);
                }else {
                    console.log('文件写入成功!');
                    res.send(JSON.stringify( {
                        message:'File uploaded successfully',
                        filename:req.files[0].originalname
                    } ));
                }
            })
        }
    })

    // 上传也要一点点的读取

})
// 测试接口
app.post('/test', (req, res) => {
    res.send('调用了')
})

app.listen(80, () => {
    console.log('express running at http://localhost:80');
})
