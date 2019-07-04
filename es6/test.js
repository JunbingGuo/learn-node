// eval('console.log(123)');

// function fib(num) {
// 	if (num === 0) return 0;
// 	if (num === 1) return 1;
// 	return fib(num -2) + fib(num - 1);
// }
// console.log(fib(3), fib(5), fib(10));

// var obj = [1, 2, 3];
// function f(o) {
//   o = [2, 3, 4];
//   0[1] = 10;
// }
// f(obj);
// console.log(obj);
// var arr = [];
// arr[-1] = 'a';
// arr[Math.pow(2, 32)] = 'b';
// console.log(arr.length);
// var a = [, , ,];
// console.log(a.length);
// console.log(2 > '11');
// console.log('2' > '11');
// console.log('2' > '21');
// console.log(1 === 1.0);
// console.log(!-0);
// console.log(-0 && 'd');
// console.log('t' && (2 + 3));
// // console.log(23 | 0);
// console.log((186).toString(16), (218).toString(16), (85).toString(16));
// var color = {r: 186, g: 218, b: 85};

// // RGB to HEX
// // (1 << 24)的作用为保证结果是6位数
// var rgb2hex = function(r, g, b) {
//   return '#' + ((1 << 24) + (r << 16) + (g << 8) + b)
//     .toString(16) // 先转成十六进制，然后返回字符串
//     .substr(1);   // 去除字符串的最高位，返回后面六个字符串
// }

// rgb2hex(color.r, color.g, color.b);
// var size = '81646724';
// function bytesToSize(bytes) {
//     if (bytes === 0) return '0 B';
//     var k = 1000, // or 1024
//         sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
//         i = Math.floor(Math.log(bytes) / Math.log(k));
 
//    return (bytes / Math.pow(k, i)).toFixed(2) + ' ' + sizes[i];
// }
// console.log(bytesToSize(parseInt(size)));

// var test = Number('123aa');
// console.log(test);
var s1 = Symbol('test');
// console.log(typeof s);
// console.log(s.toString());
let a = {};
a[s1] = 123;
console.log(a[s1]);