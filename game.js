let playerScore = 0;
let compScore = 0;
let btnRock = document.getElementById("playerRock");
let btnPaper = document.getElementById("playerPaper");
let btnScissor = document.getElementById("playerScissor");
let winText = document.getElementById("winner");
let btnList = [btnRock, btnPaper, btnScissor];
let startBtn = document.getElementById("startBtn");
let score = document.getElementById("allScore");

function playerPlay(element) {
	if (element.id == "playerRock") {
		return 0;
	} else if (element.id == "playerPaper") {
		return 1;
	} else if (element.id == "playerScissor") {
		return 2;
	}
}

function computerPlay() {
	let compSelect = Math.floor(Math.random() * 3);
	if (compSelect == 1) {
		return 0; //rock
	} else if (compSelect == 2) {
		return 1; //paper
	} else {
		return 2; //scissor
	}
}

function playRound(element) {
	let win = [
		[1, 3, 2],
		[2, 1, 3],
		[3, 2, 1],
	];
	let player = playerPlay(element);
	let comp = computerPlay();
	document.getElementById("tie").style.opacity = "0";
	document.getElementById("player").innerHTML = `${player == 0 ? "Rock" : player == 1 ? "Paper" : "Scissor"}`;
	document.getElementById("comp").innerHTML = `${comp == 0 ? "Rock" : comp == 1 ? "Paper" : "Scissor"}`;

	let result = win[player][comp];
	if (result == 1) {
		console.log("Tie");
		document.getElementById("tie").style.opacity = "1";
	} else if (result == 2) {
		playerScore++;
		console.log("Player win!");
	} else {
		compScore++;
		console.log("Computer win!");
	}
}

function endCheck(playerScore, compScore) {
	if (playerScore == 5) {
		return true;
	} else if (compScore == 5) {
		return true;
	}
	return false;
}

function mainGame(element) {
	playRound(element);
	score.innerHTML = `${playerScore}:${compScore}`;
	if (endCheck(playerScore, compScore)) {
		if (playerScore == 5) {
			winText.innerHTML = "You are the winner!";
		} else if (compScore == 5) {
			winText.innerHTML = "You lose to a computer!";
		}
		startBtn.style.display = "block";

		for (let i = 0; i < btnList.length; i++) {
			btnList[i].classList.add("selectionHover");
			btnList[i].classList.remove("selection");
			btnList[i].removeAttribute("onclick");
		}
	}
}

function restartGame() {
	startBtn.style.display = "none";
	winText.innerHTML = "";
	playerScore = 0;
	compScore = 0;
	score.innerHTML = `${playerScore}:${compScore}`;
	for (let i = 0; i < btnList.length; i++) {
		console.log(btnList[i]);
		btnList[i].classList.add("selection");
		btnList[i].classList.remove("selectionHover");
		btnList[i].setAttribute("onclick", "mainGame(this)");
	}
}
