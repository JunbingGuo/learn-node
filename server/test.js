var http = require('http');
var url = require('url');
var util = require('util');
var querystring = require('querystring');

// http.createServer(function(req, res) {
//   res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
//   res.end(util.inspect(url.parse(req.url, true)));
// }).listen(3000);
// get请求
// http.createServer(function(req, res) {
//   res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
//   var params = url.parse(req.url, true).query;
//   res.write('网站名：' + params.name);
//   res.write('\n');
//   res.write('网站url:' + params.url);
//   res.end();
// }).listen(3000);
// post请求
var postHtml = `<html>
<head>
  <meta charset="utf-8">
  <title>post请求实例</title>
</head>
<body>
  <form method="post">
    网站名：<input name="name"><br>
    网站：<input name="url"><br>
    <input type="submit">
  </form>
</body>
</html>`;
http.createServer(function(req, res) {
  var body = '';
  req.on('data', function(chunk) {
    body += chunk;
  });
  req.on('end', function() {
    body = querystring.parse(body);
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    if (body.name && body.url) {
      res.write('网站名：'+ body.name);
      res.write('<br>');
      res.write('网站 URL：' + body.url);
    } else {
      res.write(postHtml);
    }
    body = '';
    res.end();
  });
}).listen(3000);
console.info('http server listened 3000');
