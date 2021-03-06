var maxScore = 5;
var player1Score = 0;
var player2Score = 0;
var gameOver = false;
var winner = "";
var intervalId;
var numberInput = document.querySelector("input");
var button1 = document.querySelector("#playerOne");
var button2 = document.getElementById("playerTwo");
var buttonR = document.querySelector("#reset");
var score1 = document.querySelector("#score1");
var score2 = document.querySelector("#score2");
var winnerScoreDisplay = document.querySelector("#maxScore");
var body = document.querySelector("body");



button1.addEventListener("click", function(){
	if(!gameOver){
		player1Score++;
		console.log(player1Score);
		score1.textContent = player1Score;
		if(player1Score === maxScore){
			gameOver = true;
			player1Wins();
		}
	}
});

button2.addEventListener("click", function(){
	if(!gameOver){
		player2Score++;
		console.log(player2Score);
		score2.textContent = player2Score;
		if(player2Score === maxScore){
			gameOver = true;
			player2Wins();
		}
	}
});

buttonR.addEventListener("click", function(){
	player1Score = 0;
	player2Score = 0;
	score1.textContent = player1Score;
	score2.textContent = player2Score;
	gameOver = false;
	body.className= "";
	score1.classList.remove("win");
	score2.classList.remove("win");
	numberInput.value = "";
	clearInterval(setIntervalId);
	console.log("reset button clicked");
});

numberInput.addEventListener("change", function(){
	winnerScoreDisplay.textContent = numberInput.value;
	maxScore = parseInt(numberInput.value);
});


function player1Wins(){
	alert("Player One Wins");
	winner = "player1";
	score1.classList.add("win");
	flashScreen();
}

function player2Wins(){
	alert("Palyer Two Wins");
	winner = "player2";
	score2.classList.add("win");
	flashScreen();
}

function flashScreen(){
	setIntervalId = setInterval(function(){
		if(winner === "player1"){
			body.classList.toggle("bodyOne");
		}
		else{
			body.classList.toggle("bodyTwo");
		}
	}, 500);

}





