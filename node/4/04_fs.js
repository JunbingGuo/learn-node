const fs = require('fs')


// fs.readFile('./04_fs.js', 'utf-8', (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('异步');
//   }
// });

// const data = fs.readFileSync('04_fs.js', 'utf-8');
// console.log(data);

// fs.writeFile('./text', 'this is a test', {
//   encoding: 'utf-8',
// }, err => {
//   if (err) throw err;
//   console.log('done');
// });

// fs.writeFile('./text', 'this is a test aaa', 'utf8', err => {
//   if (err) throw err;
//   console.log('done');
// });

// const content = Buffer.from('this is a test.');
// fs.writeFile('./text', content, err => {
//   if (err) throw err;
//   console.log('done');
// });

// fs.stat('04_fs11.js', (err, stats) => {
//   if (err) {
//     console.log('文件不存在');
//     return;
//   };

//   console.log(stats.isFile())
//   console.log(stats.isDirectory());
//   console.log(stats);
// })

// fs.rename('./text', 'test.txt', err => {
//   if (err) throw err;
//   console.log('done');
// })

// fs.unlink('./test.txt', err => {
//   if (err) throw err;
//   console.log('done');
// })

// fs.readdir('./', (err, files) => {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log(files);
//   }
// })

// fs.mkdir('test', err => {
//   if (err) {
//     console.log(err);
//   }
// })

// fs.rmdir('./test', err => {
//   if (err) console.log(err);
// });

// fs.watch('./', {
//   recursive: true,
// }, (eventType, filename) => {
//   console.log(eventType, filename);
// })

// const rs = fs.createReadStream('./04_fs.js');

// rs.pipe(process.stdout);


// const ws = fs.createWriteStream('./test.text');

// const tid = setInterval(() => {
//   const num = parseInt(Math.random() * 10);
//   console.log(num);
//   if (num < 7) {
//     ws.write(num + '')
//   } else {
//     clearInterval(tid);
//     ws.end();
//   }
// }, 200);

// ws.on('finish', (err) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log('done');
// });

const promisify = require('util').promisify;

const read = promisify(fs.readFile);

// read('./04_fs.js').then(data => {
//   console.log(data.toString());
// }).catch(err => {
//   console.log(err);
// });

async function test () {
  try {
    const content = await read('./04_fs.js');

    console.log(content.toString())
  } catch (err) {
    console.log(err);
  }
  
}
test();