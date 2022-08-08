class iteObj{
    constructor(limit){
        this.limit=limit
    }
    [Symbol.iterator](){
        let count=1,limit=this.limit;
        return {
            next(){
                if(count<=limit){
                    return {done: false, value:count++}
                }else{
                    return {done: true, value:undefined}
                }
            }
        }
    }
}
console.log('start');
let ite1=new iteObj(3)[Symbol.iterator]();
let obj=new iteObj(3);
// console.log(ite1.next());
for(ite of obj){
    console.log(ite);
}

// for( let ite of ite1){
//     console.log(ite);
// }
console.log('end');
