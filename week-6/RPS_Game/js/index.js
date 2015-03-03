// Declare computerchoice
var computerChoice;
function randomComp () {

	 computerChoice = Math.random();

	if (computerChoice > 0 && computerChoice <0.33) {
		computerChoice = 'rock';
	} else if ( computerChoice > 0.34 && computerChoice < 0.66) {
		computerChoice = 'paper';
	} else {
		computerChoice = 'scissors';
	}

}

randomComp();

//Declare users choice
var userChoice;

	$('#rock').click(userRock);
	$('#paper').click(userPaper);
	$('#scissors').click(userScissors);

function userRock() {
	//$('#textResult').html('user chose rock');
	userChoice = 'rock';
	compare(userChoice, computerChoice);

}

function userPaper() {
	//$('#textResult').html('user chose paper');
	userChoice = 'paper';
	compare(userChoice, computerChoice);
}

function userScissors() {
	//$('#textResult').html('user chose scissors');
	userChoice = 'scissors';
	compare(userChoice, computerChoice);
}	

//declare a variable which will comapre choices and record  result

var result;

function compare(computerChoice, userChoice) {
	
	if (computerChoice === userChoice) {
		$('#textResult').html('its a draw');
		result = 'draw';
		//console.log('its a draw', computerChoice, userChoice);
	}


	else if(computerChoice === 'rock') {
		if (userChoice === 'scissors') {
			$('#textResult').html('computer wins');
			$('#userResult').html(userChoice);
			$('#compResult').html(computerChoice);
			result = 'computerWins';
			//console.log('computer wins', computerChoice, userChoice);
		}
		else {
			$('#textResult').html('user wins');
			$('#userResult').html(userChoice);
			$('#compResult').html(computerChoice);
			result = 'userWins';
			//console.log('user wins', computerChoice, userChoice);
		
		}
	}

	else if(computerChoice === 'paper') {
		if (userChoice === 'scissors') {
			$('#textResult').html('user wins');
			$('#userResult').html(userChoice);
			$('#compResult').html(computerChoice);
			result = 'userWins';
			//console.log('user wins', computerChoice, userChoice);
		}
		else {
			$('#textResult').html('computer wins');
			$('#userResult').html(userChoice);
			$('#compResult').html(computerChoice);	
			result = 'computerWins';
			//console.log('computer wins', computerChoice, userChoice);
		}
	}

	else (computerChoice === 'scissors') 
		{ if (userChoice === 'paper') {
			$('#textResult').html('computer wins');
			$('#userResult').html(userChoice);
			$('#compResult').html(computerChoice);
			resut = 'computerWins';
			//console.log('computer wins', computerChoice, userChoice);
		}
		else {
			$('#textResult').html('user wins');
			$('#userResult').html(userChoice);
			$('#compResult').html(computerChoice);
			result ='userWins';
			//console.log('user wins',computerChoice, userChoice)
		}
	}

randomComp();
playerScores();

}

//Decalar variable which will record score 

var score = 0;

var newScore;

 function playerScores(score) {
 	
 	if (result === 'userWins') {
 		newScore = score + 1;
 		$('#userScore').text(newScore);
 		//$('#userScore').html(function(i, val) { return val*1+1 });
 	} 
 	else if (result === 'computerWins') 
 	  {	newScore = score + 1;
 	  	$('#compScore').text(newScore);
 	  	//$('#compScore').html(function(i, val) { return val*1+1 });
 	  }
 	  else  {
 	  	newScore = score + 1;
 	  	$('#userScore', '#compScore').text(newScore);
			}
  }
 
 playerScores();




