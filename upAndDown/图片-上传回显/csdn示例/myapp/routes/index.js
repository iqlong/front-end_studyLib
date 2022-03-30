var router = require('express').Router();
var multer = require('multer');
var fs = require('fs');
var path = require('path');

//查询文件的路由
router.get('/', function(req, res, next) {
  //读取 static 目录下的文件
  fs.readdir('./static', function(err, files){
    if(err){
      res.render('index', {
        list: [],
        msg: '暂无文件'
      })
      return
    }
    res.render('index', {
      list: files,
      msg: `共有 ${files.length} 个文件`
    });
  })
});

//删除文件的路由
router.get('/del', function(req,res){
  //接收文件名的参数
  let {file} = req.query
  //删除 static 目录下的该文件
  fs.unlink(`./static/${file}`, function(err){
    res.redirect('/')
  })
})

//文件上传的路由
router.post('/upload', multer({ dest: './static/' }).any(), function(req,res){
  let file = req.files[0]
  //拼装文件名称
  let filename = 'static/'+ file.originalname
  //为上传成功的文件重命名（上传的文件默认不是文件的原名称）
  fs.rename(file.path, filename, function(err){
    res.redirect('/')
  })
})

//文件下载的路由
router.get('/down', function(req,res){
  //接收文件名称
  let {fn} = req.query
  //如果参数中有中文，需要解码
  fn = decodeURI(fn)
  //判断该文件是否存在
  fs.access(`./static/${fn}`, function(err){
    if(!err){
      res.set({
        //告诉浏览器这是一个二进制文件
        "Content-Type": "application/octet-stream",
        //告诉浏览器这是一个需要下载的文件，使用encodeURI方法，是为了避免中文名称下载时出问题
        "Content-Disposition": `attachment;filename=${encodeURI(fn)}`
      })
      //使用流读取文件，并响应给客户端
      fs.createReadStream(`./static/${fn}`).pipe(res)
    }
  })

})

module.exports = router;
