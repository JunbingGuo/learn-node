// class Bar {
// 	doString() {
// 		console.log('stuff');
// 	}
// }
// var b = new Bar();
// b.doString();
// let obj = { foo: 123 };
// console.log(Object.getOwnPropertyDescriptor(obj, 'foo'));
// console.log(Object.keys({ [Symbol()]:0, b:0, 10:0, 2:0, a:0 }));
// console.log(Object.keys({aa: 1, bb: 2, d: 2, cc: 3, 2: 0}));
const o = Object.create({ x: 1, y: 2 });
o.z = 3;

let { x, ...newObj } = o;
let { y, z } = newObj;
console.log(newObj);