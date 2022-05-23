async function foo() {
    await setTimeout(()=>{
        console.log('gg');
    },2000)
    await 1
    return undefined
}
foo()