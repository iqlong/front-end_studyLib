let map = new Map([['a','b'],['c','d']]);
[[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]].forEach((item) => {
    map.set(item.toString(), item);
})
console.log(map)
map.forEach((item) => {
    console.log(item)
})
