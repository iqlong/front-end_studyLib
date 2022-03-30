function xx(n) {
    if(n>2) {
        n--;
    }
    else {
        return
    }
    console.log('zhiain',n)
    xx(n);
    n++
    //还是会执行的，而且会记住之前的n;  过去-回来
    console.log('houlai',n)
};
xx(4);

let array = [12,3];
console.log(array[1])
console.log(array.splice(1, 1)[0])
console.log(array[1] === array.splice(1, 1)[0])
