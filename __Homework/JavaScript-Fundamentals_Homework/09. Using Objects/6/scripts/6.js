// Problem 6.
//
// * Write a function that groups an array of people by age, first or last name.
// * The function must return an associative array, with keys - the groups, and values - arrays with people in this groups
// * Use function overloading (i.e. just one function)
//
// Example:
//
// var people = {…};
// var groupedByFname = group(people, 'firstname');
// var groupedByAge = group(people, 'age');


var p1 = new Person('Georgi', 'Petrov', 19),
        p2 = new Person('Georgi', 'Ivanov', 81),
        p3 = new Person('Minko', 'Ivanov', 21),
        p4 = new Person('Viktor', 'Markov', 19),
        p5 = new Person('Ivan', 'Ivanov', 27),
        people = [p1, p2, p3, p4, p5];

function groupByAge() {

    var groupedByAge = group(people, 'age');

    jsConsole.writeLine('Grouped by age: ');
    printAssociativeArray(groupedByAge);
    jsConsole.writeLine('--------------------------------------------------------------');
}

function groupByFirstName() {

    var groupedByFirstName = group(people, 'firstname');

    jsConsole.writeLine('Grouped by First Name: ');
    printAssociativeArray(groupedByFirstName);
    jsConsole.writeLine('--------------------------------------------------------------');
}

function groupByLastName() {

    var groupedByLastName = group(people, 'lastname');

    jsConsole.writeLine('Grouped by Last Name: ');
    printAssociativeArray(groupedByLastName);
    jsConsole.writeLine('--------------------------------------------------------------');
}

function printAssociativeArray(associativeArray) {

    var key,
        firstKey = true;

    jsConsole.writeLine('{');

    for (key in associativeArray) {

        if (!firstKey) {
            jsConsole.writeLine(',');
        } else {
            firstKey = false;
        }

        jsConsole.write('"' + key + '" : ' + JSON.stringify(associativeArray[key]));
    }

    jsConsole.writeLine('');
    jsConsole.writeLine('}');
}

function Person(firstname, lastname, age) {

    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
}

function group(persons, key) {

    if (persons.length === 0) {

        return undefined;
    }

    var i,
        property,
        resultArr = {};

    for (property in persons[0]) {

        if (property === key) {

            for (i in persons) {

                if (!resultArr[persons[i][key]]) {

                    resultArr[persons[i][key]] = [];
                }

                resultArr[persons[i][key]].push(persons[i]);
            }
        }
    }

    return resultArr;
}