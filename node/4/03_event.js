const EventEmitter = require('events');

class CustomEvent extends EventEmitter {

}

const ce = new CustomEvent();

// ce.on('test', () => {
//   console.log('this is a test');
// });

// setInterval(() => {
//   ce.emit('test');
// }, 1000);

// ce.on('error', (err, time) => {
//   console.log(err);
//   console.log(time);
// });

// ce.emit('error', new Error('错了'), Date.now())

// ce.once('test', () => {
//   console.log('test');
// });

// ce.emit('test')
// ce.emit('test')

function fn1 () {
  console.log('fn1');
}

function fn2 () {
  console.log('fn2');
}

ce.on('test', fn1)
ce.on('test', fn2)

ce.emit('test')
ce.emit('test');
// ce.removeListener('test', fn2);
ce.removeAllListeners('test');
ce.emit('test')