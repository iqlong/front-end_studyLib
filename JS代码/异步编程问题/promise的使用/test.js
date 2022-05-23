let p = Promise.resolve('gg').catch((e) => {
    console.log(e)
})

setTimeout(() => {
    console.log(p)
},0)

