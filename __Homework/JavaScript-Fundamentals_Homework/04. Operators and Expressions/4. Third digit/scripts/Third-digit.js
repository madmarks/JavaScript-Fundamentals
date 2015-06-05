// Problem 4. Third digit
//
// Write an expression that checks for given integer if its third digit (right-to-left) is 7.

function thirdDigit() {

    var number = jsConsole.readInteger('#input');

    // check for a remainder (if someone mistakenly put a float number)
    var remainder = jsConsole.read('#input') % 1;

    if (!isNaN(number) && !remainder) {

        if (parseInt(number / 100) % 10 === 7) {

            jsConsole.writeLine('TRUE : Third digit (right-to-left) of ' + number + ' is 7');
        } else {

            jsConsole.writeLine('FALSE : Third digit (right-to-left) of ' + number + ' is NOT 7');
        }
    } else {

        jsConsole.writeLine(jsConsole.read('#input') + ' is NOT a number or is NOT an Integer number');
    }
}