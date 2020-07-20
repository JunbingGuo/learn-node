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
// const o = Object.create({ x: 1, y: 2 });
// o.z = 3;

// let { x, ...newObj } = o;
// let { y, z } = newObj;
// console.log(newObj);

// class User {
//   constructor(name, pass) {
//     this.name = name;
//     this.pass = pass;
//   }

//   showName() {
//     console.log(this.name);
//   }

//   showPass() {
//     console.log(this.pass);
//   }
// }

// const user = new User('hhh', 'sss');
// user.showName()
// user.showPass()
const testArr = ['10', '10', '10', '10', '10'];

const arr = testArr.map(parseInt);

const arr1 = testArr.map((item, index) => parseInt(item, index));


console.log(arr);
console.log(arr1);

console.log(parseInt(1, 0))
console.log(parseInt(1, 1))
console.log(parseInt(2, 2))
const testList = ['1.1', '2', '0.3'];
let unary = fn => val => fn(val);

let test = function(fn) {
  return function(val) {
    return fn(val);
  }
}
// console.log(unary)
let parse1 = test(parseInt);
let parse = unary(parseInt);
console.log(testList.map(parse));
console.log(testList.map(parse1));

console.log(parseInt(50, 4))
console.log(parseInt(50, 5))
console.log(parseInt('50aaa', 6))
console.log(parseInt('506aa', 6))

console.log(parseInt(1061, 2))

console.log(parseInt(4215, 5))

console.log(parseInt("08"))
console.log(parseInt("08", 8))