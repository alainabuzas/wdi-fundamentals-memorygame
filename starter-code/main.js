console.log("JS file is connected to HTML! Woo!")
var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

var gameBoard = document.getElementById('game-board');

var createCards = function() {
	for (var i = 0; i < 4; i++){
		var cardDiv = document.createElement('div');
		cardDiv.className = "card";
		gameBoard.appendChild(cardDiv);
	}
}
	createCards(4);