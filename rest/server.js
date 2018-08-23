var express = require('express');
var app = express();
var fs = require('fs');

app.get('/listUsers', function(req, res) {
	fs.readFile(__dirname + '/' + 'user.json', 'utf-8', function(err, data) {
		console.log(data);
		res.end(data);
	})
});

var user = {
	user5: {
		name: '测试',
		password: 'xcjhsjhs',
		profession: 'sss',
		id: 5,
	}
}

app.get('/adduser', function(req, res) {
	fs.readFile(__dirname + '/' + 'user.json', 'utf-8', function(err, data) {
		data = JSON.parse(data);
		data['user5'] = user['user5'];
		console.log(data);
		fs.writeFile(__dirname + '/' + 'user.json', data, 'utf-8', function(errI) {
			if (errI) {
				console.log(errI);
			} else {
				res.end(JSON.stringify(data, null), 'utf-8');
			}
		})
	})
})
app.get('/:id', function(req, res) {
	fs.readFile(__dirname + '/' + 'user.json', 'utf-8', function(err, data) {
		data = JSON.parse(data);
		var user = data['user' + req.params.id];
		console.log(user);
		res.end(JSON.stringify(user));
	})
})

app.get('/delete/:id', function(req, res) {
	fs.readFile(__dirname + '/' + 'user.json', 'utf-8', function(err, data) {
		data = JSON.parse(data);
		delete data['user' + req.params.id];
		console.log(data);
		res.end(JSON.stringify(data));
	})
})
var server = app.listen(8081, function() {
	var host = server.address().address;
	var port = server.address().port;
	console.log('listened ', host, port);
});