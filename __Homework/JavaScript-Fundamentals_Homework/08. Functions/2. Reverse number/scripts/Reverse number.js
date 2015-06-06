// Problem 2. Reverse number
//
// Write a function that reverses the digits of given decimal number.
//
// _Examples:_
//
// | input  | output |
// |:------:|:------:|
// | 256    | 652    |
// | 123.45 | 54.321 |

function getReversedNumber(number) {

    return number.toString().split('').reverse().join('');
}

function printReversedNumber() {

    var number = jsConsole.readFloat('#tb-number');

    if (!isNaN(number)) {

        jsConsole.writeLine('input = ' + number + ' | output: ' + getReversedNumber(number));

    } else {

        jsConsole.writeLine('ERROR : ' + jsConsole.read('#tb-number') + ' is NOT a number');
    }
}