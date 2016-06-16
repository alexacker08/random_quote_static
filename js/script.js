document.getElementById('loadQuote').addEventListener("click", printQuote, false);

setInterval(printQuote, 5000);

var quotes = [];
var colors = ["#262b53","#6d5a7f","#ae7182","#ffb985","#262533","#63352b","#9c6638"];
var	uniqueQuotes = [];
var uniqueColors = [];

var markTwain = {
	'quote' : "If you tell the truth you don't have to remember anything",
	'source' : 'Mark Twain',
	'citation' : 'Notebook',
	'year' : '1894',
	'tags' : 'motivation'
};

var muhammadAly = {
	'quote' : "I hate every minute of training, but I said, 'Don't quite. Suffer now and live the rest of your life as a champion.",
	'source' : 'Muhammad Ali',
	'tags' : 'motivation'
};


var johnKennedy = {
	'quote' : 'Change is the law of life. And those who look only to the past or present are certain to miss the future.',
	'source' : 'John F. Kennedy',
	'year' : '1963',
	'tags' : 'politics'
};

var fdr = {
	'quote' : 'Happiness lies in the joy of achievement and the thrill of creative effort.',
	'source' : 'Franklin D. Roosevelt',
	'citation' : 'Inagural Speech',
	'year' : '1933',
	'tags' : 'motivation'
};

var yogi = {
	'quote' : 'I never said most of things I said.',
	'source' : 'Yogi Berra',
	'tags' : 'humor'

};

var don = {
	'quote' : 'Procrastination is the art of keeping up with yesterday',
	'source' : 'Don Marquis',
	'tags' : 'humor'

};

var johnKennedy2 = {
	'quote' : 'Let us not seek the Republican answer or the Democratic answer, but the right answer. Let us not seek to fix the blame for the past. Let us accept our own responsibility for the future.',
	'source' : 'John F. Kennedy',
	'tags' : 'politics'

};

//PUSH THE OBJECT LITERALS INTO THE QUOTES ARRAY
quotes.push(markTwain, muhammadAly, johnKennedy, fdr, yogi, don, johnKennedy2);


//PULL RANDOM OBJECT FROM QUOTES ARRAY - THIS MAKES IT SO A QUOTE NEVER REPEATS ITSELF EVER
function getRandomQuote(){
	
	if(!uniqueQuotes.length){
		for(var i = 0; i < quotes.length; i++){
			uniqueQuotes.push(i);
		}
	}

	var index = Math.floor(Math.random() * uniqueQuotes.length);
	var val = uniqueQuotes[index];

	uniqueQuotes.splice(index, 1);
	return quotes[val];

}

//PULL RANDOM INDEX VALUE FROM COLORS ARRAY - THIS MAKES IT SO A COLOR NEVER REPEATS ITSELF EVER
function getRandomColor(){

	if(!uniqueColors.length){
		for (var i = 0; i < colors.length; i++){
			uniqueColors.push(i);

		}
	}

	var index = Math.floor(Math.random() * uniqueColors.length);
	var val = uniqueColors[index];

	uniqueColors.splice(index, 1);

	return val;

}

//PRINT RANDOM OBJECT ONTO SCREEN
function printQuote(){
	
	var getQuote = getRandomQuote();
	var quote = getQuote.quote;		
	var sourceQuote = getQuote.source;
	var citationQuote;
	var yearQuote;

	//THIS CHECKS THE OBJECT TO SEE IF A PARTICULAR PROPERTY IS "UNDEFINED"
	if(typeof getQuote.citation === "undefined"){
		citationQuote = "";

	} else {
		citationQuote = getQuote.citation;

	}

	if(typeof getQuote.year === "undefined"){
		yearQuote = "";

	} else {
		yearQuote = getQuote.year; 

	}


	//BEGIN BUILDING THE ELEMENTS TO PLACE INTO THE DOM
	var printOut = "<p class='quote'>";
	printOut += quote;
	printOut += "</p><p class='source'>";
	printOut += sourceQuote;

	if(citationQuote === "" && yearQuote === ""){
		printOut += "</p>";

	} else if(citationQuote !== "" && yearQuote === ""){
		printOut += "<span class='citation'>";
		printOut += citationQuote;
		printOut += "</span></p>";

	} else if(citationQuote === "" && yearQuote !== ""){
		printOut += "<span class='year'>";
		printOut += yearQuote;
		printOut += "</span></p>";		

	} else {
		printOut += "<span class='citation'>";
		printOut += citationQuote;
		printOut += "</span>";
		printOut += "<span class='year'>";
		printOut += yearQuote;
		printOut += "</span></p>";	

	}
	
	var randomColorNumber = getRandomColor();

	document.getElementsByTagName('body')[0].style.backgroundColor = colors[randomColorNumber];
	document.getElementById('loadQuote').style.backgroundColor = colors[randomColorNumber];
	document.getElementById('quote-box').innerHTML = printOut;

}