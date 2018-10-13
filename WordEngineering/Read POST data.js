var http = require('http');
var uhtml = 
'<html><head><title>Post Example</title></head>' +
'<body>' +
'<p>Input your name and Address</p>'+
'<form method="post">' +
'Name : <input name="name" size=20><br>' +
'Address : <input name="address" size=50><br>' +
'<input type="submit">' +
'</form>' +
'</body></html>';
http.createServer(function (req, res) {
var body = "";
req.on('data', function (chunk) {
body += chunk;
});
req.on('end', function () {
console.log('POSTed: ' + body);
res.writeHead(200);
res.end(uhtml);
});
}).listen(8080);
