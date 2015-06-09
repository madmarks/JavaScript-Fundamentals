// Problem 3. Underage people 
//
// * Write a function that prints all underaged persons of an array of person
//     * Use **Array#filter** and **Array#forEach**
//     * Use **only array methods** and no regular loops (for, while)


function printAllUnderagedPersons() {

    var allUnderagedPersons,
        people = getArrayOfPersons(10, 13, 35);

    jsConsole.writeLine('Array with 10 persons : ');
    jsConsole.writeLine('');

    printArrayOfPersons(people);
    jsConsole.writeLine('');

    allUnderagedPersons = getAllUnderagedPersons(people);

    jsConsole.writeLine('Array of all underaged persons : ');
    printArrayOfPersons(allUnderagedPersons);

    jsConsole.writeLine('-----------------------------------------------------------------------------');
}

function getAllUnderagedPersons(people) {

    function isUnderaged(item) {
        return item.age < 18;
    }

    return people.filter(isUnderaged);
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