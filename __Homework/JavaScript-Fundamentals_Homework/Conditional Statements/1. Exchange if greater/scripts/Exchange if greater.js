// Problem 1. Exchange if greater
//
// Write an if statement that takes two double variables a and b and exchanges their values if the first one is greater than the second.
// As a result print the values a and b, separated by a space.

function exchangeIfGreater() {

    var varA = jsConsole.readFloat('#varA');
    var varB = jsConsole.readFloat('#varB');

    if (!isNaN(varA) && !isNaN(varB)) {

        jsConsole.write('a = ' + varA + ', b = ' + varB + ' | result: ')

        if (varA > varB) {

            var tmp = varA;
            varA = varB;
            varB = tmp;
        }

        jsConsole.writeLine(varA + ' ' + varB);

    } else {

        jsConsole.writeLine('ERROR : a or b is NOT a number');
    }
}