/*
	2017-02-04	https://www.airpair.com/javascript/node-js-tutorial
*/
var dns = require('dns')
var http = require('http');

var domainName = 'www.example.com';

http.createServer(function (request, response) {
	response.writeHead(200, {'Content-Type': 'text/html'});

	dns.resolve4(domainName, function (err, addresses) {
		if (err) throw err;

		response.end
		(
			'domain name: ' + domainName + '<br>addresses: ' + JSON.stringify(addresses)
		);
	});

}).listen(8089);
