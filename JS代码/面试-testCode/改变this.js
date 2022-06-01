let oa= {
    a: 1,
    b() {
        console.log(this.a);
    }
};
let ob= {
    a: 11,

};
// 先改变oa.b()方法中this的指向
oa.b.bind(ob);
    // 虽然上面改变了this，但是oa.b()又将this改回来了
oa.b();