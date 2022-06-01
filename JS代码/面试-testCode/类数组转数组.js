 let arrayLike = {
     '0': 3,
     '1': 4,
     length: 2,
    //  push: Array.prototype.push
 };
//  arrayLike.push(2)
 console.log(Array.prototype.slice.call(arrayLike));
 console.log(Array.from(arrayLike));