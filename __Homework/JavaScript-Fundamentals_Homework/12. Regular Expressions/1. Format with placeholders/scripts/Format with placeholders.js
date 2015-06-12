// Problem 1. Format with placeholders
//
// * Write a function that formats a string. The function should have placeholders, as shown in the example
//     * Add the function to the **String.prototype**
//
// 
// _Example:_
//
//  ________________________________________________________________________________________________________________
// |                               input                                |                   output                  |
// |--------------------------------------------------------------------|-------------------------------------------|
// |  var options = {name: 'John'};                                     |                                           |
// |                                                                    |  'Hello, there! Are you John'             |
// |  'Hello, there! Are you #{name}?'.format(options);                 |                                           |
// |--------------------------------------------------------------------|-------------------------------------------|
// |  var options = {name: 'John', age: 13};                            |                                           |
// |                                                                    |  'My name is John and I am 13-years-old'  |
// |  'My name is #{name} and I am #{age}-years-old'.format(options);  |                                           |
// |----------------------------------------------------------------------------------------------------------------|


function printFormattedString() {

    var options;

    String.prototype.format = function (options) {

        // (x)  -> Matches 'x' and remembers the match.
        //
        // (?:x) -> Matches 'x' but does not remember the match.

        // When you create a regular expression you have the option of capturing portions of the match and saving them as placeholders ($1, $2, ... $9)
        //
        // num = "11222333";
        //
        // This regex captures the last 3 digits as capture group $2 and all preceding digits as capture group $1
        // re = /(\d+)(\d{3})/;
        //

        // $0 is the entire matched string (#{name} , #{age}),
        // $1 is the first remembered, because of (\w+), capture group (name , age)

        //return this.replace(/(?:#{(\w+)})/g, function ($0, $1) {
        return this.replace(/#{(\w+)}/g, function ($0, $1) {

            return options[$1];
        });
    }

    //String.prototype.customFormat = function (options) {
    //    var str = this.toString(),
    //        regex;
    //    for (var prop in options) {
    //        regex = new RegExp('\#\{' + prop + '\}', 'g');
    //        str = str.replace(regex, options[prop]);
    //    }

    //    return str;
    //};
    
    jsConsole.writeLine('var options = {name: \'John\'};');
    jsConsole.writeLine('');

    jsConsole.writeLine('\'Hello, there! Are you #{name}?\'.format(options);');
    jsConsole.writeLine('');
    jsConsole.write('output : ');
    options = { name: 'John' };
    jsConsole.writeLine('Hello, there! Are you #{name}?'.format(options));
    
    jsConsole.writeLine('---');

    jsConsole.writeLine('var options = {name: \'John\', age: 13}; ');
    jsConsole.writeLine('');

    jsConsole.writeLine('\'My name is #{name} and I am #{age}-years-old\'.format(options);');
    jsConsole.writeLine('');
    jsConsole.write('output : ');
    options = { name: 'John', age: 13 };
    jsConsole.writeLine('My name is #{name} and I am #{age}-years-old'.format(options));
  
    jsConsole.writeLine('------------------------------------------------------------');
}