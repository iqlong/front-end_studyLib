function getType(arr, name) {
    arr.some( item => {
        if(item.name === name) {
            item.formater(name)
            return 1
        }
    })
}

const funcArr = [
    {
        key: 'name',
        formater: (name) => {
            return name + '1'
        }
    }, {
        key: 'age',
        formater: (age) => {
            return age + 'q'
        }
    }, {
        key: 'person',
        formater: (age) => {
            return age + 'gg'
        }
    }
]
// Map
//   'name' => nameFormate
//   'age' => ageFormate

const dataArr = [
    {
        name: 'ly',
        age: 12,
        person: 12

    }, {
        name: 'ls',
        age: 34
    }
]

console.log(dataArr)


let changedFuncArr = funcArr.map(item => {
    let res  = []
    res[0] = item.key
    res[1] = item.formater
    // for(let i=0; i<item.length; i++) {
    //
    // }
    return res
})

let funcMap = new Map(changedFuncArr)

let resData = dataArr.map(item => {
    let res = {}
    for(const key in item) {
        res[key] = funcMap.get(key)(item[key])
    }
    return res
})

console.log(resData);

// [
//     {
//         name: 'ly1',
//         age: 12q,

//     }, {
//         name: 'ls1',
//         age: 34q
//     }
// ]

