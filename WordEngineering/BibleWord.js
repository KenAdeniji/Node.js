/*
	2017-01-20	BibleWord.js	Created.
	2017-01-20	npm install mongodb --save
	2017-01-28	http://stackoverflow.com/questions/25507866/how-can-i-use-a-cursor-foreach-in-mongodb-using-node-js
	2017-01-29	http://stackoverflow.com/questions/10610131/checking-if-a-field-contains-a-string
				db.users.find( { 'name' : { '$regex' : yourvalue, '$options' : 'i' } } )
	2017-01-29	http://stackoverflow.com/questions/17039018/how-to-use-a-variable-as-a-field-name-in-mongodb-native-findone
	2017-01-30	http://stackoverflow.com/questions/13833204/how-to-set-a-js-object-property-name-from-a-variable
	2017-01-31	http://stackoverflow.com/questions/10855323/dynamic-mongodb-query-generation-with-node-js-driver
	2017-01-31	https://docs.mongodb.com/manual/reference/operator/query/where/
	2018-04-23	db.collection('Scripture').find( { bookTitle: { $eq: 'Daniel' } }).toArray(function(err, docs) {
	2023-12-21	Server-side database: mongodb. Client-side front-end language: JavaScript. Implementation JavaScript.
*/	
var http = require("http");
const url = require('url');
var qs = require('querystring');

var mongodb = require('mongodb');

var WordEngineering = require("./WordEngineering.js");

var bibleVersion = "";
var bibleWord = "";
var logic = "";

http.createServer(function (request, response) {

	// Send the HTTP header 
	// HTTP Status: 200 : OK
	// Content Type: text/plain
	response.writeHead(200, {'Content-Type': 'text/html'});
  
	determineRequest(request, response);
}).listen(8082);

// Console will print the message
console.log('Server running at http://127.0.0.1:8082/');

function determineRequest(request, response)
{
    //console.log(request.method);
	if(request.method=='POST') {
		var body = '';
		request.setEncoding('utf8');
		request.on('data', function(chunk){ body += chunk });
		request.on('end', function(){
			var obj = qs.parse(body); 
			bibleVersion = obj.bibleVersion;
			bibleWord = obj.bibleWord;
			logic = obj.logic;
		});
    }
    else if(request.method=='GET') {

	}
    WordEngineering.CascadingStyleSheetCSS.insertFile(request, response, "WordEngineering.css");
	WordEngineering.HTML.insertFile(request, response, "BibleWordQuery.html");
	buildBibleWordHTMLTable(request, response);
}

function buildBibleWordHTMLTable(request, response)
{
	var columnName = WordEngineering.BibleVersion.columnName(bibleVersion);
	
	var bibleWords = [];

	var query = {};
	//var query = "";

	var symbol = ""
	
	switch (logic)
	{
		case 'and':
			symbol = " && ";
			break;
		case 'or':
			symbol = " || ";
			break;
	}
	
	switch (logic)
	{
		case 'and':
		case 'or':
		/*
			query = "";
			bibleWords = bibleWord.split(' ');
			for (var rowIndex = 0, rowCount = bibleWords.length; rowIndex < rowCount; ++rowIndex)
			{	
				if (rowIndex > 0)
				{
					query += symbol;
				}	
				query += "this." + columnName + '.indexOf("' + bibleWords[rowIndex] + '") > -1';
			}
			console.log(query);
			//query = eval('(' + query + ')');
		*/	
			query = '{verseText:/^Jesus wept./}';
			query = "{this.verseText == 'Jesus wept.'}";
			query = "{this.bookTitle=== 'Genesis'}";
			//query = "{this.verseText === this.AmericanStandardBible}";
			query = "{ bookTitle: { $eq: 'Daniel' } }"
			break;
		case 'phrase':
			query[columnName] = { '$regex' : bibleWord, '$options' : 'i' };
			break;
	}

	//query = "{ bookTitle: { $eq: 'Daniel' } }";
	
	//We need to work with "MongoClient" interface in order to connect to a mongodb server.
	var MongoClient = mongodb.MongoClient;

	// Connection URL. This is where your mongodb server is running.
	var url = 'mongodb://localhost:27017/Bible';

	// Use connect method to connect to the Server
	MongoClient.connect(url, function (err, db) {
		if (err) {
			console.log('Unable to connect to the mongoDB server. Error:', err);
		} else {

			//HURRAY!! We are connected. :)
			//console.log('Connection established to', url);

			response.write("<table>");
			
			db.collection('Scripture').find
			( 
				{ 
					bookTitle: { $eq: 'Daniel' },
					chapterId: { $eq: 9 } 
				}
			).toArray(function(err, docs) {
				docs.forEach(function(doc) {
					var resultRow = WordEngineering.HTMLTable.buildRow
					(
						doc.scriptureReference,
						doc.KingJamesVersion
					)
					response.write(resultRow);
				});

				db.close();
				response.write("</table>");
				response.end();

			});
		}
	});
}
