// var obj = new Proxy({}, {
//     get: function (target, key, receiver) {
//       console.log(`getting ${key}!`);
//       return Reflect.get(target, key, receiver);
//     },
//     set: function (target, key, value, receiver) {
//       console.log(`setting ${key}!`);
//       return Reflect.set(target, key, value, receiver);
//     }
//   });

//   obj.count = 1;
//   ++obj.count;

//   console.log(obj.count);

// proxy
// const proxy = new Proxy({}, {
//     get: function() {
//         return 42;
//     }
// });

// console.log(proxy.time);

// reduce

// console.log(Reflect.has(Object, 'assign'));

// const proxy = new Proxy({}, {
//     set: function(target, name, value, receiver) {
//       var success = Reflect.set(target, name, value, receiver);
//       if (success) {
//         console.log('property ' + name + ' on ' + target + ' set to ' + value);
//       }
//       return success;
//     }
// });

// proxy.time = 10;

// async function f() {
//   throw new Error('出错了');
// }

// f().then(
//   v => console.log(v),
//   e => console.log(e)
// )

// function sleep(interval) {
//   return new Promise(resolve => {
//     setTimeout(resolve, interval);
//   })
// }

// // 用法
// async function one2FiveInAsync() {
//   for(let i = 1; i <= 5; i++) {
//     console.log(i);
//     await sleep(1000);
//   }
// }

// one2FiveInAsync();

// async function f() {
//   try {
//     await Promise.reject('出错了');
//   } catch(e) {
//     console.log(e);
//   }
//   return await Promise.resolve('123');
  
// }

// f()
// .then(v => console.log(v))
// .catch(e => console.log(e))
// 出错了