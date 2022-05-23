let obj={
    name: 'zh'
}
let prx=new Proxy(obj,{
    x:'xx',
    get(obj,key,proxy){
        if(key == 'name')
            console.log(proxy.y);
            return proxy.x
    }
})
let outerObj={
    x: 'i am outerObj',
    y: 'outer y'
}
console.log(Reflect.get(prx,'name',outerObj))
