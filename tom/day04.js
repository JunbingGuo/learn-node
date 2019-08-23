/**
 * 深入理解JavaScript系列（4）：立即调用的函数表达式
 */
// function makeCounter() {
//     var i = 0;
//     return function() {
//         console.log(++i);
//     }
// }
// var couter = makeCounter();
// couter();
// couter();

// for (var i = 0; i < 3; i++) {
//     setTimeout(function() {
//         console.log(i);
//     });
// }

// for (var j = 0; j< 3; j++) {
//     (function(j) {
//         setTimeout(function() {
//             console.log(j);
//         })
//     }(j))
// }

function foo() {
    console.log('rwrw');
}(1)