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