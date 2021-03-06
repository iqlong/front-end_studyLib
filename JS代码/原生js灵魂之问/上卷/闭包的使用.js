/**
 * 闭包不一定需要函数中返回一个函数，只需要：父级作用域的引用存在即可
 *      闭包的表现形式：
 *          1. 返回一个函数
 *          2. 作为函数参数传递
 *          3. 在定时器、事件监听、Ajax请求、跨窗口通信、Web Workers或者任何异步中，只要使用了回调函数，实际上就是在使用闭包。
 *          4. IIFE立即执行函数中创建闭包
 * */
