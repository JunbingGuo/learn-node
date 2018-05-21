// console.log(__filename);
// console.log(__dirname);

// console.time('test');
// setTimeout(function() {
//   console.timeEnd('test');
// }, 1000);

// process.on('beforeExit', function() {
//   console.log('即将结束');
// })
// process.on('exit', function(code) {
//   console.log('退出码为：' + code);
// });
// console.log('程序执行结束');
// 
process.stdout.write('hello world' + '\n');

process.argv.forEach(function(val, index) {
  console.log(index + ':' + val);
});

console.log(process.execPath);
console.log(process.platform);
console.log(process.arch);
console.log(process.memoryUsage());