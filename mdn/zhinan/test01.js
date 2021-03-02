// Grammar_and_types 2020.05.10
// 变量提升
// console.log(x === undefined); // true
// var x = 3;
// console.log(x);

// // will return a value of undefined
// var myvar = "my value";

// (function() {
//   console.log(myvar); // undefined
//   var myvar = "local value";
// })();

// var theProtoObj = {
//   'a': 1,
// }
// var handler = 'aa';
// var obj = {
//   // __proto__
//   __proto__: theProtoObj,
//   // Shorthand for ‘handler: handler’
//   handler,
//   // Methods
//   toString() {
//    // Super calls
//    return "d " + super.toString();
//   },
//   // Computed (dynamic) property names
//   [ 'prop_' + (() => 42)() ]: 42
// };

// console.log(obj);

var sss =`In JavaScript this is
not legal.`
console.log(sss);

console.log('hello \0 world');
console.log('hello \b world');
console.log('hello \f world');
console.log('hello \n world');
console.log('hello \r world');
console.log('hello \t world');
console.log('hello \v world');
console.log('hello \' world');
console.log('hello \" world');
console.log('hello \\ world');
console.log('hello \\ world');