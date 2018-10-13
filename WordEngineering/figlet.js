 /*
	2017-01-21	figlet.js	Created.	http://eloquentjavascript.net/20_node.html
	2017-01-21	npm install figlet
	2017-01-21	https://www.npmjs.com/package/figlet
*/
var http = require("http");
var figlet = require("figlet");

http.createServer(function (request, response) {

	// Send the HTTP header 
	// HTTP Status: 200 : OK
	// Content Type: text/plain
	response.writeHead(200, {'Content-Type': 'text/plain'});

	figlet.text("Hello world!", function(error, data) {
		if (error)
			console.error(error);
		else
		{	
			response.write(data);
			response.end();
		}	
	});	
}).listen(8083);
