// myname = 'global';

// function func() {
//     console.log(myname);
//     var myname = 'local';
//     console.log(myname);
// }

// func();
// 避免eval
// var jsstring = "var un = 2;console.log(un);";
// eval(jsstring);
// new Function(jsstring)();
// (function() {
//     eval(jsstring);
// })()

// console.log(typeof un);

// parseInt
var month = "06", year = "09";

console.log(parseInt(month), parseInt(year));
console.log(parseInt(month, 10), parseInt(year, 10));
console.log(+month, +year);

var test = "08 hello";
console.log(parseInt(test), +test);

