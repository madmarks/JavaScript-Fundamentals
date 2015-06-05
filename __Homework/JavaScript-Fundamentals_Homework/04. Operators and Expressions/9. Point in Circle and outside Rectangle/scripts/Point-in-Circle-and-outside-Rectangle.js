// Problem 9. Point in Circle and outside Rectangle
//
// Write an expression that checks for given point P(x, y) if it is within the circle K((1,1), 3) and out of the rectangle R(top=1, left=-1, width=6, height=2).

function isInsideK_and_OutsideOfR() {

    var pointX = jsConsole.readFloat('#pointX');
    var pointY = jsConsole.readFloat('#pointY');

    var radius = 3;
    var squareOfRadius = radius * radius;

    if (!isNaN(pointX) && !isNaN(pointY)) {

        var squareOfZ = ((pointX - 1) * (pointX - 1)) + ((pointY - 1) * (pointY - 1));
        var isInsideOfCircle = squareOfZ <= squareOfRadius;

        var isOutOfRectangle = (pointX < -1 || pointX > 5) || (pointY < -1 || pointY > 1);

        if (isInsideOfCircle && isOutOfRectangle) {

            jsConsole.writeLine('YES : P(' + pointX + ', ' + pointY + ') is INSIDE the circle K((1,1), 3) and OUT of the rectangle R(top=1, left=-1, width=6, height=2)');
        } else {

            jsConsole.writeLine('NO : P(' + pointX + ', ' + pointY + ') is OUTSIDE the circle K((1,1), 3) or INSIDE the rectangle R(top=1, left=-1, width=6, height=2)');
        }
    } else {

        jsConsole.writeLine('ERROR : x or y is NOT a number');
    }
}