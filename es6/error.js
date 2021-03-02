// var err = new Error('出错了')
// console.log(err.message);

// function throwit() {
//   // throw new Error('test');
//   // throw new Error('x 必须为正数');
//   throw 42;
// }

// function catchit() {
//   try {
//     throwit()
//   } catch(e) {
//     console.log(e.name)
//     console.log(e.message)
//     console.log(e.stack);
//   }
// }
// catchit()
// try {
//   // var 1a;
//   // console.log 'hello')
//   // console.log(a)
//   // console.log() = 1
// } catch(e) {
//   console.log(e.name)
//   console.log(e.message)
//   console.log(e.stack);
// }

// new Array(-1)

// var obj = {}
// obj.test.hh
// decodeURI('%2')

// var err = new RangeError('出错了，变量超出有效范围！');
// console.log(err.message)
// console.log(err.name)
// console.log(err.stack)


// try {
//   throw 42;
// } catch(e) {
//   console.log(e)
// }

// try{
//   console.log(aa);
// } catch(e) {
//   console.log(e);
// } finally {
//   console.log('finaly');
// }

// console.log('end');
// function idle(x) {
//   try {
//     console.log(x);
//     return 'result';
//   } finally {
//     console.log('FINALLY');
//   }
// }

// var result = idle('hello');
// console.log(result);

// function f() {
//   try {
//     console.log(0);
//     throw 'bug';
//   } catch(e) {
//     console.log(1);
//     return true; // 这句原本会延迟到 finally 代码块结束再执行
//     console.log(2); // 不会运行
//   } finally {
//     console.log(3);
//     return false; // 这句会覆盖掉前面那句 return
//     console.log(4); // 不会运行
//   }

//   console.log(5); // 不会运行
// }

// var result = f();
// console.log(result);

function f() {
  try {
    throw '出错了！';
  } catch(e) {
    console.log('捕捉到内部错误');
    throw e; // 这句原本会等到finally结束再执行
  } finally {
    // return false; // 直接返回
    throw '新错误';
  }
}

try {
  var result = f();
  console.log(result);
} catch(e) {
  console.log(e);
  // 此处不会执行
  console.log('caught outer "bogus"');
}