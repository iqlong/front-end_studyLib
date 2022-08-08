// 递归test
function minus(num){
    if(num == 0) {
        return
    }
    minus(--num);
    console.log(num);
}
minus(10)
