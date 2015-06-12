// Problem 2. HTML binding
//
// *  Write a function that puts the value of an object into the content/attributes of HTML tags. 
//     * Add the function to the String.prototype
//
// 
// Example 1 :
//  ____________________________________________________________________________________________________
// |                        input                        |                    output                    |
// |-----------------------------------------------------|----------------------------------------------|
// |  var str = '<div data-bind-content="name"></div>';  |                                              |
// |                                                     |  <div data-bind-content="name">Steven</div>  |
// |  str.bind(str, {name: 'Steven'});                   |                                              |
// |-----------------------------------------------------|----------------------------------------------|
//
// 
// Example 2 :
//  _____________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
// |                                                 input                                                 |                                                               output                                                                |
// |-------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------|
// |  var bindingString = '<a data-bind-content="name" data-bind-href="link" data-bind-class="name"></а>'  |                                                                                                                                     |
// |                                                                                                       |  <a data-bind-content="name" data-bind-href="link" data-bind-class="name" href="http://telerikacademy.com" class="Elena">Elena</а>  |
// |  str.bind(str, {name: 'Elena', link: 'http://telerikacademy.com'});                                   |                                                                                                                                     |
// |-----------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|


function htmlBinding() {

    var str = '<div data-bind-content="name"></div>',
        bindingString = '<a data-bind-content="name" data-bind-href="link" data-bind-class="name"></а>';

    String.prototype.bind = function (str, params) {
        var prop,
            regexHref,
            regexClass,
            regexContent,
            result = this;

        for (prop in params) {
            regexHref = new RegExp('(<.*?data-bind-href="' + prop + '".*?)>', 'g');
            regexClass = new RegExp('(<.*?data-bind-class="(' + prop + ')".*?)>', 'g');
            regexContent = new RegExp('(<.*?data-bind-content="' + prop + '".*?>)(.*?)(<\\s*/.*?>)', 'g');

            result = result.replace(regexContent, function (element, openingTag, content, closingTag) {
                return openingTag + params[prop] + closingTag;
            })
            .replace(regexHref, function (tag, content) {
                return content + ' href="' + params[prop] + '">';
            })
            .replace(regexClass, function (tag, content) {
                return content + ' class="' + params[prop] + '">';
            });
        }

        return result;
    };

    //String.prototype.bind = function (str, params) {

    //    var regex = new RegExp('data-bind-(.+?)="(.+?)"', 'g'),
    //        str = this,
    //        cont = '';

    //    str = str.replace(regex, function (all, type, value) {
    //        if (type == 'href') {
    //            return 'href="' + params[value] + '"';
    //        } else if (type == 'content') {
    //            cont = params[value];
    //            return '';
    //        }
    //            //Should work for every standard or custom attribute you supply!
    //        else {
    //            return type + '="' + params[value] + '"';
    //        }
    //    });
    //    if (cont != '') {
    //        str = str.replace('</', cont + '</');
    //    }
    //    return str;
    //};


    jsConsole.writeLine('var str = \'&lt;div data-bind-content="name"&gt;&lt;/div&gt;\';');
    jsConsole.writeLine('');

    jsConsole.writeLine('str.bind(str, { name: \'Steven\' });');
    jsConsole.writeLine('');
    jsConsole.write('output : ');

    jsConsole.writeLine(str.bind(str, { name: 'Steven' }).replace(/</g, '&lt;').replace(/>/g, '&gt;'));

    jsConsole.writeLine('---');

    //

    jsConsole.writeLine('var bindingString = \'&lt;a data-bind-content="name" data-bind-href="link" data-bind-class="name"&gt;&lt;/а&gt;\'');
    jsConsole.writeLine('');

    jsConsole.writeLine('str.bind(str, { name: \'Elena\', link: \'http://telerikacademy.com\' });');
    jsConsole.writeLine('');
    jsConsole.write('output : ');

    jsConsole.writeLine(bindingString.bind(bindingString, { name: 'Elena', link: 'http://telerikacademy.com' }).replace(/</g, '&lt;').replace(/>/g, '&gt;'));

    jsConsole.writeLine('------------------------------------------------------------');
}