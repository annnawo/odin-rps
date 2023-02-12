function getComputerChoice() {
	let randomNumber = Math.random();
	let computerChoice;
	if (randomNumber <= (1/3)) { 
		computerChoice = 0;
	} else if (randomNumber <= (2/3)) {
		computerChoice = 1;
	} else {
		computerChoice = 2;
	}
	return computerChoice;
}

function getPlayerSelection() {
	let playerChoice = prompt('Please enter your desired move');
	let playerSelection;
	playerChoice = playerChoice.toLowerCase();
	while (playerChoice !== 'rock' && playerChoice !== 'paper' && playerChoice !== 'scissors') {
		playerChoice = prompt('Try again. Please enter desired move');
	 	playerChoice = playerChoice.toLowerCase();
	 }
	if (playerChoice === 'rock') {
		playerSelection = 0;
	} else if (playerChoice === 'paper') {
		playerSelection = 1;
	} else {
		playerSelection = 2;
	 }
	return playerSelection;
}

function playRound() {
	playerSelection = getPlayerSelection();
	computerChoice = getComputerChoice();
	let playerWins = 0;
	let compWins = 0;

	if (playerSelection === computerChoice) {
		console.log(`It's a tie!`);
	}
	else if ((playerSelection === 0) && (computerChoice ===1)) {
		console.log(`The computer wins.`);
		compWins += 1;
	}
	else if ((playerSelection === 1) && (computerChoice === 0)) {
		console.log(`You won!`);
		playerWins += 1;
	}
	else if ((playerSelection === 0) && (computerChoice === 2)) {
		console.log(`You won!`);
		playerWins += 1;
	}
	else if ((playerSelection === 2) && (computerChoice === 0)) {
		console.log(`The computer wins.`)
		compWins += 1;
	}
	else if ((playerSelection === 1) && (computerChoice === 2)) {
		console.log(`The computer wins.`)
		compWins += 1;
	}
	else if ((playerSelection === 2) && (computerChoice === 1)) {
		console.log(`You won!`);
		playerWins += 1;
	}
}


console.log(playRound());
