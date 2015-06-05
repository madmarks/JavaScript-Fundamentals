// Problem 2. Multiplication Sign
//
// Write a script that shows the sign (+, - or 0) of the product of three real numbers, without calculating it.
// Use a sequence of if operators.

function multiplicationSign() {

    var varA = jsConsole.readFloat('#varA');
    var varB = jsConsole.readFloat('#varB');
    var varC = jsConsole.readFloat('#varC');

    if (!isNaN(varA) && !isNaN(varB) && !isNaN(varC)) {

        jsConsole.write('a = ' + varA + ', b = ' + varB + ', c = ' + varC + ' | result: ')

        if (!varA || !varB || !varC) {

            jsConsole.writeLine('0');

        } else {

            if (varA > 0) {

                if ((varB > 0 && varC > 0) || (varB < 0 && varC < 0)) {

                    jsConsole.writeLine('+');

                } else {

                    jsConsole.writeLine('-');
                }
            } else { // varA < 0
                
                if ((varB > 0 && varC > 0) || (varB < 0 && varC < 0)) {

                    jsConsole.writeLine('-');

                } else {

                    jsConsole.writeLine('+');
                }
            }
        }
    } else {

        jsConsole.writeLine('ERROR : a, b or c is NOT a number');
    }
}