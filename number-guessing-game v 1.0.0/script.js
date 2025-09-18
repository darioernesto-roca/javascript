const guessInput = document.getElementById("guess");
const submitButton = document.getElementById("submit");
const resetButton = document.getElementById("reset");
const resultDisplay = document.getElementById("result");
const attemptsDisplay = document.getElementById("attempts");
const correctNumberDisplay = document.getElementById("correct-number");
const numberGuessedDisplay = document.getElementById("guessed-number");

let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

submitButton.addEventListener("click", function() {
    const userGuess = parseInt(guessInput.value);
    attempts++;
    attemptsDisplay.textContent = attempts;
    numberGuessedDisplay.textContent = userGuess;

    if (userGuess === randomNumber) {
        resultDisplay.textContent = `Congratulations! The number is ${randomNumber}. You guessed the number in ${attempts} attempts.`;
        correctNumberDisplay.textContent = randomNumber;
    } else if (userGuess < randomNumber) {
        resultDisplay.textContent = `Too low! The correct number was ${randomNumber}. Try again.`;
        correctNumberDisplay.textContent = randomNumber;
    } else {
        resultDisplay.textContent = `Too high! The correct number was ${randomNumber}. Try again.`;
        correctNumberDisplay.textContent = randomNumber;
    }
});