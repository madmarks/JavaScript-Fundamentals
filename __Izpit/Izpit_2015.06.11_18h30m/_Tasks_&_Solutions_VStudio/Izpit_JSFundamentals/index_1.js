function solve(args) {

    var numbers = args[0].split(' ').map(Number);
    //console.log(numbers); 

    //=========================================================================================================//

    function getIndexesOfPeaks(arr) {
        var i,
            len,
            idxOfPeaks = [0];

        for (i = 1, len = arr.length; i < len; i += 1) {

            if ((i === (len - 1)) || ((arr[i - 1] < arr[i]) && (arr[i + 1] < arr[i]))) {

                idxOfPeaks.push(i);
            }
        }

        return idxOfPeaks;
    }
    //console.log('indexesOfPeaks = ' + getIndexesOfPeaks(numbers));

    function getMaximumNumberOfRocks(arr) {
        var i,
            len,
            rocks,
            max = 0,
            indexesOfPeaks = getIndexesOfPeaks(arr);

        for (i = 1, len = indexesOfPeaks.length; i < len; i += 1) {

            rocks = indexesOfPeaks[i] - indexesOfPeaks[i - 1];

            if (rocks > max) {

                max = rocks;
            }
        }

        return max;
    }

    //=========================================================================================================//

    function getMaximumNumberOfRocks_ArrayMethods(array) {

        // find the largest number in array
        return Math.max.apply(Math, array

            // array = [value0, value1, ..., valueN-1]
            // връща нов масив от масиви [[value0, indexOfValue0], [value1, indexOfValue1], ..., [valueN-1, indexOfValueN-1]]
            // всеки от елементите съдържа стойността и индекса на съответната стойност в оригиналния масив
            .map(function (item, index) {

                return [item, index];
            })

            // филтрира само елементите, които са върхове и началния и крайния елементи
            .filter(function (item, index, arr) {

                return ((index === 0) || (index === (arr.length - 1)) || (arr[index - 1][0] < item[0] && item[0] > arr[index + 1][0]));
            })

            // връща масив само с разстоянията между индексите на настоящия и предния връх
            .map(function (item, index, arr) {

                return (index ? (item[1] - arr[index - 1][1]) : 0);
            }));
    }

    //=========================================================================================================//

    //var maximumNumberOfRocks = getMaximumNumberOfRocks(numbers);
    //console.log('maximumNumberOfRocks = ' + maximumNumberOfRocks);

    var maximumNumberOfRocks_ArrayMethods = getMaximumNumberOfRocks_ArrayMethods(numbers);
    //console.log('maximumNumberOfRocks_ArrayMethods = ' + maximumNumberOfRocks_ArrayMethods);

    return maximumNumberOfRocks_ArrayMethods;
}

//function solve(args) {

//    var i,
//        len,
//        numbers = args[0].split(' ').map(Number),
//        currRocks = 1,
//        maxRocks = 0;

//    for (i = 1, len = numbers.length - 1; i < len; i++) {

//        if (numbers[i] > numbers[i - 1] && numbers[i] > numbers[i + 1]) {

//            maxRocks = Math.max(currRocks, maxRocks);
//            currRocks = 1;
//        } else {

//            currRocks++;
//        }
//    }

//    return Math.max(currRocks, maxRocks);
//}

var test = [
    ['5 1 7 4 8'],
    ['5 1 7 6 3 6 4 2 3 8'],
    ['10 1 2 3 4 5 4 3 2 1 10']
];

//console.log(solve(test[0]));
//console.log(solve(test[1]));
//console.log(solve(test[2]));

console.log(solve(test[0]));
console.log(solve(test[0]) == 2);

console.log(solve(test[1]));
console.log(solve(test[1]) == 4);

console.log(solve(test[2]));
console.log(solve(test[2]) == 5);

//console.log(test);