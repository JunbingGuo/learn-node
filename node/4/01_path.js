// const path = require('path');
// const { normalize } = require('path');

// console.log(normalize('/usr//local/bin'))
// console.log(normalize('/usr//local/../bin'))

// const {join} = require('path');

// console.log(join('/usr', 'local', 'bin/', 'test'))
// console.log(join('/usr', 'local/..', 'bin/', 'test'))
// console.log(join('/usr', 'local/..', '../bin', 'test'))

// 获取绝对路径
// const {resolve} = require('path');
// 获取当前的绝对路径
// console.log(resolve('./'));
// 获取根据经
// console.log(resolve('/'));

// const {basename, dirname, extname} = require('path');
// const filePath = '/usr/local/bin/no.txt';

// console.log(basename(filePath))
// console.log(basename(filePath, '.txt'))
// console.log(dirname(filePath))
// console.log(extname(filePath))

// const {parse, format} = require('path');
// const filePath = '/usr/local/bin/no.txt';

// const ret = parse(filePath);
// console.log(ret);
// ret.base = 'hahaha' + ret.ext;
// const fom = format(ret);
// console.log(fom);

// const {sep, delimiter, win32, posix} = require('path');

// const testPath = process.env.PATH;
// console.log('sep:', sep);

// console.log('win sep:', win32.sep);
// console.log('posix sep:', posix.sep);
// // console.log("PATH:", process.env.PATH);

// console.log('delimiter:', delimiter);
// console.log('win delimiter:', win32.delimiter);
// console.log('posix delimiter:', posix.delimiter);

const path = require('path');
const mod = require('./custom');

console.log(mod.testVar);

console.log('__dirname     '  , __dirname);
console.log('__filename    '  , __filename);
console.log('process.cwd() ', process.cwd());
console.log('./            ', path.resolve('./'))
console.log('../           ', path.resolve('../'))
