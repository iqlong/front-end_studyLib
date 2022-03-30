const fs = require('fs');

fs.writeFile('./static/files/writedFile.txt', 'nihao,xintongxue',(error) => {
    if(error) {
        console.log('文件写入失败!');
    }
})
