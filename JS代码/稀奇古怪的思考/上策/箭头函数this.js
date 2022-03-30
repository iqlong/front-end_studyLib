let obj = {
    name: 'obj',
    aF: function aJ (){
        // console.log(this.name);
        // 在函数内部通过属性的方式添加函数不可以

        return  () => {
            console.log(this.name);
            console.log(this)
        }
    }

}
obj.aF.out = () => {
    console.log(this.name,this);
}

let obj2 = {
    name: 'obj2'
};
let fuck=obj.aF();
obj.aF()()
obj.aF.out()
// obj.aF().call(obj2);
// function才有默认的name属性
// obj.aF()



