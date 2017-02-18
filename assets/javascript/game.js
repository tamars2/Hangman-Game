function htmlID(element) {
	var elementID = document.getElementById(element);
	return elementID;
	};

var winCount = 0,
	currentWord = [],
	wordList = ["ripley", "xenomorph", "nostromo", "jones", "dallas", "kane", "lambert", "ash", "parker", "brett", "spaceship", "monster", "egg", "expendable", "chestburster", "mother"],
	wordLength,
	placeHolder = [],
	guessesRemaining = 15,
	lettersGuessed = [],
	userGuess = "",
	split = [];

function gameSetup(){
	placeHolder = [];
	var wordIndex = Math.floor(Math.random() * wordList.length);
	currentWord = wordList[wordIndex];
	console.log(currentWord);
	split = currentWord.split("");
	console.log(split);
	wordLength = split.length;
	console.log(wordLength);
	for ( var i = 0; i < split.length; i++){
		placeHolder.push("_");
	}
	console.log(placeHolder);
	htmlID("gameBoard").textContent = placeHolder.join(" ");
	htmlID("guessRemaining").textContent = "Guesses remaining: 15";
	htmlID("totalGuesses").textContent = "Letters already guessed: ";
	guessesRemaining = 15;
	lettersGuessed = [];
}; 

gameSetup();

document.onkeydown = function(event) {	
	var userGuess = event.key.toLowerCase();
	if (lettersGuessed.indexOf(userGuess) === -1){
		guessesRemaining = guessesRemaining - 1;
		lettersGuessed.push(userGuess);
		htmlID("guessRemaining").textContent = "Guesses remaining: " + guessesRemaining;
		htmlID("totalGuesses").textContent = "Letters already guessed: " + lettersGuessed;
	};
	for (var i = 0; i < split.length; i++){
		if (userGuess === split[i]) {
			placeHolder[i] = userGuess;
			htmlID("gameBoard").textContent = placeHolder;
			console.log(placeHolder);
		}
	}
	if (guessesRemaining < 1) {
		gameSetup();
	}

	if (placeHolder.indexOf("_") < 0 && guessesRemaining > 0) {
		gameSetup();
		winCount = winCount +1;
		htmlID("wins").textContent = winCount;
		}

};