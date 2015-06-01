// Problem 4. Lexicographically smallest
//
// Write a script that finds the lexicographically smallest and largest property in document, window and navigator objects.

function findSmallestAndLargestProperty() {

    var objects = [document, window, navigator],
        idx,
        property,
        smallestProperty,
        biggestProperty;

    for (idx in objects) {

        for (property in objects[idx]) {

            smallestProperty = property;
            biggestProperty = property;
            break;
        }

        for (property in objects[idx]) {

            if (property < smallestProperty) {

                smallestProperty = property;
            }

            if (property > biggestProperty) {

                biggestProperty = property;
            }
        }

        jsConsole.writeLine(objects[idx]);
        jsConsole.writeLine('Smallest = ' + smallestProperty);
        jsConsole.writeLine('Biggest = ' + biggestProperty);
        jsConsole.writeLine(' ');
    }
}