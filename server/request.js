const url = require('url');
const myUrl = url.parse('https://user:pass@sub.host.com:8080/p/a/t/h?query=string#hash');

console.log(myUrl);