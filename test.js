let map = new Map([
  ["name", ""],
  ["age", 12],
]);
// console.log(map);
// function useJson(anyType){
//     return JSON.parse(JSON.stringify(anyType))
// }

// let res = useJson(map)
// console.log(res)

// let resOfObj = useJson({name: 'zhl', age: 12})
// console.log(resOfObj)

function _strMapToObj(strMap) {
  let obj = Object.create(null);
  for (let [k, v] of strMap) {
    obj[k] = v;
  }
  return obj;
}
/**
 *map转换为json
 */
function _mapToJson(map) {
  return JSON.stringify(_strMapToObj(map));
}

console.log(_mapToJson(map));

let obj = {
    
}