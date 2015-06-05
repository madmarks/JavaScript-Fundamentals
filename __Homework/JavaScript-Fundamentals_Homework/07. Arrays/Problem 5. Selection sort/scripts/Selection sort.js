// Problem 5. Selection sort
//
// Sorting an array means to arrange its elements in increasing order.  [7, 1, 31, 14, 2, 12, 4, 5, 3, 9, 6, 11] -> [1, 2, 3, 4, 5, 6, 7, 9, 11, 12, 14, 31]
// Write a script to sort an array.
// Use the selection sort algorithm: Find the smallest element, move it at the first position, find the smallest from the rest, move it at the second position, etc.


/* global jsConsole */

function selectionSort() {

    if (jsConsole.read('#arr') !== '') {

        var arr = (jsConsole.read('#arr')).split(','),
            len = arr.length,
            i, j,
            indexOfMin,
            sorted = [];

        for (i = 0; i < len; i += 1) {

            arr[i] = parseInt(arr[i]);
        }

        jsConsole.writeLine('array = [' + arr + ']');
        jsConsole.writeLine('');

        for (i = 0; i < len; i += 1) {

            indexOfMin = i;

            for (j = i + 1; j < len; j += 1) {

                if (arr[j] < arr[indexOfMin]) {

                    indexOfMin = j;
                }
            }

            sorted.push(arr[indexOfMin]);
            arr[indexOfMin] = arr[i];
        }

        jsConsole.writeLine('sorted = [' + sorted + ']');
        jsConsole.writeLine('');

    } else {

        jsConsole.writeLine('ERROR : Array is empty');
    }
}