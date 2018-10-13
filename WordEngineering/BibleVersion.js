/*
	2017-01-20	BibleVersion.js	Created.
*/	

class BibleVersion
{
	static populate()
	{
		var bibleVersion = document.getElementById("bibleVersion");
		bibleVersion.options.length = 0;

		var bibleVersions = [
			["King James Version", "KJV"],
			["American Standard Bible", "ASV"],
			["Young's Literal Translation", "YLT"] 
		];
		
		for (var rowIndex = 0, rowCount = bibleVersions.length; rowIndex < rowCount; ++rowIndex)
		{
			var option = document.createElement("option");
			option.text = bibleVersions[rowIndex][0];
			option.value = bibleVersions[rowIndex][1];;
			bibleVersion.appendChild(option);
			console.log(option);
		}
	}
}
