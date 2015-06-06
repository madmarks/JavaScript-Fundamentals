// Problem 4. Number of elements
//
// Write a function to count the number of div elements on the web page

function getNumberOfDivElements() {

    return document.getElementsByTagName('div').length;
}

function printNumberOfDivElements() {

    jsConsole.writeLine('Number of \'div\' elements on the web page : ' + getNumberOfDivElements());
}