const fs = require('fs');
const path = require('path');
const Handlebars =  require('handlebars');
const promisify = require('util').promisify;
const stat = promisify(fs.stat);
const readdir = promisify(fs.readdir);
const config = require('./config');
const mime = require('./a/mime');

const tplPath = path.join(__dirname, './dir.tpl')
const source = fs.readFileSync(tplPath);

const template = Handlebars.compile(source.toString());


module.exports = async function(req, res, filePath) {
  try {
    const stats = await stat(filePath);
    if (stats.isFile()) {
      const contentType = mime(filePath); // 获取文件类型
      res.statusCode = 200;
      // res.setHeader('Content-type', 'text/plain');
      res.setHeader('Content-type', contentType);

      fs.createReadStream(filePath).pipe(res);
    } else if (stats.isDirectory()) {
      // 未处理try catch
      const files = await readdir(filePath);
      res.statusCode = 200;
      // res.setHeader('Content-type', 'text/plain');
      res.setHeader('Content-type', 'text/html');
      console.log(filePath);
      const dir = path.relative(config.root, filePath);
      const data = {
        title: path.basename(filePath),
        dir: dir ? `/${dir}` : '',
        files: files.map(file => {
          return {
            file,
            icon: mime(file)
          }
        }),
      }
      res.end(template(data));
      // res.end(files.join(','));
      // fs.readdir(filePath, (err, files) => {
      //   if (err) {
      //     res.statusCode = 401;
      //     res.end(err);
      //   } else {
      //     res.statusCode = 200;
      //     res.setHeader('Content-type', 'text/plain');

      //     res.end(files.join(','));
      //   }
      // })
    }
  } catch(e) {
    console.log(e);
    res.statusCode = 404;
    res.setHeader('Content-type', 'text/html');
    res.end(`${filePath} id not a directory or file\n ${e.toString()}`);
  }
}