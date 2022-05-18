let obj = {
    val: 2,
    next: {
        val: 1,
        next: {
            val: 3,
            next: null
        }
    }
};
let o = obj;
o.next = JSON.parse(JSON.stringify(o));
o.val='gg';
console.dir(o,{
    depth: 100
})
console.dir(o.next,{
    depth: 100
})
console.log(o,o.next,o.next.next)
// 向链表的某处插入节点和直接在链表的头部插入节点
