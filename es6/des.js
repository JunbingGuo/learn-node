// let [x, y] = [1, 2];
// console.log(x, y);
// [x, y] = [x +1, y + 1];
// console.log(x, y);
// [x, y] = [y, x];
// console.log(x, y);
// let tr = {r: 0, g: 1, b: 2};
// let {r: red, g: green, b: blue} = tr;
// console.log(red, green, blue);
// let o = {one: 1, two: 2, three: 3};
// for each (let v in o) console.log(v);
// function counter (start) {
//   let nextValue = Math.round(start);
//   return {next: function() { return nextValue++}};
// }
// let ss = counter(1000);
// console.log(ss.next());
// console.log(ss.next());
// let o = {x: 1, y: 2};
// Object.prototype.z = 3;
// for (p in o) console.log(p);
// for (p in Iterator(o)) console.log(p);

// function range(min, max) {
//   for (let i = Math.ceil(min); i <= max; i++) yield i;
// }

// for (let n in range(3, 8)) console.log(n);
// var x = 1;
// var y = 2;
// console.log('x=', x, ' y=', y);
// [x, y] = [y, x];
// console.log('x=', x, ' y=', y);
var s1 = Symbol('foo');
console.log(Symbol.keyFor(s1));