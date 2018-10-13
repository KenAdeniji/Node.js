/*
	2017-01-18	https://www.tutorialspoint.com/nodejs/
	2017-01-19	http://stackoverflow.com/questions/7694501/class-static-method-in-javascript
*/	
var fs = require("fs");

class BibleVersion
{
	static find(key)
	{
		for (var rowIndex = 0, rowCount = bibleVersions.length; rowIndex < rowCount; ++rowIndex)
		{
			if (bibleVersions[rowIndex][0] === key)
			{
				return rowIndex;
			}	
		}
		return 0;
	}
	
	static columnName(key)
	{
		return bibleVersions[BibleVersion.find(key)][2];
	}	

	static populate()
	{
		var select = document.getElementById("bibleVersion");
		select.options.length = 0;

		for (var rowIndex = 0, rowCount = bibleVersions.length; rowIndex < rowCount; ++rowIndex)
		{
			var option = document.createElement("option");
			option.text = bibleVersions[rowIndex][1];
			option.value = bibleVersions[rowIndex][0];;
			select.appendChild(option);
			console.log(option);
		}
	}
}

class CascadingStyleSheetCSS
{
	static insertFile(request, response, filename)
	{
		var data = fs.readFileSync(filename);
		response.write("<style>" + data.toString() + "</style>");
	}	
}

class HTML
{
	static insertFile(request, response, filename)
	{
		var data = fs.readFileSync(filename);
		response.write(data.toString());
	}	
}

class HTMLTable
{
	static buildRow()
	{
		var rowStub = "<tr>";
		for 
		(
			var columnIndex = 0, columnCount = arguments.length;
			columnIndex < columnCount;
			++columnIndex
		)
		{
			rowStub += "<td>" + arguments[columnIndex] + "</td>";
		}
		rowStub += "</tr>";
		return rowStub;
	}
}

var bibleVersions = [
	["KJV", "King James Version", "verseText"],
	["ASV", "American Standard Bible", "AmericanStandardBible"],
	["YLT", "Young's Literal Translation", "YoungLiteralTranslation"] 
];
	
module.exports = {
	BibleVersion: BibleVersion,
	CascadingStyleSheetCSS: CascadingStyleSheetCSS,
	HTML: HTML,
	HTMLTable: HTMLTable
}
