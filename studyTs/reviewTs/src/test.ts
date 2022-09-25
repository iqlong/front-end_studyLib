let zhl: unknown = '';

interface Person {
    name: string,
    age: number,
}

function goSchool<x extends Person>(arg: x) {
    
}

type testObj = {
    text: string
}

type getTO = keyof testObj
// let key_testObj: getTO = 1

let testVar: testObj['text'] = ''