// let i = new Promise((resolve,reject) => {
//     throw new Error('gg')
// }).then(() => {
//     console.log('成功')
// }, () => {
//     console.log('失败')
// })
// console.log(i);
//
//

// let promise = new Promise((resolve, reject) => {
//     // throw new Error('nono');  //构造函数同步执行，抛出错误
//     resolve()
// }).then(()=>{
//     console.log('resolve');
//     throw new Error('g')
// },(err)=>{
//     console.log('reject');   //执行了
//     console.log(err);
// }).then(()=>{console.log('hh')}, ()=>{console.log('gggg')}).then(()=>{console.log('hh')}, ()=>{console.log('gggg')});
// // console.log(promise);
// setTimeout(()=>{
//     console.log(promise);   //状态变为fullfilled
// }, 10);

var promise = new Promise((resolve, reject) => {
    reject();
}).then(()=>{
    console.log('resolve');

      //resolve中抛出错误
},(err)=>{
    throw new Error('nono');
    console.log('reject');
    console.log(err);
}).then(()=>{console.log('hh')}, ()=>{console.log('gggg')})
    .then(()=>{console.log('hh')}, ()=>{console.log('gggg')})
    .catch((e) => {console.log(a)});
setTimeout(()=>{
    console.log(promise);
}, 0);


