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

function playerSelection() {
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

console.log(playerSelection());