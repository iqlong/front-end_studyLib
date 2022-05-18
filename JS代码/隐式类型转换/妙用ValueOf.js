let a={
    value: 0,
    // Symbol.toPrimitive: function (){
    //     console.log('g')
    // },
    valueOf(){
        console.log('g',this.value)

        return ++this.value;
    }
}
a[Symbol.toPrimitive] = function(){
    console.log('gggg')
};
console.log(a==1 && a==2)
