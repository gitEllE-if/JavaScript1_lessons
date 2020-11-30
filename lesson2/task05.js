'use strict';
// Lesson2_5

alert("ЗАДАНИЕ 5. Выбор арифметической операции");

/**
В зависимости от переданного значения параметра operation выполняет одну из арифметических операций
и возвращает ее результат, 
в случае некорректного название операции - возвращает null
@param {number} arg1
@param {number} arg2
@param {srting} operation
@returns {number}
 */
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "addition":
            return getAddition(arg1, arg2);
        case "subtraction":
            return getSubtraction(arg1, arg2);
        case "multiplication":
            return getMultiplication(arg1, arg2);
        case "division":
            return getDivision(arg1, arg2);
        default:
            return null;
    }
}

console.log(mathOperation(20, 2, "addition"));
console.log(mathOperation(20, 2, "division"));
console.log(mathOperation(20, 2, "sum"));

document.getElementById("myDiv").innerHTML += "ЗАДАНИЕ 5 завершено<br><br>";