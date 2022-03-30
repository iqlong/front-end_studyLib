// let input = parseInt(readline());
function fJc(inp) {
    let num =0;
    let n = inp;
    return function jc() {
        if(num===n-1) {
            return (990-n+1)/(1000-n+1);
        }else{
            ++num;
            return (990-num)/(1000-num) * jc();
        }
    }
}
let func = fJc(2);
// 字符串类型
let result = 1-func();

console.log( parseFloat (result.toFixed(6)) );
// print(parseInt (result.toFixed(6)) );
