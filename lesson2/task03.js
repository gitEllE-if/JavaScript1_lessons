'use strict';
// Lesson2_3

alert("ЗАДАНИЕ 3. Ввод и сравнение чисел");

/**
 Запрашивает у пользователя ввод целого числа и возвращает это число.
 В случае некорректного ввода, возвращает  null
 */
function getNumberFromUser() {
    let str = prompt("Введите целое число");
    let num = parseInt(str);
    if (!str || isNaN(num))
        return null;
    return num;
}

/**
 Сравнивает два числа n1 и n2:
 если оба положительные -> выводит n1 - n2; 
 если оба отрицательные -> выводит n1 * n2; 
 если рахных знаков -> выводит n1 + n2
 */
function numbersCompare(n1, n2) {
    if (n1 < 0 && n2 < 0) {
        alert("Оба числа отрицательные  " + n1 + " * " + n2 + " = " + (n1 * n2));
    } else if (n1 >= 0 && n2 >= 0) {
        alert("Оба числа положительные  " + n1 + " - " + n2 + " = " + (n1 - n2));
    } else {
        alert("Числа разных знаков  " + n1 + " + " + n2 + " = " + (n1 + n2));
    }
}


try {
    let num1 = getNumberFromUser();
    let num2 = getNumberFromUser();
    if (num1 === null || num2 === null) {
        throw new Error("==> invalid user input: number expected");
    }
    numbersCompare(num1, num2);
}
catch (e) {
    alert("Некорректный ввод. Программа завершена");
    console.error(e.message);
}

document.getElementById("myDiv").innerHTML += "ЗАДАНИЕ 3 завершено<br><br>";