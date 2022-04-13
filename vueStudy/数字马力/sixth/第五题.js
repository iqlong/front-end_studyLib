// 用class封装一下，类似promise每次函数调用都返回class linkCount实例对象
class linkCount{
    constructor(num) {
        this.value = num;
    }
    add(added){
        this.value += added;
        return this;
    }
    multi(multi){
        this.value *= multi;
        return this;
    }
    minus(minus){
        this.value -= minus;
        return this;
    }
    div(div){
        this.value /= div;
        return this;
    }
    getValue(){
        return this.value;
    }
}
function myCalculator(nums) {
    return new linkCount(nums);
}