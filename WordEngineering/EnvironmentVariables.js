/*
	2017-01-22	https://books.google.com/books?id=RyEHBAAAQBAJ&pg=PA267&lpg=PA267&dq=node.js+book&source=bl&ots=DRZQIPwODU&sig=_4tR5OQRFLUYz2LXHJ0WSU2mb50&hl=en&sa=X&ved=0ahUKEwixmbrr0NfRAhXEjVQKHZ3YBCk4RhDoAQhEMAY#v=onepage&q=node.js%20book&f=false		
*/	
var http = require("http");

var WordEngineering = require("../WordEngineering/WordEngineering.js");

http.createServer(function (request, response) {

	// Send the HTTP header 
	// HTTP Status: 200 : OK
	// Content Type: text/plain
	response.writeHead(200, {'Content-Type': 'text/html'});
   
	WordEngineering.CascadingStyleSheetCSS.insertFile(request, response, "./WordEngineering.css");
   
	var tableStub = "<table border='1'>";
	
	for (var key in process.env) {
		tableStub += WordEngineering.HTMLTable.buildRow(key, process.env[key]);
	}
	
	tableStub += "</table>";

	response.end(tableStub);
}).listen(8086);
