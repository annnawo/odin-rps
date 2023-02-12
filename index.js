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
	let playerWins = 1;
	let compWins = 0;

	if (playerSelection === computerChoice) {
		return 3;
	}
	else if ((playerSelection === 0) && (computerChoice ===1)) {
		return compWins;
	}
	else if ((playerSelection === 1) && (computerChoice === 0)) {
		return playerWins;
	}
	else if ((playerSelection === 0) && (computerChoice === 2)) {
		return playerWins;
	}
	else if ((playerSelection === 2) && (computerChoice === 0)) {
		return compWins;
	}
	else if ((playerSelection === 1) && (computerChoice === 2)) {
		return compWins;
	}
	else if ((playerSelection === 2) && (computerChoice === 1)) {
		return playerWins;
	}
}

function game() {
	let playerWinCt = 0;
	let computerWinCt = 0;
	for (let i=0; i<5; i++) {
		let winner = playRound();
		if (winner === 1) {
			playerWinCt += 1;
		} else {
			computerWinCt += 1;
		}
	}
	if (playerWinCt >= computerWinCt) {
		console.log(`Congrats, you won! You got `+playerWinCt+` out of 5.`);
	} else {
		console.log(`Sorry, you lost! The computer got `+computerWinCt+` out of 5.`);
	}
}

console.log(game());
