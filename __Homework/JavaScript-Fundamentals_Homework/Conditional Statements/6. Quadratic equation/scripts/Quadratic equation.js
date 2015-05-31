// Problem 6. Quadratic equation
//
// Write a script that reads the coefficients a, b and c of a quadratic equation ax2 + bx + c = 0 and solves it (prints its real roots).
// Calculates and prints its real roots.

function quadraticEquationRoots() {

    var a = jsConsole.readFloat('#coef-A');
    var b = jsConsole.readFloat('#coef-B');
    var c = jsConsole.readFloat('#coef-C');

    if (!isNaN(a) && !isNaN(b) && !isNaN(c)) {

        var discriminant = (b * b) - (4 * a * c);

        if (discriminant > 0) {

            var rootX1 = (-b - Math.sqrt(discriminant)) / (2 * a);
            var rootX2 = (-b + Math.sqrt(discriminant)) / (2 * a);

            jsConsole.write('a = ' + a + ', b = ' + b + ', c = ' + c + ' | roots: ');
            jsConsole.writeLine('x1 = ' + rootX1 + ';  x2 = ' + rootX2);

        } else if (!discriminant) {

            var rootsX1X2 = -b / (2 * a);

            jsConsole.write('a = ' + a + ', b = ' + b + ', c = ' + c + ' | roots: ');
            jsConsole.writeLine('x1 = x2 = ' + rootsX1X2);

        } else {

            jsConsole.writeLine('a = ' + a + ', b = ' + b + ', c = ' + c + ' | roots: no real roots');
        }

    } else {

        jsConsole.writeLine('ERROR : a, b or c is NOT a number');
    }
}