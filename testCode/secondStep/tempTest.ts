/**
 * 节流函数
 * @param fn: Function, delayTime: number
 */
 function trottle(fn: Function, delayTime: number) {
    let flag: boolean = true;
    return () => {
        if(flag) {
            flag = false;
            fn();
            setTimeout(() => {
                flag = true;
            }, delayTime)
        }
    }
 }

 