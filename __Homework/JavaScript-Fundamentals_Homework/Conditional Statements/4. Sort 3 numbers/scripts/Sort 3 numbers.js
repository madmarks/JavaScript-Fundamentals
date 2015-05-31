// Problem 4. Sort 3 numbers
//
// Sort 3 real values in descending order.
// Use nested if statements.
//
// Note: Don’t use arrays and the built-in sorting functionality.

function sort3Numbers() {

    var varA = jsConsole.readFloat('#varA');
    var varB = jsConsole.readFloat('#varB');
    var varC = jsConsole.readFloat('#varC');

    if (!isNaN(varA) && !isNaN(varB) && !isNaN(varC)) {

        jsConsole.write('a = ' + varA + ', b = ' + varB + ', c = ' + varC + ' | result: ')

        if (varA >= varB && varB >= varC) {

            jsConsole.writeLine(varA + ' ' + varB + ' ' + varC);

        } else if (varA >= varC && varC >= varB) {

            jsConsole.writeLine(varA + ' ' + varC + ' ' + varB);

        } else if (varB >= varA && varA >= varC) {

            jsConsole.writeLine(varB + ' ' + varA + ' ' + varC);

        } else if (varB >= varC && varC >= varA) {

            jsConsole.writeLine(varB + ' ' + varC + ' ' + varA);

        } else if (varC >= varA && varA >= varB) {

            jsConsole.writeLine(varC + ' ' + varA + ' ' + varB);

        } else {

            jsConsole.writeLine(varC + ' ' + varB + ' ' + varA);
        }

    } else {

        jsConsole.writeLine('ERROR : a, b or c is NOT a number');
    }
}