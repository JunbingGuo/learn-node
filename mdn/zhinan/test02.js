// Control_flow_and_error_handling
// Reference/Statements/try...catch
// try catch
// Promise
// var ss = 1;
// switch(ss) {
//   case 0:
//     console.log(0);
//   case 1:
//     console.log(1);
//     break;
//   case 2:
//     console.log(2);
//     break;
//   default:
//     console.log('default');
//     break;
// }

// function imgLoad(url) {
//   return new Promise(function(resolve, reject) {
//     var request = new XMLHttpRequest();
//     request.open('GET', url);
//     request.responseType = 'blob';
//     request.onload = function() {
//       if (request.status === 200) {
//         resolve(request.response);
//       } else {
//         reject(Error('Image didn\'t load successfully; error code:' 
//                      + request.statusText));
//       }
//     };
//     request.onerror = function() {
//       reject(Error('There was a network error.'));
//     };
//     request.send();
//   });
// }

// try {
//   console.log(a)
// } finally {
//   console.log('finally');
// }

// let myTest = new Promise(function(resolve, reject) {
//   setTimeout(function() {
//     resolve('成功');
//   }, 300)
// });

// myTest.then((msg) => {
//   console.log('resolve:', msg);
// })

var promiseCount = 0;
function testPromise() {
  let thisCount = ++promiseCount;

  let app = document.getElementById('app');
  app.insertAdjacentHTML('beforeend', thisCount + 
  ') 开始 (<small>同步代码开始</small>) <br/>');

  let p1 = new Promise(
    (resolve, reject) => {
      app.insertAdjacentHTML('beforeend', thisCount + 
      ') Promise 开始(<small>异步代码开始</small>)<br/>');
      window.setTimeout(function() {
        resolve(thisCount);
      }, Math.random() * 2000 + 1000);
    }
  );

  p1.then((val) => {
    app.insertAdjacentHTML('beforeend', val +
    ') Promise已填充完毕 (<small>异步代码结束</smalll>)<br/>');
  })
  .catch((reason) => {
    console.log('处理失败的 promise (' + reason + ')');
  });

  app.insertAdjacentHTML('beforeend', thisCount + 
  ') Promise made (<small>同步代码结束</small>)<br/>');
}
testPromise()
const btn = document.getElementById('btn');

btn.addEventListener('click', testPromise)

