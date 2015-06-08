// Problem 3. Deep copy
//
// Write a function that makes a deep copy of an object.
// The function should work for both primitive and reference types.

function makeDeepCopy() {

    var deepCopiedObject = {},
        originalObject = {
            fName: 'Ivan',
            lName: 'Ivanov',
            age: 30,
            car: {
                model: 'Opel',
                age: 5
            }
        };

    jsConsole.writeLine('originalObject = ' + JSON.stringify(originalObject));
    jsConsole.writeLine('');

    deepCopiedObject = deepCopy(originalObject);
    jsConsole.writeLine('deepCopiedObject = deepCopy(originalObject);');
    jsConsole.writeLine('');

    jsConsole.writeLine('Modify originalObject : ');

    originalObject.fName = 'Petar';
    jsConsole.writeLine('originalObject.fName = \'Petar\';');

    originalObject.lName = 'Petrov';
    jsConsole.writeLine('originalObject.lName = \'Petrov\';');

    originalObject.car.model = 'Audi';
    jsConsole.writeLine('originalObject.car.model = \'Audi\';');

    jsConsole.writeLine('');

    jsConsole.writeLine('originalObject = ' + JSON.stringify(originalObject));
    jsConsole.writeLine('deepCopiedObject = ' + JSON.stringify(deepCopiedObject));
}

function deepCopy(obj) {

    var property,
        result = {};

    if ((typeof obj).toLowerCase() !== 'object') {

        return obj;
    }

    for (property in obj) {

        result[property] = deepCopy(obj[property]);
    }

    return result;
}