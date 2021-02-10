//http モジュールを読み込み
const http = require('http');

//サーバーを作成
const app = http.createServer(function(require, response){


    console.log('ok');

    response.write('Hello World!!');
    response.end();
})

app.listen(3000, '127.0.0.1')

console.log('node server listen.');