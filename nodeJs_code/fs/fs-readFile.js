const fs = require('fs');

fs.readFile('../static/files/nodeJs_day1.txt', 'utf8', (error, dataStr) => {
    if(error) {
        console.log('fs读取文件错误，错误信息：');
        return console.log(error);
    }else {
        console.log('读取成功！\n',dataStr);
    }
});
