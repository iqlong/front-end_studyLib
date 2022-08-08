const fs=require('fs')
if(fs.existsSync('./uploads/mm.png')){
    fs.unlink('./uploads/mm.png',(err)=>{
        if(err){
            console.log(`删除文件错误，原因是${err}`)
        }else {
            console.log('删除文件成功')
        }
    })
}else {

}



fs.unlink('./uploads/mm.png',(err)=>{
    if(err){
        console.log(`删除文件错误，原因是${err}`)
    }else {
        console.log('删除文件成功')
    }
})


