// async function x(){
//     console.log(await Promise.reject('f').then(()=>{},(mes)=>{
//         //
//         console.log('ghhg')
//         setTimeout(()=>{
//             console.log('g')
//         })
//         Promise.resolve('f').then(()=>{
//             console.log('fjkajl')
//         })
//     }))
//     console.log('hhh')
// }
// x()
Promise.resolve('f').then(()=>{
    console.log('fjkajl')
})
console.log('hhh')
