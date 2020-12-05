'use strict';
// Lesson4_2

/**
 * @param {int} rowCount количество строк в карте
 * @param {int} colCount количество колонок в карте
 */

const config = {
    rowCount: 10,
    colCount: 10,
    fontSize: "font-size: 14px;",
    scheme: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 0, 0, 0, 0, 1, 0, 0, 0, 1,
        1, 1, 1, 1, 0, 1, 0, 1, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 1, 0, 1,
        1, 0, 1, 1, 1, 1, 1, 1, 0, 1,
        1, 0, 1, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 0, 1, 0, 1, 0, 0, 1, 1, 1,
        1, 0, 1, 0, 0, 0, 0, 0, 0, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 0, 1
    ],
    end: { x: 8, y: 9 }  // выход из лабиринта
};

const UP = 1;
const DOWN = 2;
const LEFT = 3;
const RIGHT = 4;
const UP_LEFT = 5;
const UP_RIGHT = 6;
const DW_LEFT = 7;
const DW_RIGHT = 8;
const ESC = 9;