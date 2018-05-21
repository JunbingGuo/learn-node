const fs = require('fs');
// 异步
// fs.readFile('input.txt', function(err, data) {
//   if (err) {
//     return console.error(err);
//   }
//   console.log('异步读取: ' + data.toString());
// });
// // 同步
// const data = fs.readFileSync('input.txt');
// console.log('同步读取：' + data);
// console.log('程序执行完毕');
// 
// console.log('准备打开文件');
// fs.open('input.txt', 'r+', function(err, fd) {
//   if (err) {
//     return console.error(err);
//   }
//   console.log('文件打开成功');
//   console.log(fd);
// });
// fs.stat('input.txt', function(err, stats) {
//   console.log(stats);
//   console.log(stats.isFile());
//   console.log(stats.isDirectory());
// });
// 写入文件测试
console.log('准备写入文件');
fs.writeFile('input.txt', '通过fs.writeFile写入的内容', function(err) {
  if (err) {
    return console.error(err);
  }
  console.log('数据写入成功');
  console.log('-----------分割线-------------');
  console.log('读取数据');
  fs.readFile('input.txt', function(err, data) {
    if (err) {
      return console.error(err);
    }
    console.log('异步读取文件数据：' + data.toString());
  });
})