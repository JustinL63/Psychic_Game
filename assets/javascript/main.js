

var Alaphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_"];

var guesses = 0;
var wins = 0;
var losses = 0;
var guessesLeft = 5;
var userGuess = [];

for (let i = 0; i < Alaphabet.length; i++) {
    const element = Alaphabet[i];
    randomLetter = Alaphabet[Math.floor(Math.random() * Alaphabet.length)];


};

document.onkeyup = function (event) {
    var userGuess = event.key.toLowerCase();
};

document.write(randomLetter);


// I need a way to check and see if the guess from the user matches the random letter
if (userGuess === randomLetter) {
    alert("You guessed right!  You must be psychic!")
    wins++;


};
