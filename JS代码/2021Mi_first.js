//求a和b相乘的值，可能是小数，需要注意结果的精度问题
let a=1.12345677910111213141516
console.log(a.toFixed(5))


	
// // 第一种，结果小数是两乘数的和
// function multiply(a, b) {[]
//     var re = /\./;
//     var aDec = a.toString().split('.')[1] || '';
//     var bDec = b.toString().split('.')[1] || '';
//     var fix = aDec.length  + bDec.length;
//     return (a * b).toFixed(fix);
	
// }
// var result = multiply(1,2.546)
// console.log(result)

// 第二种方法
// 其实都一样，都是依靠toFixed()方法