//将数组[1,2,3]变为[4,3,2,1]
var arr = [1,2,3];
// arr.reverse().unshift(4)
//not a function
// arr.push(4).reverse()
console.log(arr)

var arrB = arr
console.log(arr == arrB)
arr.push(5)

console.log(arr,':',arrB)