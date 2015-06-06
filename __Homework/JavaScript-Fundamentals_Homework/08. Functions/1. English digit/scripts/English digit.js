// Problem 1. English digit
//
// Write a function that returns the last digit of given integer as an English word.
//
// _Examples:_
//
// | input | output |
// |:-----:|:------:|
// | 512   | two    |
// | 1024  | four   |
// | 12309 | nine   |

function lastDigitAsWord(number) {

    var lastDigit = number % 10;

    switch (lastDigit) {
            case 0: return 'zero';
            case 1: return 'one';
            case 2: return 'two';
            case 3: return 'three';
            case 4: return 'four';
            case 5: return 'five';
            case 6: return 'six';
            case 7: return 'seven';
            case 8: return 'eight';
            case 9: return 'nine';
        }
}

function printLastDigitAsWord() {

    var number = jsConsole.readFloat('#tb-number'),
        remainder = jsConsole.read('#tb-number') % 1; // check for a remainder (if someone mistakenly put a float number)

    if (!isNaN(number) && !remainder) {

        jsConsole.writeLine('input = ' + number + ' | output: ' + lastDigitAsWord(number));

    } else {

        jsConsole.writeLine('ERROR : ' + jsConsole.read('#tb-number') + ' is NOT a number or is a FLOAT number');
    }
}