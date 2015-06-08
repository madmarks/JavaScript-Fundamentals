// Problem 1. Planar coordinates
//
// Write functions for working with shapes in standard Planar coordinate system.
//     Points are represented by coordinates P(X, Y)
//     Lines are represented by two points, marking their beginning and ending L(P1(X1,Y1), P2(X2,Y2))
// Calculate the distance between two points.
// Check if three segment lines can form a triangle.


function printResult() {

    var lineAB,
        lineBD,
        lineCE,
        arrPointA = jsConsole.readNumbersArray('#tb-pointA', ','),
        arrPointB = jsConsole.readNumbersArray('#tb-pointB', ','),
        arrPointC = jsConsole.readNumbersArray('#tb-pointC', ','),
        arrPointD = jsConsole.readNumbersArray('#tb-pointD', ','),
        arrPointE = jsConsole.readNumbersArray('#tb-pointE', ','),
        pointA = new Point(arrPointA[0], arrPointA[1]),
        pointB = new Point(arrPointB[0], arrPointB[1]),
        pointC = new Point(arrPointC[0], arrPointC[1]),
        pointD = new Point(arrPointD[0], arrPointD[1]),
        pointE = new Point(arrPointE[0], arrPointE[1]);

    lineAB = distanceBetweenTwoPoints(pointA, pointB);
    lineBD = distanceBetweenTwoPoints(pointB, pointD);
    lineCE = distanceBetweenTwoPoints(pointC, pointE);    

    jsConsole.write('distance between points A(' + pointA.x + ', ' + pointA.y + ') and B(' + pointB.x + ', ' + pointB.y + ') : ');
    jsConsole.writeLine(lineAB.toFixed(3));

    jsConsole.write('distance between points B(' + pointB.x + ', ' + pointB.y + ') and D(' + pointD.x + ', ' + pointD.y + ') : ');
    jsConsole.writeLine(lineBD.toFixed(3));

    jsConsole.write('distance between points C(' + pointC.x + ', ' + pointC.y + ') and E(' + pointE.x + ', ' + pointE.y + ') : ');
    jsConsole.writeLine(lineCE.toFixed(3));

    jsConsole.writeLine('Lines AB, BD and CE can form a triangle : ' + isTrianglePossible(lineAB, lineBD, lineCE).toString().toUpperCase());

    jsConsole.writeLine('------------------------------------------------------');
}

function Point(x, y) {
    this.x = x;
    this.y = y;
}

function Line(p1, p2) {
    this.p1 = p1;
    this.p2 = p2;

    this.length = function () {

        return Math.sqrt((this.p2.x - this.p1.x) * (this.p2.x - this.p1.x) + (this.p2.y - this.p1.y) * (this.p2.y - this.p1.y));
    }
}

function distanceBetweenTwoPoints(p1, p2) {

    return (new Line(p1, p2)).length();
}

function isTrianglePossible(a, b, c) {

    if (a + b > c && b + c > a && c + a > b) {

        return true;

    } else {

        return false;
    }
}

