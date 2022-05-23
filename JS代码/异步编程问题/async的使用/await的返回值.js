
function innerP(){
    Promise.resolve('成国公').then((res) => {})

}
async function main(){
    // let res= await  new Promise((res,rej) => {
    //     res('策划公共')
    // })
    let res = await innerP();
    console.log(res)
}
main()
