export function getRandomNumber() {
    return Math.floor(Math.random() * 20);

}

export function compareNumbers(guess, number) {
    if (guess === number) {
        return 0;
    } else if (guess < number) {
        return -1;}

    else if (guess > number) {
        return 1;
    }
}
