'use strict';
// Lesson3_3

alert("ЗАДАНИЕ 3. перебор и изменение массива с forEach => консоль");

const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];


console.log("Массив до:");
products.forEach((item) => console.log(item));

products.forEach((item) => item.price *= 0.85);

console.log("Массив после:");
products.forEach((item) => console.log(item));


document.getElementById("myDiv").innerHTML += "ЗАДАНИЕ 3 завершено<br><br>";