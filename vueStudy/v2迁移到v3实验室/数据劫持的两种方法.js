let arr=[1,23,5]
let obj = {
    name : 'zhl'
}
// Object.defineProperty(arr,'0',{
//     set() {
//         console.log('换了一个对象属性');
//     }
// })

// 使用proxy来代理
let arrProxy = new Proxy(arr,{
    set(target,propKey,val,receiver){
        console.log(`${target}属性的${propKey}被修改成了${val}`);
        // return receiver
        return Reflect.set(target, propKey, val, receiver);
    }
})

arrProxy.push('hello')
// arrProxy[5]='g'
console.log(arrProxy,arr,obj);