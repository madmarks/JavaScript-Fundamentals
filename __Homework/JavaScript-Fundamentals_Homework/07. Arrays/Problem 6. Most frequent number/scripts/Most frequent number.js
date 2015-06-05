// Problem 6. Most frequent number
//
// Write a script that finds the most frequent number in an array.  [4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3] -> 4 (5 times)


/* global jsConsole */

function mostFrequentNumber() {

    if (jsConsole.read('#arr') !== '') {

        var arr = (jsConsole.read('#arr')).split(','),
            len = arr.length,
            i, j,
            counter = 1,
            mostFrequentElement,
            indexOfNextOccurrence,
            maxOccurrences = 1;

        for (i = 0; i < len; i += 1) {

            arr[i] = parseInt(arr[i]);
        }

        jsConsole.writeLine('array = [' + arr + ']');
        jsConsole.writeLine('');

        for (i = 0; i < len; i += 1) {

            for (j = i + 1, counter = 1; j < len;) {

                indexOfNextOccurrence = arr.indexOf(arr[i], j);

                if (indexOfNextOccurrence !== -1) {

                    counter += 1;
                    j = indexOfNextOccurrence + 1;

                    if (counter > maxOccurrences) {

                        maxOccurrences = counter;
                        mostFrequentElement = arr[i];
                    }
                } else {

                    break;
                }
            }
        }

        jsConsole.writeLine('The most frequent number in an array is : ' + mostFrequentElement + ' (' + maxOccurrences + ' times)');
        jsConsole.writeLine('');

    } else {

        jsConsole.writeLine('ERROR : Array is empty');
    }
}