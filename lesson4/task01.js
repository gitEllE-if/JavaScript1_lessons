'use strict';
// Lesson4_1

alert("ЗАДАНИЕ 1. объект{единицы, десятки, сотни}  из  числа");

/**
 * Запрашивает у пользователя ввод целого числа в диапазоне [min, max] и возвращает это число.
 * В случае некорректного ввода, возвращает  null
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
function getNumberFromUser(min, max) {
    let str = prompt("Введите целое число в диапазоне [" + min + ", " + max + "]");
    let num = +str;
    if (str === "" || isNaN(num) || !Number.isInteger(num) || num < min || num > max) {
        return null;
    }
    return num;
}

/**
 * Число преобразует в объект, содержащий разряды числа: единицы/десятки/сотни
 * В случае некорректных данных - вернет null
 * @param {number} num
 * @returns {object{{number} units, {number} tens, {number} hundreds}}
 */
function decomposeInt(num) {
    let decompInt = {
        units: 0,       //единицы
        tens: 0,        //десятки
        hundreds: 0     //сотни
    };
    for (let param in decompInt) {
        decompInt[param] = num % 10;
        num = Math.floor(num / 10);
        if (isNaN(decompInt[param])) {
            return null;
        }
    }
    return decompInt;
}


try {
    let num = getNumberFromUser(0, 999);
    if (num === null) {
        throw new Error("==> invalid user input: integer expected");
    }
    console.log(decomposeInt(num));
}
catch (e) {
    alert("Некорректный ввод. Программа завершена");
    console.error(e.message);
}

document.getElementById("myDiv").innerHTML = "ЗАДАНИЕ 1 завершено<br><br>";