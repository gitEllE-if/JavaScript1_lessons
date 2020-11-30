'use strict';
// Lesson2_4

alert("ЗАДАНИЕ 4. Арифметические операции в виде функций");

/**
Сложение двух чисел
@param {number} n1
@param {number} n2
@returns {number}
 */
function getAddition(n1, n2) {
    return n1 + n2;
}

/**
Вычитание второго числа из первого
@param {number} n1
@param {number} n2
@returns {number}
 */
function getSubtraction(n1, n2) {
    return n1 - n2;
}

/**
Умножение двух чисел
@param {number} n1
@param {number} n2
@returns {number}
 */
function getMultiplication(n1, n2) {
    return n1 * n2;
}

/**
Деление первого числа на второе
@param {number} n1
@param {number} n2
@returns {number}
 */
function getDivision(n1, n2) {
    return n1 / n2;
}

document.getElementById("myDiv").innerHTML += "ЗАДАНИЕ 4 завершено<br><br>";