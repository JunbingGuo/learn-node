// let obj = {a: 1, b: 2}

// console.log(encodeURIComponent(JSON.stringify(obj)))

// function *show() {
//   console.log('a');
//   // yield;
//   let a =yield;
//   console.log('b');
//   console.log(a);
// }

// let genObj = show();

// // console.log(genObj);
// genObj.next(12)
// genObj.next(5)


function *show() {
  console.log('a');
  yield 12;
  console.log('b');
}

let genObja = show();

console.log(genObja.next())
console.log(genObja.next())