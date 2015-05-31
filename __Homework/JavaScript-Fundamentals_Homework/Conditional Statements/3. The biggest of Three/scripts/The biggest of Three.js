// Problem 3. The biggest of Three
//
// Write a script that finds the biggest of three numbers.
// Use nested if statements.

function theBiggestOfThree() {

    var varA = jsConsole.readFloat('#varA');
    var varB = jsConsole.readFloat('#varB');
    var varC = jsConsole.readFloat('#varC');

    if (!isNaN(varA) && !isNaN(varB) && !isNaN(varC)) {

        jsConsole.write('a = ' + varA + ', b = ' + varB + ', c = ' + varC + ' | biggest: ')

        if (varA >= varB && varA >= varC) {

            jsConsole.writeLine(varA);

        } else if (varB >= varA && varB >= varC) {

            jsConsole.writeLine(varB);

        } else {

            jsConsole.writeLine(varC);
        }
    } else {

        jsConsole.writeLine('ERROR : a, b or c is NOT a number');
    }
}