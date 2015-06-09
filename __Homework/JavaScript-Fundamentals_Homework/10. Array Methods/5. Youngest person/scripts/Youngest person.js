// Problem 5. Youngest person
//
// * Write a function that finds the youngest male person in a given array of people and prints his full name
//     * Use **only array methods** and no regular loops (for, while)
//     * Use **Array#find**


function printYoungestMale() {

    var allMales,
        youngestMale,
        people = getArrayOfPersons(10, 15, 50);

    jsConsole.writeLine('Array with 10 persons : ');
    jsConsole.writeLine('');

    printArrayOfPersons(people);
    jsConsole.writeLine('');

    allMales = getAllMales(people);

    jsConsole.writeLine('All males : ');
    printArrayOfPersons(allMales);
    jsConsole.writeLine('');

    youngestMale = getYoungestMale(allMales);
    
    jsConsole.writeLine('Youngest male : ' + youngestMale.firstname + ' ' + youngestMale.lastname);
    
    jsConsole.writeLine('------------------------------------------------------------');
}

function getAllMales(people) {

    function isMale(item) {
        return !item.gender;
    }

    return people.filter(isMale);
}

function getYoungestMale(people) {

    if (!Array.prototype.find) {

        Array.prototype.find = function (callback) {

            var i,
                len;

            for (i = 0, len = this.length; i < len; i += 1) {

                if (callback(this[i], i, this)) {

                    return this[i];
                }
            }

            return undefined;
        };
    }

    return people
        .sort(function (p1, p2) {
        return p1.age > p2.age;
        })
        .find(function (item, index) {
            return !index;
        });
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
        femaleFirstNames = ['Anna', 'Iliana', 'Petja', 'Elica', 'Elena', 'Gergana', 'Rosica', 'Vesela'],
        femaleLastNames = ['Ivanova', 'Ilieva', 'Dimitrova', 'Kostova', 'Petrova', 'Koleva', 'Taneva'],
        maleFirstNames = ['Doncho', 'Nikolay', 'Ivaylo', 'Pavel', 'Sergej', 'Blagovest', 'Georgi', 'Vladimir', 'Stefan'],
        maleLastNames = ['Minkov', 'Kostov', 'Kenov', 'Krasev', 'Sendov', 'Petrov', 'Iliev', 'Markov', 'Cvetkov'];

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