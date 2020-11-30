'use strict';
// Lesson3_1

alert("ЗАДАНИЕ 1. Цикл for чет/нечет  => консоль");

for (let i = 0; i <= 10; i++) {
    if (i == 0) {
        console.log(i + " - это ноль");
    }
    else if (i & 1) {   //нечетные числа в последнем бите содержат 1  =>  побитовое И c 00000001 дает значение TRUE
        console.log(i + " - нечетное число");
    }
    else
        console.log(i + " - четное число");
}


document.getElementById("myDiv").innerHTML = "ЗАДАНИЕ 1 завершено<br><br>";