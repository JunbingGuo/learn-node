// var obj = new Proxy({}, {
//   get: function(target, propKey, receiver) {
//     console.log(`getting: ${propKey}`);
//     return Reflect.get(target, propKey, receiver);
//   },
//   set: function(target, propKey, value, receiver) {
//     console.log(`setting ${propKey}, ${value}`);
//     return Reflect.set(target, propKey, value, receiver);
//   }
// });

// obj.count = 1;
// console.log(++obj.count);
// console.log(obj.count++);

// proxy
// const proxy = new Proxy({}, {
//   get: function(target, propKey) {
//     console.log(propKey);
//     return 42;
//   }
// })

// console.log(proxy.time);

// var target = {
//   a: 'a',
// };
// var handler = {};
// var proxy = new Proxy(target, handler);
// console.log(proxy);
// proxy.a = 'b';
// console.log(target.a);
// var object = { proxy: new Proxy(target, handler) };
// object.proxy.a = 'b';
// console.log(object.proxy);
// console.log(target.a);

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

var handler = {
  get: function(target, name) {
    if (name === 'prototype') {
      return Object.prototype;
    }
    return 'Hello, ' + name;
  },

  apply: function(target, thisBinding, args) {
    console.log(thisBinding);
    console.log(args);
    return args[0];
  },

  construct: function(target, args) {
    return {value: args[1]};
  }
}

var fproxy = new Proxy(function(x, y) {
  return x + y;
}, handler);

console.log(fproxy(1, 2));
console.log(new fproxy(1, 2));

console.log(fproxy.prototype === Object.prototype);
console.log(fproxy.foo);