let fs = require('fs');
fs.readFile('./text.txt','utf8',(e, result) => {
    if(e) {
        return  console.log('读写错误')
    }
    console.log(result);

})
