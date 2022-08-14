const foo = { x: 'string' };
enum charList {
    first= 'x',
    second= 1,

}
console.log(charList.first, charList.second);
let hello: charList = charList.first

interface IPoint { 
    x:number,
    y:number 
} 

type point = {
    x: string,
    y?: string
}

let x: point = {
    x: '',
}