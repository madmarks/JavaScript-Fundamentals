// Problem 6. Group people
//
// * Write a function that groups an array of persons by first letter of first name and returns the groups as a JavaScript Object
//     * Use **Array#reduce**
//     * Use **only array methods** and no regular loops (for, while)
//
//  _Example:_
//
//    result = {
//        'a': [{
//            firstname: 'Asen',
//            /* ... */
//        }, {
//            firstname: 'Anakonda',
//            /* ... */
//        }],
//        'j': [{
//            firstname: 'John',
//            /* ... */
//        }]
//    };


function print() {

    var people = getArrayOfPersons(10, 15, 50);

    jsConsole.writeLine('Array with 10 persons : ');
    jsConsole.writeLine('');

    printArrayOfPersons(people);
    jsConsole.writeLine('');

    jsConsole.writeLine('Grouped by first letter of first name : ');

    jsConsole.write('result = ');
    printAssociativeArray(groupByFirstLetterOfFirstName(people));

    jsConsole.writeLine('------------------------------------------------------------');
}

function printAssociativeArray(associativeArray) {

    var i,
        len,
        key,
        firstKey = true;

    jsConsole.writeLine('{');

    for (key in associativeArray) {

        if (!firstKey) {
            jsConsole.writeLine(',');
        } else {
            firstKey = false;
        }

        jsConsole.write('"' + key + '" : ');

        for (i = 0, len = associativeArray[key].length; i < len; i += 1) {

            if (i > 0) {
                jsConsole.writeLine(',');
                jsConsole.writeSpaces(7);
            } else {
                jsConsole.write('[');
            }

            jsConsole.write(JSON.stringify(associativeArray[key][i]));
        }

        jsConsole.write(']');
    }

    jsConsole.writeLine('');
    jsConsole.writeLine('}');
}

function compareFirstName(a, b) {
    if (a.firstname < b.firstname) {

        return -1;
    }

    if (a.firstname > b.firstname) {

        return 1;
    }

    return 0;
}

function groupByFirstLetterOfFirstName(people) {

    return people
        .sort(compareFirstName)
        .reduce(function (groups, person) {

            if (groups[person.firstname[0].toLowerCase()]) {

                groups[person.firstname[0].toLowerCase()].push(person);

            } else {

                groups[person.firstname[0].toLowerCase()] = [person];
            }

            return groups;
        }, {});
}

function printArrayOfPersons(people) {

    people.forEach(function (person) {
        jsConsole.writeLine(person.toString());
    });
}

function getArrayOfPersons(number, fromAge, toAge) {

    var i,
        firstName,
        lastName,
        age,
        arrayOfPersons = [],
        femaleFirstNames = ['Anna', 'Iliana', 'Petja', 'Elica', 'Elena', 'Gergana', 'Rosica', 'Vesela', 'Anita'],
        femaleLastNames = ['Ivanova', 'Ilieva', 'Dimitrova', 'Kostova', 'Petrova', 'Koleva', 'Taneva', 'Borisova'],
        maleFirstNames = ['Doncho', 'Nikolay', 'Ivaylo', 'Pavel', 'Sergej', 'Blagovest', 'Georgi', 'Vladimir', 'Stefan'],
        maleLastNames = ['Minkov', 'Kostov', 'Kenov', 'Krasev', 'Sendov', 'Petrov', 'Iliev', 'Markov', 'Cvetkov', 'Borisov'];

    for (i = 0; i < number; i++) {

        if (getRandomInt(0, 1)) {

            // female

            firstName = femaleFirstNames[getRandomInt(0, femaleFirstNames.length - 1)];
            lastName = femaleLastNames[getRandomInt(0, femaleLastNames.length - 1)];
            age = getRandomInt(fromAge, toAge);

            arrayOfPersons.push(new Person(firstName, lastName, age, true));

        } else {

            // male

            firstName = maleFirstNames[getRandomInt(0, maleFirstNames.length - 1)];
            lastName = maleLastNames[getRandomInt(0, maleLastNames.length - 1)];
            age = getRandomInt(fromAge, toAge);

            arrayOfPersons.push(new Person(firstName, lastName, age, false));
        }
    }

    return arrayOfPersons;
}

function Person(firstname, lastname, age, gender) {

    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
    this.gender = gender;
    this.toString = function () {
        return 'Name: ' + this.firstname + ' ' + this.lastname + ', age: ' + this.age + ', gender: ' + (this.gender ? 'female' : 'male');
    }
}

// Returns a random integer between min (inclusive) and max (inclusive)
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}