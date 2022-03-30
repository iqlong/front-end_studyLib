// function zhl() {
//     console.log(this)
// }
// zhl();

// let array = [1,2,3,4];
// function permute( nums ) {
//     let data = [];
//     if(nums && nums.length == 1) 
//         return [nums]
//     for(let i = 0; i < nums.length;i++) {
//         let arr = JSON.parse(JSON.stringify(nums))
//         arr.splice(i,1)
//         let info = permute(arr)
//         info && info.length > 0 && info.forEach(item => {
//             data.push([nums[i],...item])
//         })
//     }
//     return data
// };
// console.log(permute(array));

function permute(input) {
    var permArr = [],
    usedChars = [];
    function main(input){
        var i, ch;
        for (i = 0; i < input.length; i++) {
            ch = input.splice(i, 1)[0];
            // ch = input[i];
            usedChars.push(ch);
            if (input.length == 0) {
                // console.log(usedChars,usedChars.slice())
                permArr.push(usedChars.slice());
                // permArr.push(usedChars);
            }
            main(input);
            input.splice(i, 0, ch);
            usedChars.pop();
        }
        return permArr
    }
    return main(input);
};
console.log(permute([5,3,7,1]));

// let arr = [5, 3, 7, 1]
// let arr1 = arr.slice()
// arr.push(2);
// console.log(arr,arr1)