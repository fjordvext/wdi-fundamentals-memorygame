var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var cardOne = cards[0];
cardsInPlay.push(cardOne);
console.log("user flipped queen");
var cardTwo = cards[1];
cardsInPlay.push(cardTwo);
console.log("user flipped king");
if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("you found a match!");
	} else {
			alert("sorry, try again");
		}
	};