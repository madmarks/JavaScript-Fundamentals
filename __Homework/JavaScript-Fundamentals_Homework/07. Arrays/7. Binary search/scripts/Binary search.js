// Problem 7. Binary search
//
// Write a script that finds the index of given element in a sorted array of integers by using the binary search algorithm.


/* global jsConsole */

function binarySearchIndexOfElement() {

    var element = jsConsole.readInteger('#element');

    if (jsConsole.read('#arr') !== '' && jsConsole.read('#element') !== '' && !isNaN(element)) {

        var arr = (jsConsole.read('#arr')).split(','),
            sortedArr = [],
            indexOfElement,
            i;

        for (i = 0; i < arr.length; i += 1) {

            arr[i] = parseInt(arr[i]);
        }

        sortedArr = arr.slice();
        sortedArr.sort(function (a, b) { return a - b }); // Sort numbers in an array in ascending order

        jsConsole.writeLine('Array = [' + arr + ']');
        jsConsole.writeLine('Sorted = [' + sortedArr + ']');
        jsConsole.writeLine('');

        indexOfElement = binarySearch(sortedArr, element);

        if (indexOfElement !== -1) {

            jsConsole.writeLine('The index of element ' + element + ' in Sorted array is: ' + indexOfElement);

        } else {

            jsConsole.writeLine('Your element doesn\'t exist in the sequence!');
        }
    } else {

        jsConsole.writeLine('ERROR : Array or/and Element is empty or NaN!');
    }
}

function binarySearch(array, lookingFor) {

    var min = 0,
        max = array.length - 1,
        middle;

    while (min <= max) {

        middle = ((min + max) / 2) | 0;

        if (array[middle] === lookingFor) {

            return middle;

        } else if (array[middle] > lookingFor) {

            max = middle - 1;

        } else {

            min = middle + 1;
        }
    }

    return -1;
}