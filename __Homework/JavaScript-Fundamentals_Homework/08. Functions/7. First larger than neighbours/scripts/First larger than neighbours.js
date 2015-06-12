// Problem 7. First larger than neighbours
//
// Write a function that returns the index of the first element in array that is larger than its neighbours or -1, if there’s no such element.
// Use the function from the previous exercise.


/* global jsConsole */

function printResult() {

    var index,
        result,
        array = jsConsole.readNumbersArray('#tb-array', ',');

    if (jsConsole.read('#tb-array') !== '' && isArrayOfNumbers(array)) {

        result = getIndexOfFirstElementBiggerThanItsNeighbours(array);

        if (result !== -1) {

            jsConsole.write('Index of the first element in array that is bigger than its two neighbours is : ');
            jsConsole.writeLine(result);

        } else {

            jsConsole.writeLine('NO such element in array that is bigger than its two neighbours!');
        }

    } else {

        jsConsole.writeLine('ERROR : Array is empty or contains elements that are NaN\'s!');
    }
}

function getIndexOfFirstElementBiggerThanItsNeighbours(array) {

    var i,
        len;

    for (i = 1, len = array.length - 1; i < len; i += 1) {

        if (isElementBiggerThanItsNeighbours(array, i)) {

            return i;
        }
    }

    return -1;
}

function isElementBiggerThanItsNeighbours(array, index) {

    if (array[index - 1] < array[index] && array[index] > array[index + 1]) {

        return true;

    }

    return false;
}

function isArrayOfNumbers(array) {

    var i,
        len = array.length;

    if (!len) {
        return false;
    }

    for (i = 0; i < len; i += 1) {

        if (isNaN(array[i])) {
            return false;
        }
    }

    return true;
}