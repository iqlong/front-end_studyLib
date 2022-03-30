// 输入一个长度为len的数组，找到数组中重复次数大于len/2的数字
function findNum(arr){
     let map = new Map();
     arr.forEach((item) => {
         if(!map.get(item)){
             map.set(item,1)
         }else {
             map.set(item,map.get(item)+1);
         }
     })
    let result=[];
    map.forEach((item,index) => {
        if(item>=arr.length/2){
            result.push(index);
        }
    })
    return result;
}
console.log(findNum([3, 9, 3, 2, 5, 2, 7, 2, 2, 2, 2, 3]))
