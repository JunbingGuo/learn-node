/**
 * 深入理解JavaScript系列（5）：强大的原型和原型链
 */

 
//  var Calculator = function(dec, tax) {
//     this.dec = dec;
//     this.tax = tax;
//  }
 // 1
//  Calculator.prototype = {
//      add: function(x, y) {
//          return x + y;
//      },
//      subtract: function(x, y) {
//          return x - y;
//      }
//  }

//  console.log((new Calculator().add(1,3)));
// 2

// Calculator.prototype = function() {
//     var add = function(x, y) {
//         return x + y;
//     }
//     var subtract = function(x, y) {
//         return x - y;
//     }
//     return {
//         add: add,
//         subtract: subtract
//     }
// }();
// console.log(add(2, 4));
// console.log(subtract(6, 4));

// 3
 var Base = function() {
     this.deci = 2;
 }
 
 Base.prototype.add = function(x, y) {
     return x + y;
 }
 Base.prototype.subtract = function(x, y) {
     return x - y;
 }

 var Calculator = function() {
     this.tax = 5;
 }

 Calculator.prototype = new Base();

 
 var cal = new Calculator();
 var cal2 = new Calculator();
 console.log(cal.add(1, 3));
 console.log(cal.deci);

 // 重写
 Calculator.prototype.add = function(x, y) {
    return x + y +this.tax;
}
// console.log(cal.add(1, 3));
cal2.tax = 15;
console.log(cal.tax);

function Foo() {
    this.value = 42;
}

Foo.prototype = {
    method: function() {
        console.log('methods');
    }
}

function Bar() {}

Bar.prototype = new Foo();

Bar.prototype.foo = "hello world";
// Bar.prototype.constructor = Bar;
console.log(Bar.prototype.constructor);

var test = new Bar();
var tt = new Bar();
tt.value = 1024;
console.log(test.value, tt.value);