// 缓冲区
// const buf = Buffer.from('runoob', 'ascii');
// console.log(buf.toString('hex'));
// console.log(buf.toString('base64'));

// 创建buffer
// const buf1 = Buffer.alloc(10);
// const buf2 = Buffer.alloc(10, 1);
// const buf3 = Buffer.allocUnsafe(10);
// const buf4 = Buffer.from([1, 2, 3]);
// const buf5 = Buffer.from('abc');
// 写入-读取
// const buf = Buffer.alloc(12);
// const len = buf.write('ceshi test');
// console.log(len);
// console.log(buf.toString('utf-8', 0, 10));
// json
// const buf = Buffer.from([1,2,3,4,5]);
// console.log(buf.toJSON());
// console.log(buf.toString('hex'));
// const json = JSON.stringify(buf);
// console.log(json);
// const copy = JSON.parse(json, (key, value) => {
//   return value && value.type === 'Buffer' ? Buffer.from(value.data) : value;
// });
// console.log(copy);
// const buf1 = Buffer.from('ceshi1');
// const buf2 = Buffer.from('ceshi3');
// const buf3 = Buffer.concat([buf1, buf2]);
// console.log(buf3.toString('utf-8'));
// console.log(buf1.compare(buf3));
const buf1 = Buffer.from('abcdefghijkl');
const buf2 = Buffer.from('TEST');
const buf3 = Buffer.from('ZZZZZZZZZZZZZZZZZ');
const buf4 = buf3.slice(0, 2);
console.log(buf4.toString());
// buf2.copy(buf1, 2);
buf3.copy(buf1, 2);
console.log(buf1.toString());
console.log(buf1.length);