function bibao(x) {
    let a = 0;
    return () => {
        console.log(++a,++x);
    }
}
let innerFunc = bibao(1);
innerFunc();
innerFunc();
innerFunc();

// bibao(1)();
// bibao(1)();
// bibao(1)();
// let obj = {
//     a: 1,
//     add() {
//         this.a++;
//     }
// }
// console.log(obj.a);
// console.log(obj.add());
// console.log(obj.a);