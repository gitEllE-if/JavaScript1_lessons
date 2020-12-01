'use strict';
// Lesson4_1_1

alert("ЗАДАНИЕ 1_1. ES5 vs ES6");

// ES5 -------------------------------------------------------------------
{
    function Product(name, price) {
        this.name = name;
        this.price = price;
    }

    Product.prototype.make25PercentDiscount = function () {
        this.price *= 0.75;
    }

    let product1 = new Product("product", 100);
    product1.make25PercentDiscount();
}

// ES6 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
{
    class Product {
        constructor(name, price) {
            this.name = name;
            this.price = price;
        }

        make25PercentDiscount() {
            this.price *= 0.75;
        }
    }

    let product1 = new Product("product", 100);
    product1.make25PercentDiscount();
}

document.getElementById("myDiv").innerHTML += "ЗАДАНИЕ 1_1 завершено<br><br>";