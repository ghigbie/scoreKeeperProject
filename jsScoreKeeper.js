//this file was created in the command line
//alert("JS file is connected");

var maxScore = 0;
var player1Score = 0;
var player2Score = 0;
var hasWon = false;


var button1 = document.querySelector("#playerOne");
var button2 = document.querySelector("#playerTwo");
var buttonR = document.querySelector("button")[2];
var score1 = document.querySelector("#score1");
var score2 = document.querySelector("#score2");

button1.addEventListener("click", function(){
	score1.textContent = playerOne++;
	checkWin();
});

button2.addEventListener("click", function(){
	if(player)
	score2.textContent = playerTwo++;
	checkWin();
});

function checkWin(){
	if(player1Score > player2Score){
		player1Wins = true;
	}

}

function player1Wins(){
	alert("Player One Wins");
	setInterval(function(){
		//make background flash to playerone color
	}, 200);
}

function player2Wins(){
	alert("Palyer Two Wins")
	setInterval(function(){
		//make background flash to playertwo color
	}, 200);
}





