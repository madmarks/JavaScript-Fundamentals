// Problem 2. Divisible by 7 and 5
//
// Write a boolean expression that checks for given integer if it can be divided (without remainder) by 7 and 5 in the same time.

function isDivisibleBy7and5() {

    var number = jsConsole.readInteger('#input');

    // check for a remainder (if someone mistakenly put a float number)
    var remainder = jsConsole.read('#input') % 1;

    if (!isNaN(number) && !remainder) {

        if (!(number % 7) && !(number % 5)) {

            jsConsole.writeLine('TRUE : ' + number + ' can be divided (without remainder) by 7 and 5.');
        } else {

            jsConsole.writeLine('FALSE : ' + number + ' cannot be divided by 7 AND 5.');
        }
    } else {

        jsConsole.writeLine(jsConsole.read('#input') + ' is NOT a number or is NOT an Integer number');
    }
}