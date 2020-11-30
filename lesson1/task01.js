// Lesson1_1: converting degrees Celsius to Fahrenheit

alert("ЗАДАНИЕ 1. Перевод градусов Цельсия в градусы Фаренгейта");

let tempC = null;
let tempF = null;

do {
    tempC = +prompt("Введите температуру в градусах Цельсия\nДля завершения введите q");
    if (isNaN(tempC))
        break;
    if (tempC < -273.15) {
        alert("температура не может быть менее -273.15°С");
        continue;
    }
    tempF = (9 / 5) * tempC + 32;
    alert(tempC + " °С  =  " + tempF + " °F");
}
while (!isNaN(tempC))
document.getElementById("myDiv").innerHTML = "ЗАДАНИЕ 1 завершено<br><br>";