// const {env} = process;

// console.log(env);

// console.log(process.cwd())

// setImmediate同步都结束后才执行. nextTick > setTimeout > setImmediate
// setImmediate(() => {
//   console.log('setImmediate');
// });
// setTimeout(() => {
//   console.log('setTimeout')
// }, 0);
// process.nextTick(() => {
//   console.log('nextTick');
// })

function test1() {
  const a = parseInt(Math.random() * 10);
  const b = parseInt(Math.random() * 10);

  const c = test2(a, b);
}

function test2(a, b) {
  if (a > b) {
    a += a * 2;
  } else {
    b -= a;
  }
  return a + b;
}

test1();