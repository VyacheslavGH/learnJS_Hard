"use script";

// let num = 266219;
// let numToStr = String(num);

// // Первый вариант

// // let result = 0;

// // for (let i = 0; i < numToStr.length - 1; i++) {
// //     console.log(numToStr[i] * numToStr[i + 1]);
// //     result += numToStr[i] * numToStr[i + 1];
// // };

// // Второй вариант
// let result = numToStr[0];

// for (let i = 1; i < numToStr.length; i++) {
//     result *= numToStr[i];
// };

// console.log(`Результат умножения = ${result}`);

// result **= 3;
// console.log(`Результат возведенный в степень 3 = ${result}`);

// console.log(`Первые 2 цифры полученного числа = ${String(result)[0]}${String(result)[1]}`);

let lang = "ru";

if (lang === "ru") {
    console.log("Понедельник");
    console.log("Вторник");
    console.log("Среда");
    console.log("Четверг");
    console.log("Пятница");
    console.log("Суббота");
    console.log("Воскресенье");
} else {
    console.log("Monday");
    console.log("Tuesday");
    console.log("Wednesday");
    console.log("Thursday");
    console.log("Friday");
    console.log("Saturday");
    console.log("Sunday");
}

switch (lang) {
    case "ru":
        console.log("Понедельник");
        console.log("Вторник");
        console.log("Среда");
        console.log("Четверг");
        console.log("Пятница");
        console.log("Суббота");
        console.log("Воскресенье");
        break;

    case "en":
        console.log("Monday");
        console.log("Tuesday");
        console.log("Wednesday");
        console.log("Thursday");
        console.log("Friday");
        console.log("Saturday");
        console.log("Sunday");
        break;

    default:
        console.log("Упс, что-то пошло не так :(");
        break;
}

let twoDimensionalArr = [
    ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"],
    ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
];

lang === "ru"
    ? (console.log(twoDimensionalArr[0][0]),
      console.log(twoDimensionalArr[0][1]),
      console.log(twoDimensionalArr[0][2]),
      console.log(twoDimensionalArr[0][3]),
      console.log(twoDimensionalArr[0][4]),
      console.log(twoDimensionalArr[0][5]),
      console.log(twoDimensionalArr[0][6]))
    : lang === "en"
      ? (console.log(twoDimensionalArr[1][0]),
        console.log(twoDimensionalArr[1][1]),
        console.log(twoDimensionalArr[1][2]),
        console.log(twoDimensionalArr[1][3]),
        console.log(twoDimensionalArr[1][4]),
        console.log(twoDimensionalArr[1][5]),
        console.log(twoDimensionalArr[1][6]))
      : console.log("Такой язык не поддерживается");

let namePerson = "";

namePerson === "Артем"
    ? console.log("директор")
    : namePerson === "Александр"
      ? console.log("преподаватель")
      : console.log("студент");
