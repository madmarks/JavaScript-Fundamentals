// Problem 3. Min/Max of sequence
//
// Write a script that finds the max and min number from a sequence of numbers.

function findMinAndMaxNumbers() {

    var sequence = jsConsole.read('#numbers'),
        numbers = sequence.split(','),
        i;

    if(isNaN(numbers[0]) || numbers[0] === ''){

        jsConsole.writeLine('Input sequence of numbers! (comma separated)');
        return;
    }

    var min = max = numbers[0] * 1; 

    for (i = 1; i < numbers.length; i += 1) {

        if (!isNaN(numbers[i])) {

            if (numbers[i] < min) {

                min = numbers[i] * 1;
            }

            if (numbers[i] > max) {

                max = numbers[i] * 1;
            }

        } else {

            jsConsole.writeLine('ERROR : ' + numbers[i] + ' is NOT a number. Check your sequence of numbers!');
            return;
        }  
    }

    jsConsole.writeLine('The MIN number is: ' + min);
    jsConsole.writeLine('The MAX number is: ' + max);
}