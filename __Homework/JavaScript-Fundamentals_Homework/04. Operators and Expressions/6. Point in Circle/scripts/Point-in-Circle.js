// Problem 6. Point in Circle
//
// Write an expression that checks if given point P(x, y) is within a circle K({0,0}, 5). 
// {0,0} is the centre and 5 is the radius

function isInsideCircle() {

    var pointX = jsConsole.readFloat('#pointX');
    var pointY = jsConsole.readFloat('#pointY');

    var radius = 5;
    var squareOfRadius = radius * radius;

    if (!isNaN(pointX) && !isNaN(pointY)) {

        var squareOfZ = pointX * pointX + pointY * pointY;

        if (squareOfZ <= squareOfRadius) {

            jsConsole.writeLine('TRUE : P(' + pointX + ', ' + pointY + ') is INSIDE a circle K({0,0}, 5)');
        } else {

            jsConsole.writeLine('FALSE : P(' + pointX + ', ' + pointY + ') is OUTSIDE a circle K({0,0}, 5)');
        }
    } else {

        jsConsole.writeLine('ERROR : x or y is NOT a number');
    }
}