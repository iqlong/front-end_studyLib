let obj = {
    name: 'zhl',
};
Object.defineProperty(obj,'words', {
    value: 'helo',
    writable: true,
})
console.log(obj.words);
obj.words = '勿要、患得患失';
console.log(obj.words);
temp = '我啥也没有';
console.log('------------------------');
Object.defineProperty(obj, 'fwq', {
    get() {
        // 每次obj.fwq又会调用get()函数,所以会maximum stack size exceededu
        // return obj.fwq;
        return temp;
    },
    set(nv) {
        temp = nv;
        
    }
});
obj.fwq  += 'jk';
console.log(obj.fwq);


// 一个被封装的函数
    // defineReactive