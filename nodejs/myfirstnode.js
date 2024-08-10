var http = require('http');
let port = 8080;

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type':'text/html'});
    res.end('Hello World!');
}).listen(port);
console.log("listenining to port..... "+port);