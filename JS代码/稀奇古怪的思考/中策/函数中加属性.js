function func(){
    let x = 'helloa';
    func.getX=function (){
        return x;
    }
}
let x = 'gg';
console.log(func.getX)
// console.log(global.getX.call(global))
