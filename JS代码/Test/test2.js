// console.log(Show.name)
// 预约的状态私有的，不能直接通过js检测到：意思是同步可以输出状态，异步才可以吗
// let p = new Promise( () => {});
// console.log(new Promise( () => {}));
// // setTimeout(console.log,0,p);
// // setTimeout(console.log,0,new Promise( () => {}));
// setTimeout(console.log, 0, Promise.resolve() );
// setTimeout(console.log, 0, Promise.resolve(2) );

// setTimeout(console.log, 0, Promise.reject('ff'));
let clone = function(data) {
    return JSON.parse(JSON.stringify(data));
};
let items = [
    {
        name: 'zh',
        age: 12
    },
    {
        name: 'xx',
        age: 13
    }
];
let temp=[];
for(let n=0;n<items.length;n++) {
    temp[n] = clone(items[n]);
    //    console.log(items[n]);
    if(items[n].age==12) {
        items[n].age=1;
    }
}
console.log(items);
console.log(temp);