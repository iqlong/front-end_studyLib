let arr =[];
let arrProxy=new Proxy(arr,{set: (target,val) => {
    console.log('setArr');
    target[2]=3
}})
arrProxy[2]=2
console.log(arr,arrProxy)
