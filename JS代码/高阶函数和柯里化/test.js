function jc(a){
    return function (b){
        return function (c){
            return a*b*c;
        }
    }
}
let step1=(jc(1))(2)
console.log(step1(3))
console.log(step1(4))
