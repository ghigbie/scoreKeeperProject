//this file was created in the command line
//alert("JS file is connected");

var maxScore = 5;
var player1Score = 0;
var player2Score = 0;
var hasWon = false;


var button1 = document.querySelector("#playerOne");
var button2 = document.querySelector("#playerTwo");
var buttonR = document.querySelector("button")[2];
var score1 = document.querySelector("#score1");
var score2 = document.querySelector("#score2");
var body = document.querySelector("body");



button1.addEventListener("click", function(){
	if(player1Score <= maxScore){
		player1Score++;
		//score1.textContent = playe1Score;
		checkWin();
	}
});

button2.addEventListener("click", function(){
	if(player2Score <= maxScore){
		player2Score++;
		//score2.textContent = player2Score;
		checkWin();
	}
});

buttonR.addEventListener("click", function(){
	player1Score = 0;
	player2Score = 0;
	body.classList.remove("bodyOne", "BodyTwo");
});

function checkWin(){
	if(player1Score === maxScore){
		player1Wins();
	}

	if(player2Score === maxScore){
		player2Wins();
	}

}

function player1Wins(){
	alert("Player One Wins");
	setInterval(function(){
		//make background flash to playerone color
		body.classList.toggle("bodyOne");
	}, 500);
}

function player2Wins(){
	alert("Palyer Two Wins")
	setInterval(function(){
		//make background flash to playertwo color
		body.classList.toggle("bodyTwo");
	}, 500);
}





