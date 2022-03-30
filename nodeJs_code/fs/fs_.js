const fs = require('fs');

let tempDataStr='';
let index;
// 由于文件的读取和写入是异步操作,所以要保证写入之前文件是被读取了的!
new Promise( (resolve,reject) => {
    fs.readFile('../static/files/writedFile.txt', 'utf8', (error, dataStr) => {
        if(error) {
            console.log('文件读取失败!');
            return;
        }else {
            let aimReg = /\d\s/g;
            let matches = aimReg.exec(dataStr);
            // let lastIndex = aimReg.lastIndex;
            while(aimReg.lastIndex != 0) {
                // dataStr[aimReg.lastIndex-1] = '\n';
                index = aimReg.lastIndex-1;
                // let splitedArray = dataStr.split(dataStr[aimReg.lastIndex-1]);
                dataStr = dataStr.substring(0,index)+'\n'+dataStr.substring(index+1);
                matches = aimReg.exec(dataStr);
            }

            tempDataStr = dataStr;
            resolve();
        }
    })
} ).then( () => {
    fs.writeFile('../static/files/temp1.txt',tempDataStr, (err) => {
        if(err) {
            console.log('写入失败!');
        }
        else {
            console.log('写入成功!');
        }
    })
} )


// wrireFile中encoding默认为'utf8'      readFile默认是null


