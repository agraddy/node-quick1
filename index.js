var fs = require('fs');
var http = require('http');

var server = http.createServer(function(req, res) {
	var view;

	res.writeHead(200, {'Content-type': 'text/html'});
	view = fs.createReadStream('views/index.htm');
	view.pipe(res);
	//res.end('Hello world.');
});

server.listen(80);

console.log('Server started.');
