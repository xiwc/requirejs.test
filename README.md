# requirejs.test
RequireJS test.

npm install requirejs --save

npm install browser-sync --save-dev

安装gulp
编写build/test/serve脚本

### 工程代码合并压缩优化
$ `node node_modules/requirejs/bin/r.js -o build.js`

$ `node node_modules/requirejs/bin/r.js -o cssIn=css/app.css out=app-build.css`