// var show = function() {
//     name: 'hh';
//     console.log('xie');
// }
// let Show = {
//     name: 'Show'
// }
// let x;
// 1 | show();
// let p = new Promise(()=> {})
// let xy = Promise.reject(new Error('xx'))
// console.log(xy)

// var test = function () {
//     execScript("var i=3");
//     alert(i);
//     }
//     test();
//     alert(i); 

// const promiseA = Promise.resolve('a')
//     promiseA.then((res) => {
//     console.log(res,'a1')
// }).then((res) => {
//     console.log(res,'a2')
// })
// console.log('同步')
// console.log('同步')
// console.log('同步')
// console.log('同步')
// const promiseB = Promise.resolve('b')
// promiseB.then((res) => {
//     console.log(res,'b1')
// })
// promiseB.then((res) => {
//     console.log(res,'b2')
// })

// console.log('同步')
// console.log('同步')
// console.log('同步')

// new Promise((resolve, reject) => {
//     console.log("log: 外部promise");
//     resolve();
//   })
//     .then(() => {
//       console.log("log: 外部第一个then");
//       new Promise((resolve, reject) => {
//         console.log("log: 内部promise");
//         resolve();
//       })
//         .then(() => {
//           console.log("log: 内部第一个then");
//         })
//         .then(() => {
//           console.log("log: 内部第二个then");
//         });
//     })
//     .then(() => {
//       console.log("log: 外部第二个then");
//     });
    
  // log: 外部promise
  // log: 外部第一个then
  // log: 内部promise
  // log: 内部第一个then
  // log: 外部第二个then
  // log: 内部第二个then


//   const promise = new Promise((resolvex) => {
//       resolvex();
//   });
//   promise.then( () => {
//       console.log('then1')
//   }).then(() => {
//       console.log('then2')
//   }) 

// let obj = {
//     name: 'zhl',
//     age: 12
// };
// console.log(obj+1)

//宏任务和微任务的使用（优先级最好的就是调用栈--同步）
// console.log('一缸白米饭');
// setTimeout(function() {
//     console.log('红烧鸡屁股');
// },200);
// Promise.resolve().then( () => {
//     console.log('白灼黑木耳');
// });
// console.log('一盘白开水');
// Promise.resolve().then( () => {
//     console.log('榴莲拼盘');
// });
// setTimeout(function() {
//     console.log('鱼头');
//     console.log('乳猪头');
// },0);
// Promise.resolve().then( () => {
//     console.log('麻婆豆腐');
// });

//new function使用
// let fun = function() {
//     console.log("function is used!0")
// }
// console.log(fun.jj);

// for (var i = 0; i < 3; i++) {
//     // setTimeout(_ => {
//         console.log(i)
//     //   })
//     }
    
//     for (let i = 0; i < 3; i++) {
//       setTimeout(_ => {
//         console.log(i)
//       })
//     }

//就是没有变量名，自动认为是var，然后var可以跳出{}块提升，不可以跳出函数提升
function x() {
  a = 'x';
}
for(let i =0;i<3;i++) {
  b="yyu";
}
console.log(b)