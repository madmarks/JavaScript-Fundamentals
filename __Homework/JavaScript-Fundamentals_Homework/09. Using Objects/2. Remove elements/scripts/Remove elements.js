// Problem 2. Remove elements
//
// Write a function that removes all elements with a given value.
// Attach it to the array type.
// Read about **prototype** and how to attach methods.
//
//		var arr = [1,2,1,4,1,3,4,1,111,3,2,1,'1'];
//		arr.remove(1); //arr = [2,4,3,4,111,3,2,'1'];


function removeAllWithGivenValue() {

    var elementToRemove = 1,
        arr = [1, 2, 1, 4, 1, 3, 4, 1, 111, 3, 2, 1, "1"];

    jsConsole.writeLine('arr = ' + JSON.stringify(arr));

    jsConsole.writeLine('element to remove = ' + elementToRemove);

    arr.remove(elementToRemove);

    jsConsole.writeLine('arr.remove(' + elementToRemove + ') = ' + JSON.stringify(arr));
    jsConsole.writeLine('-------------------------------------------------');
}

Array.prototype.remove = function (element) {

    var index;

    while ((index = this.indexOf(element)) !== -1) {

        this.splice(index, 1);
    }
}