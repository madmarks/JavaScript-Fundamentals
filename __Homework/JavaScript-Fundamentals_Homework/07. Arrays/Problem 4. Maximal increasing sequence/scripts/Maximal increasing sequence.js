// Problem 4. Maximal increasing sequence
//
// Write a script that finds the maximal increasing sequence in an array.  [3, 2, 3, 4, 2, 2, 4] -> [2, 3, 4]


/* global jsConsole */

function findMaximalIncreasingSequence() {

    if (jsConsole.read('#arr') !== '') {

        var arr = (jsConsole.read('#arr')).split(','),
            len = arr.length,
            i, j,
            maxIncreasingSequence = 1,
            maxIncreasingSequenceArray = [arr[0] | 0],
            counter = 1;

        for (i = 0; i < len; i += 1) {

            arr[i] = parseInt(arr[i]);
        }

        jsConsole.writeLine('arr = [' + arr + ']');
        jsConsole.writeLine('');

        for (i = 0; i < len - 1; i += 1) {

            for (j = i + 1, counter = 1; j < len; j += 1) {

                //if (arr[j - 1] < arr[j]) {
                if (arr[i] + j - i === arr[j]) {  // Taka, chislata tryabva da sa poredni               

                    counter += 1;

                    if (counter > maxIncreasingSequence) {

                        maxIncreasingSequence = counter;
                        maxIncreasingSequenceArray = arr.slice(i, j + 1);
                    }

                } else {

                    break;
                }
            }
        }

        jsConsole.writeLine('maximal increasing sequence = [' + maxIncreasingSequenceArray + ']');
        jsConsole.writeLine('');

    } else {

        jsConsole.writeLine('ERROR : Array is empty');
    }
}