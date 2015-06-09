// Problem 1. Make person
//
// * Write a function for creating persons.
//    * Each person must have **firstname**, **lastname**, **age** and **gender** (true is female, false is male)
// * Generate an array with ten person with different names, ages and genders


function generatePeopleArray() {

    var people = getArrayOfPersons(10, 18, 50);

    jsConsole.writeLine('Array with 10 persons : ');

    people.forEach(function (person) {
        jsConsole.writeLine(person.toString());
    });

    jsConsole.writeLine('----------------------------------------------');
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