// Loops_and_iteration

// for(;;) {
//   console.log('test');
// }

// var n = 0;
// var x = 0;
// while (n < 3) {
//   n++;
//   x += n;
//   console.log(x, n)
// }

// var num = 0;
// outPoint:
// for (var i = 0 ; i < 10 ; i++){
//   for (var j = 0 ; j < 10 ; j++){
//     if( i == 5 && j == 5 ){
//       break outPoint; // 在 i = 5，j = 5 时，跳出所有循环，
//                       // 返回到整个 outPoint 下方，继续执行
//     }
//     num++;
//   }
// }

// alert(num); // 输出 55
// var i = 0;
// var j = 10;
// checkiandj:
//   while (i < 4) {
//     console.log(i);
//     i += 1;
//     checkj:
//       while (j > 4) {
//         console.log(j);
//         j -= 1;
//         if ((j % 2) == 0) {
//           continue checkj;
//         }
//         console.log(j + ' 是奇数。');
//       }
//       console.log('i = ' + i);
//       console.log('j = ' + j);
//   }

// let arr = [3, 5, 7];
// arr.foo = "hello";

// for (let i in arr) {
//    console.log(i); // 输出 "0", "1", "2", "foo"
// }

// for (let i of arr) {
//    console.log(i); // 输出 "3", "5", "7"
// }
// let base = Date.now();
// const p1 = new Promise(function (resolve, reject) {
//    setTimeout(() => {
//       reject(new Error('fail'));
//       console.log('p1:',new Date(), Date.now() - base);
//    }, 3000)
//  })
 
//  const p2 = new Promise(function (resolve, reject) {
//    setTimeout(() => {
//       resolve(p1);
//       console.log('p2:', new Date(), Date.now() - base);
//    }, 1000)
//  })
 
//  console.log('start:', new Date(), Date.now() - base)
//  p2
//    .then(result => console.log(result))
//    .catch(error => {
//       console.log('end:', new Date(), Date.now() - base)
//       console.log(error, Date.now() - base);
//    })

// const p1 = new Promise((resolve, reject) => {
//    resolve('hello');
//  })
//  .then(result => result)
//  .catch(e => e);
 
//  const p2 = new Promise((resolve, reject) => {
//    throw new Error('报错了');
//  })
//  .then(result => result);
// //  .catch(e => e);
 
//  Promise.all([p1, p2])
//  .then(result => console.log(result))
//  .catch(e => console.log(e));

// const p = Promise.race([
//   new Promise(function(resolve, reject) {
//     setTimeout(() => resolve('end'), 4000);
//   }),
//   new Promise(function(resolve, reject) {
//     setTimeout(() => reject(new Error('reject timeout')), 5000)
//   })
// ]);

// p.then(console.log)
// .catch(console.log);

// const resolved = Promise.resolve(42);
// const rejected = Promise.reject(-1);

// const allSettledPromise = Promise.allSettled([resolved, rejected]);

// allSettledPromise.then(function (results) {
//   console.log(results);
// });

// const p1 = Promise.allSettled([
//   new Promise(function(resolve, reject) {
//     setTimeout(() => resolve('end'), 4000);
//   }),
//   new Promise(function(resolve, reject) {
//     setTimeout(() => reject(new Error('reject timeout')), 5000)
//   })
// ]);

// p1.then(console.log);
// const resolvedNum = Promise.resolve(42);
// const resolved = Promise.resolve({
//   status: 200,
//   data: [123, 456]
// });

// resolved.then(console.log);

// const test = Promise.resolve(resolvedNum);
// console.log(typeof test);
// test.then(console.log)

// let thenable = {
//   then: function(resolve, reject) {
//     resolve(42);
//   }
// };

// let p1 = Promise.resolve(thenable);
// p1.then(function(value) {
//   console.log(value);  // 42
// });

// for (let i = 0; i < 100; i++) {
//   if (i % 2 === 0) {
//     const aa = i * 10000 * 10000;
//     console.log(aa, Date.now());
//   }
// }
// console.log('a');
const getData = () =>new Promise(resolve => setTimeout(() => resolve("data"), 1000))

// async function test() {
//   const data = await getData()
//   console.log('data: ', data);
//   const data2 = await getData()
//   console.log('data2: ', data2);
//   return'success'
// }

// // 这样的一个函数 应该再1秒后打印data 再过一秒打印data2 最后打印success
// test().then(res =>console.log(res))

