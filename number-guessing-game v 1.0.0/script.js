const guessInput = document.getElementById("guess");
const submitButton = document.getElementById("submit");
const resetButton = document.getElementById("reset");
const resultDisplay = document.getElementById("result");
const attemptsDisplay = document.getElementById("attempts");
const correctNumberDisplay = document.getElementById("correct-number");
const numberGuessedDisplay = document.getElementById("guessed-number");
const bestScoreDisplay = document.getElementById("best-score");

const MIN_NUMBER = 1;
const MAX_NUMBER = 100;

let randomNumber;
let attempts;
let bestScore = null;
let gameOver;

function getRandomNumber() {
    return Math.floor(Math.random() * MAX_NUMBER) + MIN_NUMBER;
}

function setResultMessage(message, tone = "") {
    resultDisplay.textContent = message;
    resultDisplay.className = `result ${tone}`.trim();
}

function startNewRound() {
    randomNumber = getRandomNumber();
    attempts = 0;
    gameOver = false;

    attemptsDisplay.textContent = attempts;
    numberGuessedDisplay.textContent = "—";
    correctNumberDisplay.textContent = "?";
    guessInput.value = "";
    guessInput.focus();

    setResultMessage("New round started. Enter your guess.");
}

function processGuess() {
    if (gameOver) {
        setResultMessage("Round is complete. Start a new round to keep playing.", "warning");
        return;
    }

    const userGuess = Number.parseInt(guessInput.value, 10);

    if (Number.isNaN(userGuess)) {
        setResultMessage("Please enter a valid number.", "error");
        return;
    }

    if (userGuess < MIN_NUMBER || userGuess > MAX_NUMBER) {
        setResultMessage(`Please enter a number between ${MIN_NUMBER} and ${MAX_NUMBER}.`, "error");
        return;
    }

    attempts += 1;
    attemptsDisplay.textContent = attempts;
    numberGuessedDisplay.textContent = userGuess;

    if (userGuess === randomNumber) {
        gameOver = true;
        correctNumberDisplay.textContent = randomNumber;

        if (bestScore === null || attempts < bestScore) {
            bestScore = attempts;
            bestScoreDisplay.textContent = bestScore;
        }

        setResultMessage(`🎉 Correct! You guessed ${randomNumber} in ${attempts} attempt${attempts > 1 ? "s" : ""}.`, "success");
        return;
    }

    if (userGuess < randomNumber) {
        setResultMessage("Too low. Try a higher number.", "warning");
    } else {
        setResultMessage("Too high. Try a lower number.", "warning");
    }
}

submitButton.addEventListener("click", processGuess);

guessInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        processGuess();
    }
});

resetButton.addEventListener("click", startNewRound);

startNewRound();
