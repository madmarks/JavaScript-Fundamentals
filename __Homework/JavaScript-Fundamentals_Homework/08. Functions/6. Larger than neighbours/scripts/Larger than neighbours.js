// Problem 6. Larger than neighbours
//
// Write a function that checks if the element at given position in given array of integers is bigger than its two neighbours (when such exist).


/* global jsConsole */

function printResult() {

    var index = jsConsole.readInteger('#tb-index'),
        array = jsConsole.readNumbersArray('#tb-array', ','),
        remainder = jsConsole.read('#tb-index') % 1;           // check for a remainder (if someone mistakenly put a float number)

    if (jsConsole.read('#tb-index') !== '' && jsConsole.read('#tb-array') !== '') {

        if (isArrayOfIntegerNumbers(array) && !isNaN(index) && !remainder) {

            if (index === 0 || index === (array.length - 1)) {

                jsConsole.writeLine('Element ' + array[index] + ' at position ' + index + ' doesn\'t have 2 neighbours');

            } else if (index < 0 || index > (array.length - 1)) {

                jsConsole.writeLine('Index ' + index + ' is INVALID');

            } else {

                jsConsole.write('Element ' + array[index] + ' at position ' + index + ' is bigger than its two neighbours : ');
                jsConsole.writeLine(isElementBiggerThanItsNeighbours(array, index).toString().toUpperCase());
            }

        } else {

            jsConsole.writeLine('ERROR : Integers Array contains NaN elements or Index is not Integer!');
        }

    } else {

        jsConsole.writeLine('ERROR : Array or Index boxes are empty!');
    }
}

function isElementBiggerThanItsNeighbours(array, index) {

    if (array[index - 1] < array[index] && array[index] > array[index + 1]) {

        return true;

    } else {

        return false;
    }
}

function isArrayOfIntegerNumbers(array) {

    var i,
        reminder,
        len = array.length;

    if (!len) {
        return false;
    }

    for (i = 0; i < len; i += 1) {

        remainder = array[i] % 1; // check for a remainder (if someone mistakenly put a float number)

        if (isNaN(array[i]) || !!remainder) {
            return false;
        }
    }

    return true;
}