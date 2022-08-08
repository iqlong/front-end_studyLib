namespace Aoly{
    export interface Person{
        // 函数接口的两种写法
        // ():string,
            //
        say: () => void
    }
}
let x= ():string => {
    return 'x'
}
let obj={
    a:  function ():string{
        return  'g'
    }
}
