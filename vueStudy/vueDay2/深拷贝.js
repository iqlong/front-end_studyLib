// 简单的深度拷贝
    // 使用的递归不考虑循环,只是考虑了对象和数组的区别
function deepCopy(params) {
    if(typeof params === 'object') {
        let copied = Array.isArray(params) ? []:{};
        for(const key in params) {
            copied[key] = params[key];
        }
        return copied;  
    }else {
        return params;
    }
}

const target = {
    field1: 1,
    field2: undefined,
    field3: {
        child: 'child'
    },
    field4: [2, 4, 8]
};

let copied = deepCopy(target);
console.log(copied, copied === target);