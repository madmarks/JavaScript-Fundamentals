// Problem 5. Third bit
//
// Write a boolean expression for finding if the bit #3 (counting from 0) of a given integer.
// The bits are counted from right to left, starting from bit #0.
// The result of the expression should be either 1 or 0.

function thirdBit() {

    var number = jsConsole.readInteger('#input');

    // check for a remainder (if someone mistakenly put a float number)
    var remainder = jsConsole.read('#input') % 1;

    if (!isNaN(number) && !remainder) {

        var bit3 = ((number >> 3) & 1).toString();

        var binary = number.toString(2);

        // Add leading zeros
        var str = "0000000000000000".substr(binary.length) + binary;

        // Add space (divide into two 8-bits parts)
        str = str.substr(0, 8) + ' ' + str.substr(8, 8);

        jsConsole.write('Binary representation : ' + str + ' | ');

        jsConsole.writeLine('bit #3 is : ' + bit3);
    } else {

        jsConsole.writeLine(jsConsole.read('#input') + ' is NOT a number or is NOT an Integer number');
    }
}