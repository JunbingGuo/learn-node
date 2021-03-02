// let p = function(name) {
//   return new Promise(function(resolve, reject){
//     if (name === 'hello') {
//       resolve(name);
//     } else {
//       reject(new Error('failed'));
//     }
//   });
// }

// p('hellos').then((res) => {
//   console.log(res);
// }).catch((err) => {
//   console.log(err);
// });

// (async function() {
//   const t = await p('hello');
//   console.log(t);
// })();

function* gen() {
  console.log('a');
  yield;
  console.log('b');
}
const test = gen();
test.next();
test.next();