// 自定义的迭代器中只需要加上return() 让迭代器可以退出
// 在内置不可退出的迭代器中加上return，并不可以使它退出

class iteObj{
    constructor(limit) {
        this.limit=limit
    };
    *iterFunc(){
        let counter=1,limit=this.limit;
        while(counter<=limit){
            console.log(counter<=limit)
            yield {done: false, value: counter++}
        }
        yield {done: true, value: undefined}
    }
}
const obj = new iteObj(5);
for(x of obj.iterFunc()){
    // if(x>3) break
    console.log(x)
}
// for(x of obj){
//     if(x>3) break
//     console.log(x)
// }
//
// let arr = [1,5,3,34]
// for(const num of arr){
//     if(num==3) break
//     console.log(num)
// }
// console.log('&&&&&&&&&&&&&&')
// for(const num of arr){
//     console.log(num)
// }
// console.log('--------------')
// // 直接使用for of可以退出迭代，使用迭代器不会退出
// let arrIte=arr[Symbol.iterator]()
// for(const num of arrIte){
//     if(num==3) break
//     console.log(num)
// }
// console.log('&&&&&&&&&&&&&&')
// for(const num of arrIte){
//     console.log(num)
// }
