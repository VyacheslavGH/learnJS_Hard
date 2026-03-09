let num = 266219;
let numToStr = String(num);

// Первый вариант

// let result = 0;

// for (let i = 0; i < numToStr.length - 1; i++) {
//     console.log(numToStr[i] * numToStr[i + 1]);
//     result += numToStr[i] * numToStr[i + 1];
// };


// Второй вариант
let result = numToStr[0];

for (let i = 1; i < numToStr.length; i++) {
    result *= numToStr[i];
};

console.log(`Результат умножения = ${result}`);

result **= 3;
console.log(`Результат возведенный в степень 3 = ${result}`);

console.log(`Первые 2 цифры полученного числа = ${String(result)[0]}${String(result)[1]}`);