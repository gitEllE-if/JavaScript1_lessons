'use strict';
// Lesson3_4

alert("ЗАДАНИЕ 4. массив filter sort => консоль");

const products2 = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg"
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78
    },
];


let productWithPhotos = products2.filter((item) => "photos" in item);
console.log("Массив объектов с полем photos:");
productWithPhotos.forEach((item) => console.log(item));

let productWithJPG = productWithPhotos.filter((item) => item.photos.length > 0);
console.log("Массив объектов с непустым полем photos:");
productWithJPG.forEach((item) => console.log(item));

products2.sort((a, b) => a.price - b.price);
console.log("Массив отсортированный по цене:");
products2.forEach((item) => console.log(item));


document.getElementById("myDiv").innerHTML += "ЗАДАНИЕ 4 завершено<br><br>";