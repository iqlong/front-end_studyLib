function getNumber(arr){
    let len=arr.length;
    let result={};
    arr.forEach((item) => {
        if(Object.keys(result).indexOf(item.toString()) == -1){
            // 若是不存在
            result[item] = 1;
        }else {
            result[item]++;
        }
    })
    let lastResult = [];
    for(let key in result){
        if(result[key] >= len/2){
            lastResult.push(parseInt(key));
        }
    }
    return lastResult;

}
console.log(getNumber([3, 9, 3, 2, 5, 6, 7, 3, 2, 3, 3, 3]))
