// Problem 2. People of age
//
// * Write a function that checks if an array of person contains only people of age (with age 18 or greater)
//     * Use **only array methods** and no regular loops (for, while)


function check() {

    var greaterOrEqualThanEighteen,
        people = getArrayOfPersons(10, 16, 40);

    jsConsole.writeLine('Array with 10 persons : ');
    jsConsole.writeLine('');

    printArrayOfPersons(people);
    jsConsole.writeLine('');

    greaterOrEqualThanEighteen = isEveryPersonAgeGreaterOrEqualThan(people, 18);

    jsConsole.writeLine('Array of persons contains only people with age 18 or greater : ' + greaterOrEqualThanEighteen.toString().toUpperCase());

    jsConsole.writeLine('-----------------------------------------------------------------------------');
}

function isEveryPersonAgeGreaterOrEqualThan(people, age) {

    return people.every(function (person) {
        return person.age >= age;
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