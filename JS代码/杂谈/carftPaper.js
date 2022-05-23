async function test(){
    // 遇到错误不会继续执行下面的东西了
    await Promise.resolve('g')
    await console.log('hello');
}
test().catch(e => console.log('@',e));