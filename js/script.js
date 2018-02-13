// Pig Latin takes the first consonant (or consonant cluster) of an English 
// word, moves it to the end of the word and suffixes an ay, or if a word
// begins with a vowel you just add ay to the end. For example, pig becomes
// igpay, banana becomes ananabay, and aadvark becomes aadvarkay.
// CREATE THE FUNCTIONS BELOW

// Document Ready Function. All of your jQuery should go in here. 
$( document ).ready(function() {
	$( "button" ).click(function() {

		var input = $('input').val();
		var piglatinword = wordToPigLatin(input);
		alert(piglatinword);
	});



});


// Create the wordToPigLatin function that takes a word as a parameter and returns a transfromed word. 
function wordToPigLatin(word){
	for (var i = 1; i < word.length; i--;){
     $('body').append("ay");
	
	return word + "ay"
}
if(var i = 'y' || var i = 'a'|| var i = 'e' var i = 'i' || var i = 'o'|| var i = 'u');
}
	return word.slice(word.length-1) 
{
else
{
	return word;
}




// Create the sentenceToPigLatin function that takes a sentence as a parameter
	//Loops through all the words in the sentence and transforms each word
	//It should return a transfromed sentance
function split(word){
var wordToPigLatinLength =  wordToPigLatin.length
}

