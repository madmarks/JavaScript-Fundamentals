// Problem 4. Has property
//
// Write a function that checks if a given object contains a given property.
//
//       var obj  = …;
//       var hasProp = hasProperty(obj, 'length');


function checkForProperty() {

    var propertyWeLookFor = jsConsole.read('#tb-property'),
        person = {
            fName: 'Ivan',
            lName: 'Ivanov',
            car: {
                brand: 'Lamborghini',
                model: 'Aventador',
                length: 4.8,
                topSpeed: 350
            },
            gender: 'male',
            address: {
                country: 'Bulgaria',
                city: 'Sofia',
                street: 'Aleksandar Malinov 31'
            },
            age: 30
        };

    jsConsole.writeLine('person = ' + JSON.stringify(person));
    jsConsole.writeLine('');

    jsConsole.write('Object \'person\' contains property = \'' + propertyWeLookFor + '\' : ');
    jsConsole.writeLine(hasProperty(person, propertyWeLookFor).toString().toUpperCase());

    jsConsole.writeLine('---------------------------------------------------------');
}

function hasProperty(obj, propertyWeLookFor) {

    var property;

    if ((typeof obj).toLowerCase() !== 'object') {

        return false;
    }

    for (property in obj) {

        if (property === propertyWeLookFor) {

            return true;
        }

        if ((typeof obj[property]).toLowerCase() === 'object') {

            if (hasProperty(obj[property], propertyWeLookFor)) {

                return true;
            }
        }
    }

    return false;
}