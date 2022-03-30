function first(arr){
    const len = arr.length;
    let result = [];
    if(len === 0){
        return 6;
    }else if(len%2!==0){
        if(len<=6){
            result = arr;
        }else {
            result = arr.slice(len/2-3,len/2+4);
        }

    }else if(len%2===0){
        if(len <= 7){
            result = arr
        }else {
            result = arr.slice(len/2-3, len/2+3)
        }
    }
    return result.reduce((sum,item) => {
        return sum+=item;
    });
}
function second(num){
    let changedNum;
    if(num>100000){
        changedNum = 100000
    }else {
        changedNum =  Math.abs(num)
    }
    // n转10  parseInt         10转n  toString
    let result = changedNum.toString(7).split('');
    // 字符转为数字
    return result.map((item) => {
        return parseInt(item);
    })

}

function third(arr){
    let len = arr.length;
    let resultArr=[];
    let sum;
    for(let i=0; i<len; i++){
        sum=0;
        for(let j=0; j<len; j++){
            if(j!==i){
                sum+=arr[j];
            }
        }
        resultArr.push(sum*2);
    }
    return resultArr;
}


function answer(x){
    let firstR = first(x);
    let secdR = second(firstR);
    let result = third(secdR);
    return result;
}

console.log(answer([374,839,620,812,575,862,46]))
