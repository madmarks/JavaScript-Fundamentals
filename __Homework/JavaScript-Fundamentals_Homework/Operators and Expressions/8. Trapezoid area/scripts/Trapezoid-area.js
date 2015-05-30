// Problem 8. Trapezoid area
//
// Write an expression that calculates trapezoid's area by given sides a and b and height h.

function trapezoidArea() {

    var sideA = jsConsole.readFloat('#side-a');
    var sideB = jsConsole.readFloat('#side-b');
    var heighH = jsConsole.readFloat('#heigh-h');

    if (!isNaN(sideA) && !isNaN(sideB) && !isNaN(heighH)) {

        var area = ((sideA + sideB) * heighH) / 2;

        jsConsole.write('a = ' + sideA + ', b = ' + sideB + ', h = ' + heighH);
        jsConsole.writeLine(' | area = ' + area);
    }
    else {

        jsConsole.writeLine('ERROR : some of a, b or h is NOT a number');
    }
}