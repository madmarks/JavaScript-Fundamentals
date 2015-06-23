// disable JSLint Error message: 'console' was used before it was defined.
/*jslint devel: true */

function solve(args) {

    'use strict';

    var rows = parseInt(args[0], 10),
        cols = parseInt(args[1], 10),
        tests = parseInt(args[rows + 2], 10),
        i,
        col,
        row,
        mapOfChessBoard = new Array(cols),
        moves = [],
        move,
        moveStartToEndCell,
        result,
        colIndexOfStartCell,
        rowIndexOfStartCell,
        colIndexOfEndCell,
        rowIndexOfEndCell;

    //function isKnightMoveValid(colIndexOfStart, rowIndexOfStart, colIndexOfEnd, rowIndexOfEnd, map) {
    //
    //    var rowDistance = Math.abs(rowIndexOfStart - rowIndexOfEnd),
    //        colDistance = Math.abs(colIndexOfStart - colIndexOfEnd);
    //    
    //    if (((rowDistance === 1 && colDistance === 2) || (rowDistance === 2 && colDistance === 1)) && map[colIndexOfEnd][rowIndexOfEnd] === '-') {
    //    
    //        return true;  
    //    }
    //
    //    return false;
    //}

    //function isKnightMoveValid(colIndexOfStart, rowIndexOfStart, colIndexOfEnd, rowIndexOfEnd, map) {
    //
    //    var k,
    //        len,
    //        colIndex,
    //        rowIndex,
    //        knightMoves = [[-2, 1], [-1, 2], [1, 2], [2, 1], [2, -1], [1, -2], [-1, -2], [-2, -1]];
    //
    //    for (k = 0, len = knightMoves.length; k < len; k += 1) {
    //
    //        colIndex = colIndexOfStart + knightMoves[k][0];
    //        rowIndex = rowIndexOfStart + knightMoves[k][1];
    //
    //        if (colIndex === colIndexOfEnd && rowIndex === rowIndexOfEnd && mapOfChessBoard[colIndex][rowIndex] === '-') {
    //
    //            return true;
    //        }
    //    }
    //
    //    return false;
    //}

    function isKnightMoveValid(colIndexOfStart, rowIndexOfStart, colIndexOfEnd, rowIndexOfEnd, map) {

        var knightMoves = [[-2, 1], [-1, 2], [1, 2], [2, 1], [2, -1], [1, -2], [-1, -2], [-2, -1]];

        return knightMoves.some(function (item) {

            return item[0] === (colIndexOfStart - colIndexOfEnd) &&
                item[1] === (rowIndexOfStart - rowIndexOfEnd) &&
                map[colIndexOfEnd][rowIndexOfEnd] === '-';
        });
    }

    function isQueenMoveValid(colIndexOfStart, rowIndexOfStart, colIndexOfEnd, rowIndexOfEnd, map) {

        var colIndex = colIndexOfStart,
            rowIndex = rowIndexOfStart,
            colDistance = colIndexOfEnd - colIndexOfStart,
            rowDistance = rowIndexOfEnd - rowIndexOfStart,
            colStep = colDistance === 0 ? 0 : colDistance > 0 ? 1 : -1,
            rowStep = rowDistance === 0 ? 0 : rowDistance > 0 ? 1 : -1;

        while (true) {

            colIndex += colStep;
            rowIndex += rowStep;

            if (colIndex < 0 || colIndex >= cols || rowIndex < 0 || rowIndex >= rows || map[colIndex][rowIndex] !== '-' || (colStep === 0 && rowStep === 0)) {

                return false;
            }

            if (colIndex === colIndexOfEnd && rowIndex === rowIndexOfEnd && map[colIndex][rowIndex] === '-') {

                return true;
            }
        }
    }

    // fill map of Chess board
    for (col = 0; col < cols; col += 1) {

        mapOfChessBoard[col] = new Array(rows);

        for (row = 0; row < rows; row += 1) {

            // '-' -> empty cell
            //
            // 'K' -> cell with Knight
            //
            // 'Q' -> cell with Queen
            //

            mapOfChessBoard[col][row] = args[rows + 1 - row][col];
        }
    }
    //console.log(mapOfChessBoard);

    for (i = 0; i < tests; i += 1) {

        // a = 0, b = 1, c = 2, ... 
        //
        // move 'd1 b3' is converted to [3, 0, 1, 2] (zero based array)

        move = [];
        moveStartToEndCell = args[rows + 3 + i].split(' ');

        // charCodeAt() method is case-sensitive
        //
        // "a0".charCodeAt(1) -> returns 48 (ASCII code of "0" is 48) -> row
        // "a0".charCodeAt(0) -> returns 97 (ASCII code of "a" is 97) -> col

        // colIndexOfStartCell
        move.push(moveStartToEndCell[0].charCodeAt(0) - "a".charCodeAt(0));

        // rowIndexOfStartCell
        move.push(moveStartToEndCell[0].charCodeAt(1) - "1".charCodeAt(0));

        // colIndexOfEndCell
        move.push(moveStartToEndCell[1].charCodeAt(0) - "a".charCodeAt(0));

        // rowIndexOfEndCell
        move.push(moveStartToEndCell[1].charCodeAt(1) - "1".charCodeAt(0));

        moves.push(move);

        //console.log(move); 
    }
    //console.log(moves);

    //var answers1 = ['yes', 'no', 'no', 'yes', 'yes', 'no', 'yes', 'yes', 'no', 'no', 'no', 'no'],
    //    answers2 = ['no', 'yes', 'yes', 'yes', 'yes', 'yes', 'yes', 'no', 'yes', 'yes'];

    for (i = 0; i < tests; i += 1) {

        colIndexOfStartCell = moves[i][0];
        rowIndexOfStartCell = moves[i][1];

        colIndexOfEndCell = moves[i][2];
        rowIndexOfEndCell = moves[i][3];

        // check START and END cells validity
        if (colIndexOfStartCell < 0 || colIndexOfStartCell >= cols ||
                rowIndexOfStartCell < 0 || rowIndexOfStartCell >= rows ||
                colIndexOfEndCell < 0 || colIndexOfEndCell >= cols ||
                rowIndexOfEndCell < 0 || rowIndexOfEndCell >= rows) {

            result = 'Invalid START or END sell indexes';

        } else if (mapOfChessBoard[colIndexOfStartCell][rowIndexOfStartCell] === '-') {

            // START cell is empty

            result = 'no';

        } else if (mapOfChessBoard[colIndexOfEndCell][rowIndexOfEndCell] !== '-') {

            // END cell is NOT empty

            result = 'no';

        } else if (mapOfChessBoard[colIndexOfStartCell][rowIndexOfStartCell] === 'K') {

            // Knight

            if (isKnightMoveValid(colIndexOfStartCell, rowIndexOfStartCell, colIndexOfEndCell, rowIndexOfEndCell, mapOfChessBoard)) {

                result = 'yes';

            } else {

                result = 'no';
            }

        } else if (mapOfChessBoard[colIndexOfStartCell][rowIndexOfStartCell] === 'Q') {

            // Queen

            if (isQueenMoveValid(colIndexOfStartCell, rowIndexOfStartCell, colIndexOfEndCell, rowIndexOfEndCell, mapOfChessBoard)) {

                result = 'yes';

            } else {

                result = 'no';
            }

        } else {

            result = 'IMPOSSIBLE';
        }

        console.log(result);
        //console.log(result + ' ' + (result === answers1[i]));
        //console.log(result + ' ' + (result === answers2[i]));
    }
}

var tests = [
    [
        '3',
        '4',
        '--K-',
        'K--K',
        'Q--Q',
        '12',
        'd1 b3',
        'a1 a3',
        'c3 b2',
        'a1 c1',
        'a1 b2',
        'a1 c3',
        'a2 c1',
        'd2 b1',
        'b1 b2',
        'c3 a3',
        'a2 a3',
        'd1 d3'
    ],
    [
        '5',
        '5',
        'Q---Q',
        '-----',
        '-K---',
        '--K--',
        'Q---Q',
        '10',
        'a1 a1',
        'a1 d4',
        'e1 b4',
        'a5 d2',
        'e5 b2',
        'b3 d4',
        'b3 c1',
        'b3 d1',
        'c2 a3',
        'c2 b4'
    ]
];

//solve(tests[0]);
//solve(tests[1]);

tests.forEach(function (item) {

    'use strict';

    solve(item);
    console.log('----------------------------------------');
});