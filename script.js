function checkWinner(playerWeapon, computerWeapon) {
	let options = ["rock", "paper", "scissor"];

	while (!options.includes(playerWeapon)) {
		playerWeapon = playerSelectWeapon();
	}

	if (playerWeapon === computerWeapon) return "Draw";
	if (
		(playerWeapon === "paper" && computerWeapon === "rock") ||
		(playerWeapon === "rock" && computerWeapon === "scissor") ||
		(playerWeapon === "paper" && computerWeapon === "rock")
	)
		return "Player win";
	return "Computer win";
}

function playerSelectWeapon() {
	playerWeapon = prompt("Choose a weapon ('rock' 'paper' 'scissor')").toLowerCase();
	return playerWeapon;
}

var playerWeapon = playerSelectWeapon();
let options = ["rock", "paper", "scissor"];
let computerWeapon = options[Math.floor(Math.random() * options.length)];

console.log(checkWinner(playerWeapon, computerWeapon));
console.log(`Player choose ${playerWeapon}`);
console.log(`Computer choose ${computerWeapon}`);
