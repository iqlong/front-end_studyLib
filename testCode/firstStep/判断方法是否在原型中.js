let obj = {
    name: 'g',
    [Symbol('g')]: 'gg',
    func: function (){

    }
}
Object.getPrototypeOf(obj).gg = 'gg';
Object.getPrototypeOf(obj).zs = 'gg';

console.log('toString' in obj,obj.hasOwnProperty('gg'))
for(let key in obj){
    console.log(key, typeof key)
}
console.log(Object.getOwnPropertyNames(obj))

