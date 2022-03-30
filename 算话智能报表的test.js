let appMenu= [
{
    name: '变量衍生监控',
    id: '1',
    icon:'el-icon-menu',
    children: [
    {
        name: '大屏首页',
        id: '1-1',
        icon:'el-icon-wind-power',
    },{
        name: '变量衍生监控',
        id: '1-2',
        icon:'el-icon-wind-power',
    }
    ]
},{
    name: '决策引擎决策结果监控',
    id: '2',
    icon:'el-icon-menu',
}
];
// let rst = appMenu.map( (item) => {
//     return item.name;
// });
// console.log(rst);
// console.log(appMenu.indexOf('决策引擎决策结果监控'),appMenu.includes('结果'));


// let cMenu = appMenu;
// const iName = '首页';
// let slectedArray = [];

// function searchName(cMenu) {
//     for(let partMenu of cMenu) {
//         if( partMenu.name.includes(iName) ) {
//             // 添加后跳过
//             slectedArray.push(partMenu);
//             continue;
//         }else {
//             if(!partMenu.children) {
//                 // 不添加跳过
//                 continue;
//             }else {
//                 // 若不明确，继续贪婪下去
//                 searchName(partMenu.children);
//             }
//         }
//     }
//     return slectedArray;

// }
// console.log(searchName(cMenu));

// let aObj= [
//     {
//         name: 'f',age: 12
//     },{
//         name: 'g',age: 15
//     }
// ];
// for(let ob of aObj) {
//     if(ob == aObj[aObj.length-1]) {
//         console.log(ob)
//     }
// }

// return会突破函数外的循环吗   
    // 答: 不会！
// let x =3;
// outer: while(x>1) {
//     (function csl() {
//         console.log(x);
//         return;
//     })()
//     if(1) break
//     x--;
// }

// ...位置不同导致找到的dom - innerText还要函数操作
// let operatedMenu = appMenu;
//       let result;
//       // 由于应用下面
//       for(let app of operatedMenu) {
//         result = (function deGui() {
//           // 改成try catch试一下
//           if(app.name === appName) {
//             return app;
//           }else if(app.children) {
//             let child = app.children;
//             if(child[child.length-1].name == appName) {
//               return app;
//             }
//           }else {
//             deGui(app.children);
//           }
//         }) (app)
//         // 若找到了要复制的app，就跳出循环
//         if(result) {
//           break;
//         }
//       }
//       console.log(result)

// 巧妙的数据中交换数据
  let arr=[1,2,3]
  let index = 1;
  arr.splice(index,1,arr[index])
  console.log(arr);