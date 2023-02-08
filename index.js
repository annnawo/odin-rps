function getComputerChoice() {
	let randomNumber = Math.random();
	let computerChoice;
	if (randomNumber <= (1/3)) { 
		computerChoice = 0;
	}
	else if (randomNumber <= (2/3)) {
		computerChoice = 1;
	}
	else {
		computerChoice = 2;
	}
	return computerChoice;
}

console.log(getComputerChoice());
