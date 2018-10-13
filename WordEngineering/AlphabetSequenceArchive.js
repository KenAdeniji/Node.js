/*
	2018-10-12	Created.
*/

var args = process.argv.slice(2);
AlphabetSequence(args)

function AlphabetSequence(argv)
{
	var sum = 0;
	for 
	(
		var argvIndex = 0, argvLength = argv.length;
		argvIndex < argvLength;
		++argvIndex
	)
	{
		var alphabetSequenceIndex = 0;
		var asciiCode;
		var currentWord = argv[argvIndex].toUpperCase(); 
		for 
		(
			var position = 0, length = currentWord.length;
			position < length;
			++position
		)
		{
			asciiCode = currentWord.charCodeAt(position);
			if (asciiCode >= 65 && asciiCode <= 90)
			{
				alphabetSequenceIndex += asciiCode - 64;
			}	
		}	
		sum += alphabetSequenceIndex;
		console.log(`[${argvIndex}]: ${argv[argvIndex]} ${alphabetSequenceIndex}`);
	}
	console.log(`${argv.join(' ')} ${sum}`);
}

