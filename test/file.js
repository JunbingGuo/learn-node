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
// console.log('准备写入文件');
// fs.writeFile('input.txt', '通过fs.writeFile写入的内容', function(err) {
//   if (err) {
//     return console.error(err);
//   }
//   console.log('数据写入成功');
//   console.log('-----------分割线-------------');
//   console.log('读取数据');
//   fs.readFile('input.txt', function(err, data) {
//     if (err) {
//       return console.error(err);
//     }
//     console.log('异步读取文件数据：' + data.toString());
//   });
// })
// 读取文件测试
// var buf = new Buffer(1024);

// console.log('准备打开已经存在的文件');
// fs.open('input.txt', 'r+', function(err, fd) {
//   if (err) {
//     return console.error(err);
//   }
//   console.log('打开文件成功,准备读取文件');
//   fs.ftruncate(fd, 10, function(err) {
//     if (err) {
//       return console.error(err);
//     }
//     console.log('文件截取成功,读取相同的文件');
//     fs.read(fd, buf, 0, buf.length, 0, function(err, bytes) {
//       if (err) {
//         return console.error(err);
//       }
//       if (bytes > 0) {
//         console.log(buf.slice(0, bytes).toString());
//       }
//       fs.close(fd, function(err) {
//         if (err) {
//           console.error(err);
//         }
//         console.log('关闭成功');
//       })
//     });
//   });
// //   fs.read(fd, buf, 0, buf.length, 0, function(err, bytes) {
// //     if (err) {
// //       return console.log(err);
// //     }
// //     console.log(bytes + '个字节被读取');
// //     if (bytes > 0) {
// //       console.log(buf.slice(0, bytes).toString());
// //     }
// //   });
// //   fs.close(fd, function(err) {
// //     if (err) {
// //       return console.error(err);
// //     }
// //     console.log('文件关闭成功');
// //   })
// });

// console.log('准备删除文件');
// fs.unlink('zip.txt', function(err) {
//   if (err) {
//     return console.log(err);
//   }
//   console.log('文件删除成功');
// });

// mkdir只能创建一级，先父级目录，后子级目录
// console.log('创建目录');
// fs.mkdir('./tmp/out', function(err) {
//   if (err) {
//     return console.error(err);
//   }
//   console.log('创建目录成功');
// })
// fs.writeFile('./tmp/test/input.txt', 'this is test', function(err) {
//   if (err) {
//     return console.error(err);
//   }
//   console.log('创建成功');
//   fs.readFile('./tmp/test/input.txt', function(err, data) {
//     if (err) {
//       return console.error(err);
//     }
//     console.log('创建成功：' + data.toString());
//   })
// })
// console.log('查看目录');
// fs.readdir('./tmp', function(err, file) {
//   if(err) {
//     return console.error(err);
//   }
//   file.forEach(function(f) {
//     console.log(f);
//   });
// })
// 只能删除空文件夹、目录
console.log('准备删除目录');
fs.rmdir('./tmp/out', function(err) {
  if (err) {
    console.error(err);
  }
  fs.readdir('./tmp', function(err, files) {
    if (err) {
      return console.error(err);
    }
    files.forEach(function(file){
      console.log(file);
    })
  });
})