// Problem 7. Is prime
//
// Write an expression that checks if given positive integer number n (n ≤ 100) is prime.

function isPrime() {

    var number = jsConsole.readInteger('#input');

    // check for a remainder (if someone mistakenly put a float number)
    var remainder = jsConsole.read('#input') % 1;

    var i;

    if (!isNaN(number) && !remainder) {

        if (number > 1) {

            if (number <= 100) {

                for (i = 2; i < number; i++) {

                    if (!(number % i)) {

                        jsConsole.writeLine('FALSE : ' + number.toString() + ' is NOT a prime number');

                        return;
                    }
                }

                jsConsole.writeLine('TRUE : ' + number.toString() + ' is a prime number');
            } else {

                jsConsole.writeLine('Out of scope : n ≤ 100');
            }
        } else {

            jsConsole.writeLine('FALSE : ' + number.toString() + ' is NOT a prime number');
        }
    } else {

        jsConsole.writeLine(jsConsole.read('#input') + ' is NOT a number or is NOT an Integer number');
    }
}