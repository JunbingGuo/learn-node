const fs = require('fs');

const child_process = require('child_process');

// for(var i = 0; i < 3; i++) {
// 	var workProcess = child_process.exec('node support.js ' + i, function(error, stdout, stderr) {
// 		if (error) {
// 			console.log(error.stack);
// 			console.log('Error code: ' + error.signal);
// 			console.log('Signal received: ' + error.signal);
// 		}
// 		console.log('stdout: ' + stdout);
// 		console.log('sdterr: ' + stderr);
// 	})
// 	workProcess.on('exit', function(code) {
// 		console.log('子进程已退出，退出码 ' + code);
// 	})
// }

// for (let i = 0; i < 3; i++) {
// 	var workProcess = child_process.spawn('node', ['support.js', i]);
// 	workProcess.stdout.on('data', function(data) {
// 		console.log(i + 'stdout: ' + data);
// 	})
// 	workProcess.stderr.on('data', function(data) {
// 		console.log(i + 'stderr: ' + data);
// 	})
// 	workProcess.on('close', function(code) {
// 		console.log(i + '子进程已退出，退出码： ' + code);
// 	})
// }

for(let i = 0; i < 3; i++) {
	var worker_process = child_process.fork('support.js', [i]);

	worker_process.on('close', function(code) {
		console.log(i + ' 子进程已退出，退出码：' + code);
	})
}