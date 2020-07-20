// var print = function x(){
//   console.log(typeof x);
// };
// console.log(x)
// ReferenceError: x is not defined

// print()

// console.log(print.name)

// var f = function () {
//   console.log('1');
// }

// function f() {
//   console.log('2');
// }

// f()

// console.log(Math.sqrt.toString())

// var multiplie = function(fn) {
//   var arr = fn.toString().split('\n');
//   return arr.slice(1, arr.length - 1).join('\n');
// }

// function f() {
//   /* 这是一个
//   多行注释
//   哈哈哈
//    */
// }
// console.log(multiplie(f));

// -------------------------------------------
// var v = 1;
// function f() {
//   console.log(this.v);
// }
// f();
// console.log(window.v);

// if (true) {
//   var x = 5;
// }
// console.log(x)
// --------------------------------------
// var args = [1, 2,3 ,4]
// console.log(args.slice())
// function test(a,b) {
//   console.log(arguments);
//   console.log(Array.isArray(arguments));
//   var arr = Array.prototype.slice.call(arguments);
//   console.log(arr)
//   console.log(Array.isArray(arr));
//   console.log(arguments.toString())
//   console.log(arr.toString())
//   console.log(Object.prototype.toString.call(arr));
// }
// test('a', 1, 3, 5)

// function incre(strrt) {
//   return function() {
//     console.log(strrt);
//     return strrt++;
//   }
// }

// var inc = incre(5)
// console.log(inc())
// console.log(inc())
// console.log(inc())

// ---------------
// eval('var a = 1');
// console.log(a);
// console.log(window.a);

// var m = eval;
// m('var x = 1');
// console.log(x) // 1

var a = 1;

function f() {
  var a = 2;
  var e = eval;
  e('console.log(a)');
}

f() // 1