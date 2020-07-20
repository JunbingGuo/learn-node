module.exports.test = 'A';

const modB = require('./05B');

console.log('modA: ', modB.test);

module.exports.test = 'AA';