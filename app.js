// import functions and grab DOM elements
import { compareNumbers, getRandomNumber } from './utils.js';

const button = document.getElementById('submit-button');
const input = document.getElementById('number-input');
const guessesRemaining = document.getElementById('guesses-remaining');
const numberGuessed = document.getElementById('number-guessed');
const resultMessage = document.getElementById('result-message');
// initialize state
let guessCounter = 10;

const randomNumber = getRandomNumber();
// set event listeners to update state and DOM

button.addEventListener('click', () => {
    const userGuess = Number(input.value);
    const compareResult = compareNumbers(userGuess, randomNumber);
    console.log(userGuess);

    if (compareResult === 0) {

    }
});



