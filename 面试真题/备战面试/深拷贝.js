function deepCopy(obj){
    if(typeof obj === 'object'){
        // 对每一层都执行拷贝
        let copiedObj = Array.isArray(obj) ? []:{};
        for(let val in obj){
            copiedObj[val] = deepCopy(obj[val]);
        }
        return copiedObj;
    }else{
        return obj;
    }
}
/**
 * 解决了对象{} 和 []的问题
 * 但是由于函数中使用的 for in
 *      1. 对于原型上的东西会出现问题
 *      2. 对于函数的拷贝问题
 *      3. 对于obj.obj = obj的情况会出现栈溢出
 * */

function clone(target, map = new Map()) {
    if (typeof target === 'object') {
        let cloneTarget = Array.isArray(target) ? [] : {};
        if (map.get(target)) {
            return map.get(target);
        }
        map.set(target, cloneTarget);
        for (const key in target) {
            cloneTarget[key] = clone(target[key], map);
        }
        return cloneTarget;
    } else {
        return target;
    }
};

let obj = {
    name: 'zhl',
    message: {
        gender: 'male',
        age: 12,
        grade: [98, 87]
    },
    firstFunc: function () {
        console.log('gg')
    }
}
obj.obj = obj;
// 往对象的原型上加东西
Object.setPrototypeOf(obj, {
    id: 12,
    status: 'using'
})
console.log(clone(obj))
