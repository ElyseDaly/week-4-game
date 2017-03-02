$( document ).ready(function(){


// select random number between 19-120 to show at start of game
var targetNumber = Math.floor(Math.random()*(120-19+1)+19);
// appends the chosen target number to my html
$("#numberToGuess").text(targetNumber);

//win and loss variables, append the values to my html
var wins = 0;
var losses = 0;
$("#wins").text(wins);
$("#losses").text(losses);

//a random number between 1-12 - will apply to jewels
var number1 = Math.floor((Math.random()*12)+1);
var number2 = Math.floor((Math.random()*12)+1);
var number3 = Math.floor((Math.random()*12)+1);
var number4 = Math.floor((Math.random()*12)+1);

//curremt score variable and append value to html
var userScore = 0;
$("#totalScore").text(userScore);


//RESET function
function reset() {
	targetNumber = Math.floor(Math.random()*(120-19+1)+19);
	$("#numberToGuess").text(targetNumber);
	number1 = Math.floor((Math.random()*12)+1);
	number2 = Math.floor((Math.random()*12)+1);
	number3 = Math.floor((Math.random()*12)+1);
	number4 = Math.floor((Math.random()*12)+1);
	userScore = 0;
	$("#totalScore").text(userScore);
}

// WIN function
function winFunction() {
	wins++;
	alert("You win!");
	$("#wins").text(wins);
	reset();
}

//LOSE function
function loseFunction() {
	losses++;
	alert("You lose");
	$("#losses").text(losses);
	reset();
}


//Functions for what happens when each crystal is clicked
$("#crystalOne").on("click", function() {
	userScore = userScore + number1;
	console.log(number1);
	$("#totalScore").text(userScore);
	if (userScore === targetNumber) {
		winFunction();
	}
	else if (userScore > targetNumber) {
		loseFunction();
	}
})

$("#crystalTwo").on("click", function() {
	userScore = userScore + number2;
	console.log(number2);
	$("#totalScore").text(userScore);
	if (userScore === targetNumber) {
		winFunction();
	}
	else if (userScore > targetNumber) {
		loseFunction();
	}
})

$("#crystalThree").on("click", function() {
	userScore = userScore + number3;
	console.log(number3);
	$("#totalScore").text(userScore);
	if (userScore === targetNumber) {
		winFunction();
	}
	else if (userScore > targetNumber) {
		loseFunction();
	}
})

$("#crystalFour").on("click", function() {
	userScore = userScore + number4;
	console.log(number4);
	$("#totalScore").text(userScore);
	if (userScore === targetNumber) {
		winFunction();
	}
	else if (userScore > targetNumber) {
		loseFunction();
	}
});

});  // end of document ready function
