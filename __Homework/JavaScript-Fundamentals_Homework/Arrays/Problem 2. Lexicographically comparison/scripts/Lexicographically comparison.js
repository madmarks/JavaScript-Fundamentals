// Problem 2. Lexicographically comparison
//
// Write a script that compares two char arrays lexicographically (letter by letter).


/* global jsConsole */

function compareCharArrays() {

    if (jsConsole.read('#arr-A') !== '' && jsConsole.read('#arr-B') !== '') {

        var arrA = (jsConsole.read('#arr-A')).split(''),
            arrB = (jsConsole.read('#arr-B')).split(''),
            len = Math.min(arrA.length, arrB.length),
            i;

        jsConsole.writeLine('array-A = [' + arrA + ']');
        jsConsole.writeLine('array-B = [' + arrB + ']');
        jsConsole.writeLine('');

        for (i = 0; i < len; i += 1) {

            if (arrA[i] < arrB[i]) {

                jsConsole.writeLine('array-A is lexicographically smaller');
                return;

            } else if (arrB[i] < arrA[i]) {

                jsConsole.writeLine('array-B is lexicographically smaller');
                return;
            }
        }

        if (arrA.length === arrB.length) {

            jsConsole.writeLine('Both arrays are equal.');

        } else if (arrA.length < arrB.length) {

            jsConsole.writeLine('array-A is lexicographically smaller');

        } else {

            jsConsole.writeLine('array-B is lexicographically smaller');
        }

    } else {

        jsConsole.writeLine('ERROR : Array A or/and Array B is empty');
    }
}