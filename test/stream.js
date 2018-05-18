// 流
// 读取流
const fs = require('fs');
// let data = '';
// const reader = fs.createReadStream('input.txt');
// reader.setEncoding('UTF8');
// reader.on('data', function(chunk) {
//   data += chunk;
// });
// reader.on('end', function() {
//   console.log('读取完成:', data);
// });
// reader.on('error', function(err) {
//   console.log(err.stack);
// });
// console.log('读取结束');
// 写入流
// const dataWrite = '第一个写入文件，作为测试使用,test file';
// const writer = fs.createWriteStream('output.txt');
// writer.write(dataWrite, 'UTF8');
// writer.end();
// writer.on('finish', function() {
//   console.log('写入结束 finish');
// });
// writer.on('error', function(err) {
//   console.log(err.stack);
// });
// console.log('程序结束');
// 管道流 pipe
// const readerStream = fs.createReadStream('input.txt');
// const writeStreram = fs.createWriteStream('output.txt');
// readerStream.pipe(writeStreram);
// console.log('end');
// 链式流
const zlib = require('zlib');
// fs.createReadStream('input.txt')
//   .pipe(zlib.createGzip())
//   .pipe(fs.createWriteStream('input.txt.gz'));
// console.log('压缩完成');
fs.createReadStream('input.txt.gz')
  .pipe(zlib.createGunzip())
  .pipe(fs.createWriteStream('zip.txt'));
console.log('解压完成');