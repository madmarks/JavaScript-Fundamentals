// Problem 3. Maximal sequence
//
// Write a script that finds the maximal sequence of equal elements in an array.  [2, 1, 1, 2, 3, 3, 2, 2, 2, 1] -> [2, 2, 2]


/* global jsConsole */

function findMaximalSequence() {

    if (jsConsole.read('#arr') !== '') {

        var arr = (jsConsole.read('#arr')).split(','),
            len = arr.length,
            i,
            maxSequence = 1,
            maxSequenceElement = arr[0] | 0,
            maxSequenceArray = [],
            counter = 1;

        for (i = 0; i < len; i += 1) {

            arr[i] = parseInt(arr[i]);
        }

        jsConsole.writeLine('arr = [' + arr + ']');
        jsConsole.writeLine('');

        for (i = 0; i < len - 1; i += 1) {

            if (arr[i] === arr[i + 1]) {

                counter += 1;

                if (counter > maxSequence) {

                    maxSequence = counter;
                    maxSequenceElement = arr[i + 1];
                }
            } else {

                counter = 1;
            }
        }

        for (i = 0; i < maxSequence; i += 1) {

            maxSequenceArray.push(maxSequenceElement);
        }

        jsConsole.writeLine('maximal sequence of equal elements = [' + maxSequenceArray + ']');
        jsConsole.writeLine('');

    } else {

        jsConsole.writeLine('ERROR : Array is empty');
    }
}