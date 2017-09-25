// Here's the deck of 22 Major Arcana cards. Images from the Jodorowsky set of Marseilles Tarot.

var deck = [
{
	rank: "The Fool",
	suit: "Arcana",
	cardImage: "images/fool.png"
},
{
	rank: "The Magician",
	suit: "Arcana",
	cardImage: "images/magician.png"
},
{
	rank: "The Prophetess",
	suit: "Arcana",
	cardImage: "images/prophetess.png"
},
{
	rank: "The Empress",
	suit: "Arcana",
	cardImage: "images/empress.png"
},
{
	rank: "The Emperor",
	suit: "Arcana",
	cardImage: "images/emperor.png"
},
{
	rank: "The Lovers",
	suit: "Arcana",
	cardImage: "images/lovers.png"
},
{
	rank: "The Chariot",
	suit: "Arcana",
	cardImage: "images/chariot.png"
},
{
	rank: "Justice",
	suit: "Arcana",
	cardImage: "images/justice.png"
},
{
	rank: "The Hermit",
	suit: "Arcana",
	cardImage: "images/hermit.png"
},
{
	rank: "Wheel of Fortune",
	suit: "Arcana",
	cardImage: "images/wheel-of-fortune.png"
},
{
	rank: "Strength",
	suit: "Arcana",
	cardImage: "images/strength.png"
},
{
	rank: "The Hanged Man",
	suit: "Arcana",
	cardImage: "images/hanged-man.png"
},
{
	rank: "Death",
	suit: "Arcana",
	cardImage: "images/death.png"
},
{
	rank: "Temperance",
	suit: "Arcana",
	cardImage: "images/temperance.png"
},
{
	rank: "The Devil",
	suit: "Arcana",
	cardImage: "images/devil.png"
},
{
	rank: "The Tower",
	suit: "Arcana",
	cardImage: "images/tower.png"
},
{
	rank: "The Star",
	suit: "Arcana",
	cardImage: "images/star.png"
},
{
	rank: "The Moon",
	suit: "Arcana",
	cardImage: "images/moon.png"
},
{
	rank: "The Sun",
	suit: "Arcana",
	cardImage: "images/sun.png"
},
{
	rank: "Judgment",
	suit: "Arcana",
	cardImage: "images/judgment.png"
},
{
	rank: "The World",
	suit: "Arcana",
	cardImage: "images/world.png"
}
];


// Shuffling the array deck using the Fisher Yates method (found at https://bost.ocks.org/mike/shuffle/).
function shuffle(deck) {
  var m = deck.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = deck[m];
    deck[m] = deck[i];
    deck[i] = t;
  }

  return deck;
};
shuffle(deck);

// Making the cards array the first seven cards of the newly shuffled deck.
// To get the first n elements of an array, use this code (from https://stackoverflow.com/questions/34883068/how-to-get-first-n-number-of-elements-from-an-array)
var cardsSingle = deck.slice(0, 7);

//Then taking that array and doubling it using concat (found at https://www.w3schools.com/jsref/jsref_concat_array.asp)
var cardsDouble = cardsSingle;
var cards = cardsSingle.concat(cardsDouble);

// Shuffling the array cards using the Fisher Yates method.
shuffle(cards);

// STILL TO COME
// Hiding cards (switching image to back.png) after they're flipped if they're not a match.
// Still unknown: how do I find the cards in the cards array that correspond to the cardsInPlay array?

// STILL TO COME
// Removing cards (switching image to blank space image?) after they're flipped if they are a match.


// Checking two flipped cards to see if they match.
var cardsInPlay = [];
var checkForMatch = function() {
	if (cardsInPlay.length % 2 === 0)
		if (cardsInPlay[cardsInPlay.length-1] === cardsInPlay[cardsInPlay.length -2]) {
		console.log("You matched " + cardsInPlay[cardsInPlay.length-1]+ "!");
	} else {
		console.log("Sorry, try again.");
		}
	}

// Flipping cards.
var flipCard = function() {
	var cardId = this.getAttribute('data-id')
	this.setAttribute('src', cards[cardId].cardImage);
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit)
	checkForMatch();
	};

// Creating board.
var createBoard = function(){
for (var i = 0; i < cards.length; i++) {
	var cardElement = document.createElement('img');
	cardElement.setAttribute('src', 'images/back.png');
	cardElement.setAttribute('data-id', i);
	cardElement.addEventListener('click', flipCard);
	document.getElementById('game-board').appendChild(cardElement);
}
};


// call createBoard function
	createBoard();
