// Problem 7. The biggest of five numbers
//
// Write a script that finds the greatest of given 5 variables.
// Use nested if statements.

function biggestNumber() {

    var a = jsConsole.readFloat('#num-A');
    var b = jsConsole.readFloat('#num-B');
    var c = jsConsole.readFloat('#num-C');
    var d = jsConsole.readFloat('#num-D');
    var e = jsConsole.readFloat('#num-E');

    if (!isNaN(a) && !isNaN(b) && !isNaN(c) && !isNaN(d) && !isNaN(e)) {

        jsConsole.write('a = ' + a + ', b = ' + b + ', c = ' + c);
        jsConsole.write(', d = ' + d + ', e = ' + e + ' | biggest: ');

        if (a >= b && a >= c && a >= d && a >= e) {

            jsConsole.writeLine(a);

        } else if (b >= c && b >= d && b >= e) {

            jsConsole.writeLine(b);

        } else if(c >= d && c >= e ) {

            jsConsole.writeLine(c);

        } else if (d >= e) {

            jsConsole.writeLine(d);

        } else {

            jsConsole.writeLine(e);
        }

    } else {

        jsConsole.writeLine('ERROR : a, b, c, d or e is NOT a number');
    }
}