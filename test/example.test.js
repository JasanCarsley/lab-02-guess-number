// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { compareNumbers } from '../utils.js';
const test = QUnit.test;

test('this will test if the numbers are identical', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 0;
    const guess = 10;
    const comparedNumber = 10;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = compareNumbers(guess, comparedNumber);
        
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('this will test if the guessed number is too low', (expect) => {

    const expected = -1;
    const guess = 9;
    const comparedNumber = 10;

    const actual = compareNumbers(guess, comparedNumber);

    expect.equal(actual, expected);
});

test('this will test if the guessed number is to high', (expect) => {
    
    const expected = 1;
    const guess = 8;
    const comparedNumber = 7;

    const actual = compareNumbers(guess, comparedNumber);

    expect.equal(actual, expected);
});

