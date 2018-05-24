const express = require('express');
const app = express();

app.get('/', function(req, res) {
	console.log('主页get请求');
	res.send('Hello GET');
});

app.post('/', function(req, res) {
	console.log('主页post请求');
	res.send('Hello POST');
});

app.get('/del_user', function(req, res) {
	console.log('/del_user响应 DELETE 请求');
	res.send('删除页面');
})

app.get('/list_user', function(req, res) {
	console.log('/list_user Get请求');
	res.send('用户列表页面');
});

app.get('/ab*cd', function(req, res) {
	console.log('/ab*cd Get请求');
	res.send('正则匹配');
});
var server = app.listen(8081, function() {
	var host = server.address().address;
	var port = server.address().port;

	console.log('应用实例,访问地址为http://127.0.0.1', host, port);
})