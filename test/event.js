// 发布订阅,事件循环
// event emit 是阻塞事件
var event = require('events');
var eventEmitter = new event.EventEmitter();

// var connectHandle = function connected() {
//   console.log('链接成功');
//   eventEmitter.emit('data_received');
// }
// eventEmitter.on('connection', connectHandle);
// eventEmitter.on('data_received', function() {
//   console.log('数据接收成功');
// });

// eventEmitter.emit('connection');
// console.log('程序执行完毕');
// EventEmitter对象
var listener1 = function listener1() {
  console.log('监听器 listener1 执行');
}
var listener2 = function listener2() {
  console.log('监听器 listener2 执行');
}
var listener3 = function listener3() {
  console.log('监听器 listener3 执行');
}
eventEmitter.addListener('connection', listener1);
eventEmitter.on('connection', listener2);
eventEmitter.on('connection', listener3);
var eventCount = event.EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(eventCount + '个监听器监听链接事件');

eventEmitter.emit('connection');
console.log(eventEmitter.listeners('connection'));
eventEmitter.removeListener('connection', listener2);
console.log('listener2 被移除');
eventEmitter.emit('connection');

console.log(event.EventEmitter.listenerCount(eventEmitter, 'connection') + '个监听');