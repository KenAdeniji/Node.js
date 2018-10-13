var request = require('request');
var url = "http://www.google.com";

request(url, function (error, response, body) {
	if (!error && response.statusCode == 200) {
		console.log(body) // Show the HTML for the Google homepage.
	}
	else {
		console.log(error, response.statusCode);
	}  
})
