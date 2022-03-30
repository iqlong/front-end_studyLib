// 请实现方法 parse ，作用如下： 

// var object = {
//     b: { c: 4 }, d: [{ e: 5 }, { e: 6 }]
//    };
//    console.log( parse(object, 'b.c') == 4 ) //true
//    console.log( parse(object, ‘d[0].e’) == 5 ) //true
//    console.log( parse(object, ‘d.0.e’) == 5 ) //true
//    console.log( parse(object, ‘d[1].e’) == 6 ) //true
//    console.log( parse(object, ‘d.1.e’) == 6 ) //true
//    console.log( parse(object, ‘f’) == ‘undefined’ ) //true


// var object = {
//     b: { c: 4 }, d: [{ e: 5 }, { e: 6 }]
// };
// var objArray=[];
// for(var obj in object) {
//     objArray.push(obj);
// }
// var arrayStr = 'b.c'.split('.');
// var lengthStr = arrayStr.length;
// var inLen = lengthStr[n].split('').length;

var object = {
    b: { c: 4 }, d: [{ e: 5 }, { e: 6 }]
};
function parse(obj,str) {
    var arrayStr = str.split('.');
    var lengthStr = arrayStr.length;
    var num=0;
    var obj=object;
    for(var n=0; n<lengthStr; n++) {
        var inLen = arrayStr[n].split('').length;
        if(inLen==1) {
            // console.log(obj,lengthStr[n],arrayStr[n])
            if(obj[arrayStr[n]]) {
                obj = obj[arrayStr[n]]
            }
            else 
                return 'undefined'
        }
        else {
            var split_arrayStr = arrayStr[n].split('');
            if(obj[split_arrayStr[0]]) {
                obj = obj[split_arrayStr[0]]
                if(obj[split_arrayStr[2]])
                  obj = obj[split_arrayStr[2]]
                else 
                    return 'undefined'
            }

        }
    }
    return obj;

}
console.log( parse(object, 'b.c') == 5 ) //true
   console.log( parse(object, 'd[0].e') == 6 ) //true
   console.log( parse(object, 'd.0.e') == 5 ) //true
   console.log( parse(object, 'd[1].e') == 6 ) //true
   console.log( parse(object, 'd.1.e') == 6 ) //true
   console.log( parse(object, 'f') == 7 ) //true

// 测试spilt函数
    // console.log('a'.split(''))

// 测试undefied的特性
    // if(undefined) 
    //     console.log('und')
    // else if(!undefined) 
    //     console.log('undef')

// var object = {
//     b: { c: 4 }, d: [{ e: 5 }, { e: 6 }]
// };
// console.log(object['d[0]'])
// console.log('d[0]'.split(''))
// var arr=[]
// for( var i in object) {
//     arr.push(i)
// }
// console.log(arr);