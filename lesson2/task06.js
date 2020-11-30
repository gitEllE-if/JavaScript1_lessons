'use strict';
// Lesson2_6

alert("ЗАДАНИЕ 6. Вывод сообщения о сумме введенных денег");

/**
 * Запрашивает у пользователя ввод суммы денег и возвращает эту сумму в виде строки. 
 * В случае некорректного ввода, возвращает  null
 * @returns {string}
 */
function getSumStrFromUser() {
    let str = prompt("Введите целое число");
    let num = parseInt(str);
    if (!str || isNaN(num))
        return null;
    return str;
}

/**
 * Возвращает слово "рубль" в правильном падеже
 * @param {string} sum
 * @returns {string}
 */
function getRub(sum) {
    let dig = parseInt(sum.charAt(sum.length - 1));
    switch (dig) {
        case 0:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
            return "рублей"
        case 1:
            return "рубль"
        case 2:
        case 3:
        case 4:
            return "рубля"
        default:
            return "руб"
    }
}

try {
    let sum = getSumStrFromUser();
    if (sum === null) {
        throw new Error("==> invalid user input: number expected");
    }
    sum = sum.trim();
    alert("Ваша сумма в " + sum + " " + getRub(sum) + " успешно зачислена.");
}
catch (e) {
    alert("Некорректный ввод. Программа завершена");
    console.error(e.message);
}

document.getElementById("myDiv").innerHTML += "ЗАДАНИЕ 6 завершено<br>";