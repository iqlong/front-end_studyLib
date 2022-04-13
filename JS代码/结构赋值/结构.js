let obj = {
    a: {
        b: ['a','b','c']
    }
};
let {a: {
    b: [a]
}} = obj;
console.log(a);
