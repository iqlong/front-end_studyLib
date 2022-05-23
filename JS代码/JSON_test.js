let obj={
    name: 'zhl',
    multi: {
        name: 'jk'
    }
}
console.log(obj)
console.log(JSON.stringify(obj, (key, val) => {
    switch (key) {
        case 'name':
            return 'hhh';
        default:
            return val;
    }

}))

