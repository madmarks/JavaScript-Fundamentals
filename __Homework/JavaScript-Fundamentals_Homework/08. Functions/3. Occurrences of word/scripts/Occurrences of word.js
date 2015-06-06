// Problem 3. Occurrences of word
//
// Write a function that finds all the occurrences of word in a text.
// The search can be case sensitive or case insensitive.
// Use function overloading.

function printNumberOfWordOccurrences() {

    var text = jsConsole.read('#tb-text'),
        word = jsConsole.read('#tb-word');

    if (text !== '' && word !== '') {

        jsConsole.writeLine('Case SENSITIVE occurrences of word "' + word + '" in text : ' + findOccurrences(text, word, true));
        jsConsole.writeLine('Case INSENSITIVE occurrences of word "' + word + '" in text : ' + findOccurrences(text, word));

    } else {

        jsConsole.writeLine('ERROR : Text or Word box is empty!');
    }
}

function findOccurrences(str, word, isCaseSensitive) {

    str = str.replace(/,/g, ' ').replace(/\./g, ' ').replace(/\s+/g, ' ');

    function getWordCountCaseSensitive() {

        var i,
            arrWords = str.split(' '),
            len = arrWords.length,
            count = 0;

        for (i = 0; i < len; i += 1) {

            if (arrWords[i] === word) {

                count += 1;
            }
        }

        return count;
    }

    function getWordCountCaseInsensitive() {

        str = str.toLowerCase();
        word = word.toLowerCase();

        return getWordCountCaseSensitive();
    }

    switch (arguments.length) {

        case 2: return getWordCountCaseInsensitive();

        case 3: return isCaseSensitive ? getWordCountCaseSensitive() : getWordCountCaseInsensitive();
    }
}