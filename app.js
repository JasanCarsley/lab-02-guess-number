// import functions and grab DOM elements

import { compareNumbers, getRandomNumber } from './utils.js';

const button = document.getElementById('submit-button');
const input = document.getElementById('number-input');
const guessesRemaining = document.getElementById('guesses-remaining');
const resultMessage = document.getElementById('result-message');

// initialize state

let guessCounter = 5;
guessesRemaining.textContent = guessCounter; 

const randomNumber = getRandomNumber();
console.log(randomNumber);

// set event listeners to update state and DOM

button.addEventListener('click', () => {
    const userGuess = Number(input.value);
    const compareResult = compareNumbers(userGuess, randomNumber);
    console.log(userGuess);

    if (compareResult === 0) {
        resultMessage.textContent = 'You are correct!';
    } if (compareResult === -1) {
        resultMessage.textContent = 'Your guess is too low!';
    }
    if (compareResult === 1)
    { resultMessage.textContent = 'Your guess is too high!'; }

    guessCounter--;
    guessesRemaining.textContent = guessCounter;

    if (guessCounter === 0) {
        resultMessage.textContent = 'Game over! Refresh browser to restart game.';
        button.disabled = true;
    }
});



