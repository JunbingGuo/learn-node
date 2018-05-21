// var hello = require('./hello');
// hello.world();
// 
var Hello = require('./hello');
var hello = new Hello();
hello.setName('test');
hello.sayName();