"use script";

let inputNum;

// Проверяем, явлвяется ли переданное значение числом
const isNumber = function (num) {
    return !isNaN(parseFloat(num) && isFinite(num));
};

const getNumber = function () {
    let arr = [];

    while (!isNumber((inputNum = prompt("Введите любое число", 100)))) {
        if (inputNum === null) {
            return "Пользователь отменил ввод";
        }

        inputNum = prompt("Введите любое число", 100);
    }

    arr = inputNum.split("");

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === " ") {
            arr.splice(i, 1);
            i = i - 1;
        }
    }

    return Number((inputNum = arr.join("")));
};

console.log(getNumber());
