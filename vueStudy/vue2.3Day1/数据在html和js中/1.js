// {let x = 'xx'
// window.y ='xy'
// function xx() {
//
// }}
// vue3的ref需要import的原因就是  vue的源码写在了一个块级作用域中  => iife函数包装

let vue = (function (y){console.log(y)}())

vue('g')
