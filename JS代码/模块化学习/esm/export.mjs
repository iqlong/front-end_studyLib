let ct = 0;
setTimeout(() => {
    console.log("base.count", ++ct); // 1
}, 500)
export let count = ct;
