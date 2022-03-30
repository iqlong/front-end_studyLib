const http = require('http');
const { report } = require('process');

const server = http.createServer();
server.on('request', (req,rsp) => {
    console.log(`访问的url是${req.url},访问的methods是${req.method}`);
    // 设置相应头，解决中文乱码问题
    rsp.setHeader('Content-Type', 'text/html; charset=utf-8');

    rsp.end('知道你请求了');
    // Document.write('请求了一次');
});

// 感觉没什么用处的 启动服务器的操作
server.listen(80, () => {
    console.log('sever running at http://127.0.0.1');
})
// 浏览器只可以发起get请求，post需要用到postman？