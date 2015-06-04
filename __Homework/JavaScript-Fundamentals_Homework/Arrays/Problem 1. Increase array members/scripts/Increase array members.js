// Problem 1. Increase array members
//
// Write a script that allocates array of 20 integers and initializes each element by its index multiplied by 5.
// Print the obtained array on the console.


/* global jsConsole */

function printArray() {

    var i,
        len = 20,
        arr = new Array(len);
        
    for (i = 0; i < len; i += 1) {

        arr[i] = i * 5;
    }

    jsConsole.writeLine('arr = [' + arr.join(', ') + ']');
}