// Problem 5. Appearance count
//
// Write a function that counts how many times given number appears in given array.
// Write a test function to check if the function is working correctly.


/* global jsConsole */

function printResult() {

    var number = jsConsole.readFloat('#tb-number'),
        array = jsConsole.readNumbersArray('#tb-array', ',');

    if (jsConsole.read('#tb-number') !== '' && jsConsole.read('#tb-array') !== '') {

        if (isArrayOfNumbers(array) && !isNaN(number)) {

            jsConsole.writeLine(number + ' appears in an array ' + getNumberOfOccurrences(array, number) + ' times');

            if (testGetNumberOfOccurrences()) {

                jsConsole.writeLine('Test : PASS');

            } else {

                jsConsole.writeLine('Test : FAILED');
            }

        } else {

            jsConsole.writeLine('ERROR : Array or Number boxes contains NaN elements!');
        }

    } else {

        jsConsole.writeLine('ERROR : Array or Number boxes are empty!');
    }
}

function getNumberOfOccurrences(array, number) {

    var i,
        len,
        count = 0;

    for (i = 0, len = array.length; i < len; i += 1) {

        if (array[i] === number) {

            count += 1;
        }
    }

    return count;
}

function testGetNumberOfOccurrences() {

    var i,
        len,
        testArray = [4, 1.05, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3, 7, 5, 3, 1.05, 8],
        results = [[4, 5], [1.05, 2], [1, 2], [2, 2], [3, 3], [9, 1], [7, 1], [8, 1], [11,0]];

    for (i = 0, len = results.length; i < len; i += 1) {

        if (getNumberOfOccurrences(testArray, results[i][0]) !== results[i][1]) {

            return false;
        }
    }

    return true;
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