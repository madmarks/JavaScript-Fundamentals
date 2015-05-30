// Problem 3. Rectangle area
//
// Write an expression that calculates rectangle’s area by given width and height.

function calculateArea() {

    var width = jsConsole.readFloat('#width');
    var height = jsConsole.readFloat('#height');

    if (!isNaN(width) || !isNaN(height)) {

        var area = width * height;

        jsConsole.writeLine('The area is: ' + area);
    } else {

        jsConsole.writeLine('Check Width and Height!');
    }
}