// 求阶乘的值
function factorial(n){
    if(n==1) return n
    else {
        return n*factorial(n-1);
    }
}
// 求阶乘的约束
// 若是阶乘结果数字太大，非常容易 timeout
// 既让只要两个数组， 可以不用通用化，可以大量剪枝
function approxNum(facN){
    let resultArr = [];
    for(let i=1; i<=facN; i++){
        if (facN % i ===0){
            resultArr.push(i);
            if(resultArr.length == 3){
                return resultArr;
            }
        }
    }
    return resultArr;
}
function first(n){
    let jc= factorial(n);
    let arr = approxNum(jc);
    if(arr.length<=2){
        return arr;
    }else {
        return arr.slice(0, 2);
    }
}

function second(arrs){
    // 第一题的返回不就是少于两个数字的排序后的数组吗?
    let time=0;
    let arr = arrs.sort((a,b) => {
        return a-b;
    })
    for(let i=1;i<arr.length;i++){
        if(arr[i]-arr[i-1] >=3){
            time+=3;
        }else {
            time+= (arr[i]-arr[i-1])
        }
    }
    return time+3;
}

function third(n){
    // 第二个一定是正的，又要冗余操作
    let arr = n.toString().split('');
    let cArr = arr.map((item) => {
        return parseInt(item);
    })
    let result=[];
    for(let i=0;i<9;i++){
        result = result.concat(cArr);
    }
    return result
}


function answer(x){
    let firstR = first(x);
    let secdR = second(firstR);
    let result = third(secdR);
    return result;
}
