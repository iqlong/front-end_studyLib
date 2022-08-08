let arr = [1, 2, 34]
arr.forEach( (item, index, arr) => {
    index == 1 ? arr[index] = 'max' : ''
})
console.log(arr);