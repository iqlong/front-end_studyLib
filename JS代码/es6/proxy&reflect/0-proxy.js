const person = {
    name: '张慧龙',
    age:  21,
    grade: '30%',
    description: '一个尴尬额时间，不可以浪费任意一点时间才是关键'
}
const pxy=new Proxy(person, {
    get(target,key,proxy) {
        console.log('get has been called')
        console.log(this,arguments,'@',Array.from(arguments)[2])
        console.log('////')
        if(key==='name'){
            console.log('hello')
            return this.name
        }else if(key==='add'){
            console.log('属性add被调用了')
        }
    }
})
// person.add = '和defineProperty的区别'
// pxy.add
pxy.name
pxy.name

