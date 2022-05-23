// let arr=new Array(12);
// arr.fill(1)
// let result = arr.map((item,index) =>
//     item = item+index
//  )
// console.log(arr.length)
// console.log(result)

function foreach(func,arr){
    for(let i=0;i<arr.length;i++){
        func(arr[i],i,arr)
    }
}
let arr=new Array(11)
arr[6] = 'hello,is a good day today!'
// foreach((item) => {console.log(item)},arr)
arr.forEach(i =>{console.log(i)})
