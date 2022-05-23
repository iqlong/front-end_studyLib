onmessage = function (e){
    let x=e.data;
    for(let i=0; i<x; i++){
        console.log(i)
    }
    postMessage('worker完成了')
}
onerror = function (err){
    console.log(err)
}
