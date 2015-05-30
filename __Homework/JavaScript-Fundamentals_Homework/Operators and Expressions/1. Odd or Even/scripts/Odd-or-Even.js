// Problem 1. Odd or Even
//
// Write an expression that checks if given integer is odd or even.

function checkOdd() {

    var number = jsConsole.readInteger('#input');

    // check for a remainder (if someone mistakenly put a float number)
    var remainder = jsConsole.read('#input') % 1;

    if (!isNaN(number) && !remainder) {

        if (!(number % 2)) {

            jsConsole.writeLine('FALSE : ' + number + ' is an Even number');
        } else {

            jsConsole.writeLine('TRUE : ' + number + ' is an Odd number');
        }
    } else {

        jsConsole.writeLine(jsConsole.read('#input') + ' is NOT a number or is NOT an Integer number');
    }
}