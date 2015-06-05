// Problem 1. Numbers
//
// Write a script that prints all the numbers from 1 to N.


/* global jsConsole */

function printNumbers() {

    var number = jsConsole.readInteger('#number');

    /* check for a remainder (if someone mistakenly put a float number) */
    var remainder = jsConsole.read('#number') % 1;

    if (!isNaN(number) && !remainder) {

        if (!number) {

            jsConsole.writeLine('Number must be greater than 0');
            return;
        }

        jsConsole.writeLine('Numbers from 1 to ' + number + ' :');

        var i;

        for (i = 1; i <= number; i += 1) {

            jsConsole.write(i);

            if(i !== number){

                jsConsole.write(', ');
            }
        }

        jsConsole.writeLine(' ');
  
    } else {

        jsConsole.writeLine('ERROR : ' + jsConsole.read('#number') + ' is NOT a number or is a FLOAT number');
    }
}