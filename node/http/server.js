const http = require('http');
const chalk = require('chalk');
const path = require('path');
// const fs = require('fs');
// const promisify = require('util').promisify;
// const stat = promisify(fs.stat);
// const readdir = promisify(fs.readdir);
const route = require('./route');

const conf = require('./config');
const hostname = '127.0.0.1';
const port = 3000;


const server = http.createServer((req, res) => {
  
  const url = req.url;
  const filePath = path.join(conf.root, url);
  route(req, res, filePath);
  /* try {
    const stats = await stat(filePath);
    if (stats.isFile()) {
      res.statusCode = 200;
      res.setHeader('Content-type', 'text/plain');

      fs.createReadStream(filePath).pipe(res);
    } else if (stats.isDirectory()) {
      fs.readdir(filePath, (err, files) => {
        if (err) {
          res.statusCode = 401;
          res.end(err);
        } else {
          res.statusCode = 200;
          res.setHeader('Content-type', 'text/plain');

          res.end(files.join(','));
        }
      })
    }
  } catch(e) {
    res.statusCode = 404;
    res.setHeader('Content-type', 'text/html');
    res.end(`${filePath} id not a directory or file`);
  } */
  /* fs.stat(filePath, (err, stats) => {
    if (err) {
      res.statusCode = 404;
      res.setHeader('Content-type', 'text/html');
      res.end(`${filePath} id not a directory or file`);
      return;
    }
    if (stats.isFile()) {
      res.statusCode = 200;
      res.setHeader('Content-type', 'text/plain');

      fs.createReadStream(filePath).pipe(res);
    } else if (stats.isDirectory()) {
      fs.readdir(filePath, (err, files) => {
        if (err) {
          res.statusCode = 401;
          res.end(err);
        } else {
          res.statusCode = 200;
          res.setHeader('Content-type', 'text/plain');

          res.end(files.join(','));
        }
      })
    }
  }) */

  // res.statusCode = 200;
  // res.setHeader('Content-type', 'text/html');
  // res.write('<html>')
  // res.write('<body>')
  // res.write('hello world');
  // res.write('</body>')
  // res.write('</html>')
  // res.end('hello world');
  // res.end(filePath);
});


server.listen(port, hostname, () => {
  console.log(chalk.green(`server running at http://${hostname}:${port}/`));
});