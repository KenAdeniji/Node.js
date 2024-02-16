function alphabetSequenceIndex(word)
{
	var alphabetSequence = 0;
	var notANumber = isNaN(word);
	if (!notANumber)
	{	
		alphabetSequence = Number.parseInt(word)
		return alphabetSequence;
	}
	
	word = word.toUpperCase();

	for 
	(
		var index = 0, length = word.length, currentCode, asciiCode;
		index < length;
		++index
	)
	{
		currentCode = word[index];
		if (currentCode >= 'A' && currentCode <= 'Z')
		{	
			asciiCode = currentCode.charCodeAt(0);
			alphabetSequence += asciiCode - 64;
		}
	}
	return alphabetSequence;
}	

module.exports = alphabetSequenceIndex;
