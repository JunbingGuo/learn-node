// function* hello() {
//     yield 'hello';
//     yield 'world';
//     return 'ending';
// }

// const ss = hello();

// console.log(ss.next());
// console.log(ss.next());
// console.log(ss.next());
// console.log(ss.next());

// function* f() {
//     console.log('ceshi');
// }
// const result = f();
// setTimeout(() => {
//     result.next();
// }, 2000);

// function* demo() {
//     let one = '';
//     // console.log(one, '0')
//     one = yield 1;
//     console.log(one, '2');
//     one = yield 2;
//     console.log(one, '3');
//     one = yield 3;
//     console.log(one, '4');
//     one = yield 4;
//     console.log(one, '5');
//     // console.log('hello,' + (yield 123));
//     // console.log('hello,' + (yield 456));
// }

// const de = demo();
// console.log(de.next(1));
// console.log(de.next(2));
// console.log(de.next(3));
// console.log(de.next());
// console.log(de.next());
// de.next();

// var myIterable = {};

// myIterable[Symbol.iterator] = function* () {
//     yield 1;
//     yield 2;
//     yield 3;
// }

// console.log([...myIterable]);
// function* f() {
//     for(var i = 0; true; i++) {
//       var reset = yield i;
//       console.log(reset);
//       if(reset) { i = -1; }
//     }
//   }
  
//   var g = f();
//   console.log(g.next());
//   console.log(g.next(67));
//   console.log(g.next());
//   console.log(g.next(90));

// function wrapper(generatorFunction) {
//     return function (...args) {
//       let generatorObject = generatorFunction(...args);
//       generatorObject.next();
//       return generatorObject;
//     };
//   }
  
//   const wrapped = wrapper(function* () {
//     console.log(`First input: ${yield}`);
//     return 'DONE';
//   });
//   const ww = wrapped();
//   console.log(ww.next('hello!'));
//   console.log(ww.next('hello!'));

// function* fabonacci() {
//     let [prev, curr] = [0, 1];
//     for(;;) {
//         yield curr;
//         [prev, curr] = [curr, prev + curr];
//     }
// }

// for (let num of fabonacci()) {
//     if (num > 1000) break;
//     console.log(num);
// }

// var g = function* () {
//     try {
//       yield;
//     } catch (e) {
//       console.log('内部捕获', e);
//     }
//   };
  
//   var i = g();
//   i.next();
  
//   try {
//     i.throw('a');
//     i.throw('b');
//   } catch (e) {
//     console.log('外部捕获', e);
//   }
// var g = function* () {
//     try {
//       yield;
//     } catch (e) {
//       console.log(e, 'in');
//     }
//   };
  
//   var i = g();
// //   i.next();
//   i.next();
//   i.throw(new Error('出错了！'));
//   try {
//     i.throw(new Error('出错了！'));
//   } catch(e) {
//       console.log(e, 'out');
//   }


// var gen = function* gen(){
//     try {
//       yield console.log('a');
//     } catch (e) {
//       console.log(e);
//     }
//     yield console.log('b');
//     yield console.log('c');
//   }
  
//   var g = gen();
//   g.next() // a
//   g.throw('s') // b
//   g.next() // c

// function* g() {
//     yield 1;
//     console.log('throwing an exception');
//     throw new Error('generator broke!');
//     yield 2;
//     yield 3;
//   }
  
//   function log(generator) {
//     var v;
//     console.log('starting generator');
//     try {
//       v = generator.next();
//       console.log('第一次运行next方法', v);
//     } catch (err) {
//       console.log('捕捉错误', v);
//     }
//     try {
//       v = generator.next();
//       console.log('第二次运行next方法', v);
//     } catch (err) {
//       console.log('捕捉错误', v);
//     }
//     try {
//       v = generator.next();
//       console.log('第三次运行next方法', v);
//     } catch (err) {
//       console.log('捕捉错误', v);
//     }
//     console.log('caller done');
//   }
  
