/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    nums.sort((a,b) => a-b);
    let len = nums.length;
    let result=[];
    let sum;
    for(let a=0; a<len-3; a++){
        // 确定第一个元素后的减枝操作
        if(nums[a]+nums[a+1]+nums[a+2]+nums[a+3] > target){
            continue;
        }else if(nums[a]+nums[len-1]+nums[len-2]+nums[len-3] < target){
            continue;
        }
        for(let b=a+1; b<len-2; b++){
            // 二向剪枝
            if(nums[a]+nums[b]+nums[b+1]+nums[b+2] > target){
                continue;
            }else if(nums[a]+nums[len-1]+nums[len-2]+nums[b] < target){
                continue;
            }
            let c=b+1,d=len-1;
            let flag = (target-nums[a]-nums[b]-nums[c]-nums[d])>0;
            while(c!==d){
                sum = nums[a]+nums[b]+nums[c]+nums[d];
                // 要是flag等于0，直接返回
                let tempFlag = (target-sum)>0;
                if(sum === target){
                    // !!! 上个例子应为是去重后的，但这个不可以break
                    result.push([nums[a],nums[b],nums[c],nums[d]]);
                }
                // !!! 因为颗粒度大小不同，不建议使用突变的形式

                // else if(tempFlag !== flag){
                //     if(sum === target){
                //         result.push([nums[a],nums[b],nums[c],nums[d]]);
                //         break;
                //     }else {
                //         // 要是突变的时候还是不成立，那么既不用看后后面了
                //         break;
                //     }
                // }
                if(sum < target){
                    c++;
                }else{
                    d--;
                }
            }
        }
    }
    // 二维数组去重
    // 我的方法问题，在于元素是数组，比较大小要toString，但是比较之后又要返回原来的样子
    // 那使用对象 key比较，value存储未改变前的
    let map = new Map();
    result.forEach((item) => {
        // 赋值的方式不对
        // map[item.toString()] = item;
        map.set(item.toString(), item);
    })
    // console.log(map.values())
    // return [...map.values()];
    let r=[];
    map.forEach((item) => {
        r.push(item);
    })
    return r;
};
