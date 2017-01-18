//this file was created in the command line
//alert("JS file is connected");

var maxScore = 5;
var player1Score = 0;
var player2Score = 0;
var gameOver = false;


var button1 = document.querySelector("#playerOne");
var button2 = document.getElementById("playerTwo");
var buttonR = document.querySelector("button")[2];
var score1 = document.querySelector("#score1");
var score2 = document.querySelector("#score2");
var maxScoreDisplay = document.getElementById("maxScore");
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
	if(gameOver){
		player2Socre++;
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
	body.className="";
	score1.classList.remove("win");
	score2.classList.remove("win");
	console.log("reset button clicked");
});

// function checkWin(){
// 	if(player1Score === maxScore){
// 		player1Wins();
// 	}

// 	if(player2Score === maxScore){
// 		player2Wins();
// 	}

// }

function player1Wins(){
	alert("Player One Wins");
	score1.style.color = "green";
	setInterval(function(){
		body.classList.toggle("bodyOne");
	}, 500);
}

function player2Wins(){
	alert("Palyer Two Wins");
	score2.style.color = "green";
	setInterval(function(){
		body.classList.toggle("bodyTwo");
	}, 500);
}





