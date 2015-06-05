// Problem 8. Number as words
//
// Write a script that converts a number in the range [0…999] to words, corresponding to its English pronunciation.

function numberAsWords() {

    var number = jsConsole.readInteger('#number');

    // check for a remainder (if someone mistakenly put a float number)
    var remainder = jsConsole.read('#number') % 1;

    if (!isNaN(number) && !remainder) {

        jsConsole.write('Number = ' + number + ' | Number as words: ');

        var hundreds = (number / 100) | 0,
            tens = ((number / 10) | 0) % 10,
            ones = number % 10,
            result = '';

        if (!!hundreds) {

            result += getWordOfNumber(hundreds) + ' hundred ';

            if (!!tens || !!ones) {

                result += 'and ';
            }
        }

        if (!!tens || !!ones) {

            if (tens >= 2) {

                result += getWordOfNumber(tens * 10);

                if (!!ones) {

                    result += ' ' + getWordOfNumber(ones);
                }

            } else {

                result += getWordOfNumber(tens * 10 + ones);
            }

        } else {

            if (!hundreds) {

                result += getWordOfNumber(0);
            }
        }

        jsConsole.writeLine(result.charAt(0).toUpperCase() + result.substring(1));

    } else {

        jsConsole.writeLine('ERROR : ' + jsConsole.read('#number') + ' is NOT a number or is a FLOAT number');
    }
}

function getWordOfNumber(number) {

    switch (number) {
        case 0: return 'zero';
        case 1: return 'one'; 
        case 2: return 'two'; 
        case 3: return 'three';
        case 4: return 'four';
        case 5: return 'five';
        case 6: return 'six'; 
        case 7: return 'seven';
        case 8: return 'eight';
        case 9: return 'nine';

        case 10: return 'ten';
        case 11: return 'eleven';
        case 12: return 'twelve';
        case 13: return 'thirteen';
        case 14: return 'fourteen';
        case 15: return 'fifteen';
        case 16: return 'sixteen';
        case 17: return 'seventeen';
        case 18: return 'eighteen';
        case 19: return 'nineteen';

        case 20: return 'twenty';
        case 30: return 'thirty';
        case 40: return 'forty';
        case 50: return 'fifty';
        case 60: return 'sixty';
        case 70: return 'seventy';
        case 80: return 'eighty';
        case 90: return 'ninety';

        default: return '';
    }
}