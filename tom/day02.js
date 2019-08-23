/**
 * 命名函数
 */
// console.log(fn());
// function fn() {
//     return 'test';
// }

// const ftest = function foo() {
//     return typeof foo;
// }

// console.log(typeof foo);
// console.log(ftest());
// 调用栈
// function foo(){
//     return bar();
//   }
//   function bar(){
//     return baz();
//   }
//   function baz(){
//     debugger;
//   }
//   foo();

// function foo(){
//     return bar();
//   }
//   var bar = function(){
//     return baz();
//   }
//   function baz(){
//     debugger;
//   }
//   foo();

// function foo() {
//     return bar();
// }
// var bar = (function () {
//     if (window.addEventListener) {
//         return function () {
//             return baz();
//         };
//     }
//     else if (window.attachEvent) {
//         return function () {
//             return baz();
//         };
//     }
// })();
// function baz() {
//     debugger;
// }
// foo();
// function foo() {
//     return baz();
// }
// var bar = function () {
//     debugger;
// };
// var baz = bar;
// bar = function () {
//     alert('spoofed');
// };
// foo();

// function foo() {
//     return bar();
// }
// var bar = (function () {
//     if (window.addEventListener) {
//         return function bar() {
//             return baz();
//         };
//     }
//     else if (window.attachEvent) {
//         return function bar() {
//             return baz();
//         };
//     }
// })();
// function baz() {
//     debugger;
// }
// foo();


var f = function g() {
    console.log(1);
    return 1;
};
if (false) {
    f = function g() {
        console.log(2);
        return 2;
    };
}
g(); // 2
f(); //

