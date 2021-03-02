module.exports.test = 'B';

const modA = require('./05A');

console.log('modB: ', modA.test);

module.exports.test = 'BB';