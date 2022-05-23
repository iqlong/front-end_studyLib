## async中await的理解
> 1. await不是放在任意语句的前面，是放在promise前
>   + 作用是：await暂停整个async函数执行并交出控制权，等到后面的promise为resolve后才可以
