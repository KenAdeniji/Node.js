/*
	2017-02-03	https://www.airpair.com/javascript/node-js-tutorial
*/
var http = require('http');

http.createServer(function (request, response) {
	response.writeHead(200, {'Content-Type': 'text/html'});

	http.request({ hostname: 'example.com' }, function(res) {
		res.setEncoding('utf8');
		res.on('data', function(chunk) {
			response.write(chunk);
		});
		res.on('end', function() {
			response.end();
		});
	}).end();

}).listen(8088);
