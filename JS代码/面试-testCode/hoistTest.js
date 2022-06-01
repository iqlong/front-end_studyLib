
console.log(a);
function a() {
    
};
var a = 1;

console.log(a);
// 问题就是function和var的变量提升： 是谁在第一
    // 之前的看法是function比var 的提升更加优先
    // 但经过测试 - 发现：function会覆盖var，是否意味着var提升的比function高