//   log(g());

// function* numbers () {
//     yield 1;
//     try {
//       yield 2;
//       yield 3;
//     } finally {
//       yield 4;
//       yield 5;
//     }
//     yield 6;
//   }
//   var g = numbers();
//   console.log(g.next()) // { value: 1, done: false }
//   console.log(g.next())
//   console.log(g.return(7))
//   console.log(g.next())
//   console.log(g.next())
   // { value: 2, done: false }
   // { value: 4, done: false }
   // { value: 5, done: false }
 // { value: 7, done: true }

//  const g = function* (x, y) {
//     let result = yield x + y;
//     return result;
//   };
  
//   const gen = g(1, 2);
//   console.log(gen.next()); // Object {value: 3, done: false}
  
// //   console.log(gen.next(1)); // Object {value: 1, done: true}
// //   gen.throw(new Error('出错了')); // Uncaught Error: 出错了

// console.log(gen.return(4));

// function* foo() {
//     yield 'a';
//     yield 'b';
//     return '10';
//   }

//   function* bar() {
//       yield 'x';
//       var value = yield* foo();
//       yield value;
//       yield 'y';
//   }

//   for(let o of bar()) {
//       console.log(o);
//   }

// function* genFuncWithReturn() {
//     yield 'a';
//     yield 'b';
//     return 'The result';
//   }
//   function* logReturned(genObj) {
//     let result = yield* genObj;
//     console.log(result);
//   }
  
//   console.log([...logReturned(genFuncWithReturn())])

//   function* iterTree(tree) {
//     if (Array.isArray(tree)) {
//       for(let i=0; i < tree.length; i++) {
//         yield* iterTree(tree[i]);
//       }
//     } else {
//       yield tree;
//     }
//   }
  
//   const tree = [ 'a', ['b', 'c'], ['d',[ 2, 4, 5], 'e'] ];
  
//   for(let x of iterTree(tree)) {
//     console.log(x);
//   }

// function* main() {
//     var result = yield request("http://some.url");
//     var resp = result;
//       console.log(resp);
//   }
  
//   function request(url) {
//     setTimeout(function(){
//       console.log(it.next(url));
//     }, 2000);
//   }
  
//   var it = main();
//   console.log(it.next());

/**
 * Symbol
 */
// const s1 = Symbol('foo');

// console.log(s1.toString());
// console.log(s1.description);

// const s2 = Symbol('bar');

// const obj = {
//   [s1]: 'hello',
//   [s2](arg) {
//     console.log('s2: ', arg);
//   }
// }

// console.log(obj[s1]);
// obj[s2](123);


// const log = {};

// log.levels = {
//   DEBUG: Symbol('debug'),
//   INFO: Symbol('info'),
//   WARN: Symbol('warn')
// };
// console.log(log.levels.DEBUG, 'debug message');
// console.log(log.levels.INFO, 'info message');
// let obj = {
//   [Symbol('my_key')]: 1,
//   enum: 2,
//   nonEnum: 3
// };

// console.log(Reflect.ownKeys(obj))

// const s1 = Symbol('foo');

// console.log(Symbol.for('foo'));
// console.log(Symbol.for('foo') === s1);

// const s2 = Symbol.for('bar');
// console.log(Symbol.keyFor(s1));
// console.log(Symbol.keyFor(s2));
// console.log(Array[Symbol.hasInstance]([1,3]));

// let arr1 = [1, 2];

// let arr2 = [3, 4];
// console.log(arr1[Symbol.isConcatSpreadable]);

// console.log(arr1.concat(arr2));
// arr2[Symbol.isConcatSpreadable] = false;
// console.log(arr1.concat(arr2));

class MyArray extends Array {
  static get [Symbol.species]() { return Array; }
}

const a = new MyArray();
const b = a.map(x => x);

b instanceof MyArray // false
b instanceof Array // true

console.log(b instanceof MyArray) // true
console.log(b instanceof Array) // true