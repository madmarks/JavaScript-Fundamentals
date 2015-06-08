// Problem 5. Youngest person
//
// * Write a function that finds the youngest person in a given array of people and prints his/hers full name
// * Each person has properties firstname, lastname and age.
//
// Example:
//
// var people = [
//     { firstname : 'Gosho', lastname: 'Petrov', age: 32 }, 
//     { firstname : 'Bay', lastname: 'Ivan', age: 81},… ];


function printYoungest() {

    var p1 = new Person('Gosho', 'Petrov', 32),
        p2 = new Person('Ivan', 'Ivanov', 81),
        p3 = new Person('Minko', 'Minkov', 21),
        p4 = new Person('Viktor', 'Markov', 19),
        p5 = new Person('Georgi', 'Georgiev', 27),
        people = [p1, p2, p3, p4, p5];

    jsConsole.writeLine('people = ' + JSON.stringify(people));
    jsConsole.writeLine('');

    jsConsole.writeLine('Youngest person is : ' + findYoungest(people));

    jsConsole.writeLine('---------------------------------------------------------');
}

function Person(firstname, lastname, age) {

    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
    this.fullName = function () {

        return this.firstname + ' ' + this.lastname;
    }
}

function findYoungest(people) {

    var i,
        idxOfYoungest,
        minAge = Number.MAX_VALUE;

    for (i in people) {

        if (people[i].age < minAge) {

            minAge = people[i].age;
            idxOfYoungest = i;
        }
    }

    return people[idxOfYoungest].fullName();
}