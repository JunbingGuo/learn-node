// function makeIterator(array) {
//     var nextIndex = 0;
//     return {
//         next: function() {
//             return nextIndex < array.length ?
//             { value: array[nextIndex++], done: false } :
//             { value: undefined, done: true};
//         }
//     }
// }
// var it = makeIterator(['a', 'b']);

// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

// let arr = ['a', 'b', 'c'];

// const it = arr[Symbol.iterator]();

// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

// class RangeIterator {
//     constructor(start, stop) {
//         this.value = start;
//         this.stop = stop;
//     }
//     [Symbol.iterator]() {
//         return this;
//     }
//     next() {
//         var value = this.value;
//         if (value < this.stop) {
//             this.value++;
//             return { value: value, done: false};
//         }
//         return { value: undefined, done: true};
//     }

// }
// function range(start, stop) {
//     return new RangeIterator(start, stop);
// }

// const ra = range(0, 3);

// for (var value of range(0, 3)) {
//     console.log(value);
// }

// class RangeIterator {
//     constructor(start, stop) {
//       this.value = start;
//       this.stop = stop;
//     }
  
//     [Symbol.iterator]() { return this; }
  
//     next() {
//       var value = this.value;
//       if (value < this.stop) {
//         this.value++;
//         return {done: false, value: value};
//       }
//       return {done: true, value: undefined};
//     }
//   }
  
//   function range(start, stop) {
//     return new RangeIterator(start, stop);
//   }
  
//   for (var value of range(0, 3)) {
//     console.log(value); // 0, 1, 2
//   }

// function Obj(value) {
//     this.value = value;
//     this.next = null;
//   }
  
//   Obj.prototype[Symbol.iterator] = function() {
//     var iterator = { next: next };
  
//     var current = this;
  
//     function next() {
//         console.log(current);
//       if (current) {
//         var value = current.value;
//         current = current.next;
//         return { done: false, value: value };
//       } else {
//         return { done: true };
//       }
//     }
//     return iterator;
//   }
  
//   var one = new Obj(1);
//   var two = new Obj(2);
//   var three = new Obj(3);
  
//   one.next = two;
//   two.next = three;
  
// //   for (var i of one){
// //     console.log(i); // 1, 2, 3
// //   }
// const oneIt = one[Symbol.iterator]();
// console.log(oneIt.next());
// // console.log(two[Symbol.iterator]().next());
// // console.log(three[Symbol.iterator]().next());
// console.log(oneIt.next());
// console.log(oneIt.next());
// console.log(oneIt.next());

// const arr = ['red', 'green', 'blue'];

// for(let v of arr) {
//   console.log(v); // red green blue
console.log(engines.keys());
// }

// var arr = ['a', 'b', 'c', 'd'];

// for (let a in arr) {
//   console.log(a); // 0 1 2 3
// }

// for (let a of arr) {
//   console.log(a); // a b c d
//   if (a == 'c') break;
// }
// let map = new Map().set('a', 1).set('b', 2);
// for (let pair of map) {
//   console.log(pair);
// }

var engines = new Set(["Gecko", "Trident", "Webkit", "Webkit"]);
// for (let e of engines) {
//   console.log(e);
// }
console.log(engines.keys());
console.log(engines.values());