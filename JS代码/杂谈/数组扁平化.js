let arr = [[0, 1], [2, 3], [4, 5]]
let result=[];
arr.forEach((item) => {
    result = result.concat(item)
    console.log(item)
})
console.log('@',result);
