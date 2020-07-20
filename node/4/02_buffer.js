// const buf = Buffer.alloc(10);
// const buf = Buffer.alloc(10, 1);
// console.log(buf);

// console.log(Buffer.allocUnsafe(10))
// console.log(Buffer.allocUnsafe(10, 1))

// console.log(Buffer.from([1,2, 3]));
// console.log(Buffer.from('testaa'));
// console.log(Buffer.from('testaa', 'base64'));

// console.log(Buffer.byteLength('test'));

// console.log(Buffer.byteLength('测试'));
// console.log(Buffer.byteLength('你好'));

// console.log(Buffer.isBuffer('ss'))
// console.log(Buffer.isBuffer(Buffer.from([1, 3, 4])))

// const buf1 = Buffer.from('hello ');
// const buf2 = Buffer.from('abc');

// const buf3 = Buffer.concat([buf1, buf2]);
// console.log(buf3.toString());

// console.log(buf3.length);

// const buf = Buffer.alloc(10);
// buf[0] = 2;
// console.log(buf.length);

// const buf = Buffer.allocUnsafe(10);
// console.log(buf);
// buf.fill(10, 0, 2);
// console.log(buf);

// const b1 = Buffer.from('test');
// const b2 = Buffer.from('test');
// const b3 = Buffer.from('test1');

// console.log(b1.equals(b2))
// console.log(b1.equals(b3))

// console.log(b1.indexOf('es'))
// console.log(b1.indexOf('es1'))

const StringDecoder = require('string_decoder').StringDecoder;
const decoder = new StringDecoder('utf-8');

const buf = Buffer.from('中文字符串！');

for (let i = 0; i < buf.length; i += 5) {
  const b = Buffer.allocUnsafe(5);
  buf.copy(b, 0, i);

  console.log(b.toString());
}

for (let i = 0; i < buf.length; i += 5) {
  const b = Buffer.allocUnsafe(5);
  buf.copy(b, 0, i);

  console.log(decoder.write(b));
}