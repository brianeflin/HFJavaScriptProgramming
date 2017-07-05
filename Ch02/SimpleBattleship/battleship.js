
var locations = [];
locations[0] = Math.floor(Math.random() * 5);
locations[1] = locations[0] + 1;
locations[2] = locations[1] + 1;
var guess;
var hits = [];
var guesses = 0;
var isSunk = false;

while (!isSunk) {
    guess = Number.parseInt(prompt("Ready. Aim. Fire! (enter a number from 0 to 6):"));
    if (guess >= 0 && guess <= 6) {
        guesses++;
        if (locations.indexOf(guess) != -1) {
            alert("HIT!");
            if (hits.indexOf(guess) == -1) {
                hits.push(guess);
            }
            if (hits.length === 3) {
                alert("You sank my battleship!");
                isSunk = true;
            }
        } else {
            alert("MISS!");
        }
    } else {
        alert("That is not a valid guess.");
    }
}
alert("Guesses: " + guesses + 
      "\nAccuracy: " + (3 / guesses));