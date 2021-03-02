// var S = new String('test');
// console.log(S);
// console.log(typeof S);
// S.len = 5;
// console.log(S.len);

// var ss = 'test';
// ss.len = 4;
// console.log(ss.len);
// var arr = [1, 3, 4, 5];
// console.log(arr.valueOf());
// var now = new Date();
// console.log(now);
// console.log(now + 1);
// console.log(now - 1);
// console.log(now.toString());
// var a = '1';
// var b = a++;
// console.log(a, b);
// var a = [,,,,];
// var a1 = new Array(5);
// console.log(1 in a);
// console.log(0 in a1);
// var a2 = [,];
// console.log(0 in a2);
// console.log(a.length);
// console.log(a[0]);
// console.log(0 in a);
// var b = [undefined, undefined];
// console.log(0 in b);
// 
// var a = [1,2,3,4,5];
// var b = a.concat(8,9);
// console.log(a);
// console.log(b);
// function f(x) {
// 	console.log(x);
// 	x = 12;
// 	console.log(arguments[0]);
// }
// f(2);
// var obj = {
// 	test: function(a, b) {
// 		console.log(a + b);
// 	},
// };

// function trace(o, m) {
// 	var original = o[m];
// 	o[m] = function() {
// 		console.log(new Date(), "Enter:", m);
// 		var result = original.apply(this, arguments);
// 		console.log(new Date(), "Exit:", m);
// 		return result;
// 	};
// }
// trace(obj, 'test');
// obj.test(1,3);
function f() {
	console.log(arguments);
};
function array(a, n) {
	return Array.prototype.slice.call(a, n || 0);
}
var obj = {
	0: '0',
	1: 'a',
	2: 'b',
	3: 'c',
	length: 4,
}
// const aa = array(obj);
// const bb = array(obj, 1);
// console.log(aa);
// console.log(bb);
function partialLeft(f) {
	var args = arguments;
	return function() {
		var a = array(args, 1);
		a = a.concat(array(arguments));
		return f.apply(this, a);
	};
}

var test = partialLeft(f, 1, 2, 3);
test(4, 5, 6)('a', 'b');
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
// var s1 = Symbol('test');
// console.log(typeof s);

// console.log(s.toString());
// let a = {};
// a[s1] = 123;
// console.log(a[s1]);

