// Functions
// function factorial(n) {
//   if (n ==0 || n == 1) {
//     return 1;
//   }
//   return n * factorial(n - 1)
// }

// console.log(factorial(2))
// console.log(factorial(3))
// console.log(factorial(4))
// console.log(factorial(5))

// function loop(x) {
//   if (x >= 10) // "x >= 10" 是退出条件（等同于 "!(x < 10)"）
//     return;
//   // 做些什么
//   console.log(x);
//   loop(x + 1); // 递归调用
// }
// loop(0);

// function walkTree(node) {
//   if (node == null) // 
//     return;
//   // do something with node
//   for (var i = 0; i < node.childNodes.length; i++) {
//     walkTree(node.childNodes[i]);
//   }
// }

// function outside() {
//   var x = 5;
//   function inside(x) {
//     return x * 2;
//   }
//   return inside;
// }

// outside()(10); // returns 20 instead of 10

// console.log(outside()(10))
// console.log(outside()())

// function Person() {
//   // 构造函数Person()将`this`定义为自身
//   this.age = 0;

//   setTimeout(function growUp() {
//     // 在非严格模式下，growUp()函数将`this`定义为“全局对象”，
//     // 这与Person()定义的`this`不同，
//     // 所以下面的语句不会起到预期的效果。
//     this.age++; // this指向window
//     console.log(this.age);
//     console.log(this);
//   }, 1000);
// }

// var p = new Person();
// console.log(p.age);

// console.log(isFinite('a'))
// console.log(encodeURI('http://username:password@www.example.com:80/path/to/file.php?foo=316&bar=this+has+spaces#anchor'));
var set1 = ";,/?:@&=+$";  // 保留字符
var set2 = "-_.!~*'()";   // 不转义字符
var set3 = "#";           // 数字标志
var set4 = "ABC abc 123"; // 字母数字字符和空格

console.log(encodeURI(set1)); // ;,/?:@&=+$
console.log(encodeURI(set2)); // -_.!~*'()
console.log(encodeURI(set3)); // #
console.log(encodeURI(set4)); // ABC%20abc%20123 (the space gets encoded as %20)

console.log(encodeURIComponent(set1)); // %3B%2C%2F%3F%3A%40%26%3D%2B%24
console.log(encodeURIComponent(set2)); // -_.!~*'()
console.log(encodeURIComponent(set3)); // %23
console.log(encodeURIComponent(set4)); // ABC%20abc%20123 (the space gets encoded as %20)