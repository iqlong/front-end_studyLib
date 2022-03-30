const http = require('http')
const path = require('path')
const fs = require('fs')

let server = http.createServer();
server.on('request', (req, res) => {
    let content;

    // res.end返回给web页面之前，先解决中文乱码问题
    // res.setHeader('Content-Type', 'text/html; charset= utf-8');

    if(req.url==='/' || req.url==='/index.html') {
        content = `<h1>我是首页</h1>`;
        res.end(content);
    }else if(req.url==='/about.html') {
        content = `<h1>我是about页面呀</h1>`;

        fs.readFile(path.join(__dirname, '../template.html'), 'utf8', (err, dataStr) => {
            if(err) {
                console.log(err.message);
            }else {
                res.end(content+dataStr);
            }
        })
    }else {
        content = `<h1>404,没有东西</h1>`;
        res.end(content);
    }
})
server.listen(8080,() => {
    console.log('server is running at http://localhost:8080');
})
