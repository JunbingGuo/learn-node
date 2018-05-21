var util = require('util');
function Base() {
  this.name = 'base';
  this.base = 1990;
  this.sayHello = function() {
    console.log('hello ' + this.name);
  }
}
Base.prototype.showName = function() {
  console.log('showname: ' + this.name);
}
function Sub() {
  this.name = 'Sub';
}
util.inherits(Sub, Base);
var objBase = new Base();
objBase.showName();
objBase.sayHello();
console.log(objBase);
var objSub = new Sub();
objSub.showName();
console.log(objSub);

function Person() {
  this.name = 'bing';
  this.toString = function() {
    return this.name;
  };
}
var obj = new Person();
console.log(util.inspect(obj));
console.log(util.inspect(obj, true));