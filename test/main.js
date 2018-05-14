var fs = require('fs');
// 阻塞式编程
var data = fs.readFileSync('input.txt');

console.log(data.toString());
console.log('end');
// 非阻塞式
fs.readFile('input.txt', function(err, data) {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data.toString());
});
console.log('end async');