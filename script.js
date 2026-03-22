"use script";

// Певрое задание
let arr = ["109537", "4546", "7645", "2870", "9898", "209780", "982"];

const getOnlyTwoAndFour = function (array) {
    for (let i = 0; i < array.length; i++) {
        if (Number(array[i][0]) === 2 || Number(array[i][0]) === 4) {
            console.log(array[i]);
        }
    }
};

getOnlyTwoAndFour(arr);

// Второе задание
const getPrimeNumber = function () {
    outer: for (let i = 2; i <= 100; i++) {
        if (i === 2 || i === 3) {
            console.log(`${i} - Делители этого числа 1 и ${i}`);
        }

        if (i % 2 === 0) {
            continue;
        }
        inner: for (let j = 3; j <= i; j++) {
            if (i % j === 0) {
                continue outer;
            } else if (i % j !== 0) {
                console.log(`${i} - Делители этого числа 1 и ${i}`);
                continue outer;
            } else {
                continue inner;
            }
        }

        console.log(`${i} - Делители этого числа 1 и ${i}`);
    }
};

getPrimeNumber();
