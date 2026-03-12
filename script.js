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

let lang = "";

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

// Не забыть задачку с многомерным массивом

let namePerson = "";

namePerson === "Артем"
    ? console.log("директор")
    : namePerson === "Александр"
      ? console.log("преподаватель")
      : console.log("студент");
