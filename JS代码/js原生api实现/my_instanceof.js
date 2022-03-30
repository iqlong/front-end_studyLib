/**
 * aim: 手写instanceof操作符
 *  这种情况不可以用递归，不可以用递归!!!
 * */
function myInstance(left, right) {
    while(left.__proto__){
        if(left.__proto__ == right.prototype) return true;
        else {
            left = left.__proto__;
        }
    }
    return false;

}
console.log(myInstance([1,2], Array));
// console.log(1..toString())
