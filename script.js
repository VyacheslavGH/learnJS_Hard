"use script";

const removeSpacesSetMaxLength = function (str) {
    let strWithoutSpaces = "";
    let strElipsis = "";
    let result = "";

    // Работает
    // Проверка на корректно введенный тип данных
    if (typeof str !== "string") {
        alert("Введите строкове значение");
        return console.log("Пользователь ввел другой тип данных");
    }

    // Убираем пробелы в начале и конце строки, если они есть
    // Функция убирает лишь один пробел, после чего делает return
    // Предполагаю это потому, что ретерн стоит внутри while
    // но если вынести его за while, цикл уходит в бесконечность
    // нужно подумать над решением
    const removeSpaces = function (strToClean) {
        let firstChar = strToClean[0];
        let lastChar = strToClean[strToClean.length - 1];

        if (firstChar !== " " && lastChar !== " ") {
            return strToClean;
        }
        while (firstChar === " " || lastChar === " ") {
            if (firstChar === " ") {
                strWithoutSpaces = strToClean.slice(1);
                strToClean = strWithoutSpaces;
                console.log(`Внутри цикла: ${strWithoutSpaces}`);
            } else if (lastChar === " ") {
                strWithoutSpaces = strToClean.slice(0, -1);
                strToClean = strWithoutSpaces;
                console.log(`Внутри цикла: ${strWithoutSpaces}`);
            }
            return strWithoutSpaces;
        }
    };

    strWithoutSpaces = removeSpaces(str);

    // ДОбавляем троеточие, если длина строки более 30 символов
    const ellipsis = function (strMaxLength) {
        if (strMaxLength.length <= 30) {
            return strMaxLength;
        } else {
            return (strElipsis = strMaxLength.slice(0, 30) + "...");
        }
    };

    result = ellipsis(strWithoutSpaces);

    return result;
};

console.log(removeSpacesSetMaxLength("ff  "));
// console.log(removeSpacesSetMaxLength(" hgj"));
// console.log(removeSpacesSetMaxLength("фф"));
// console.log(removeSpacesSetMaxLength("dfdgfgkjhldfjghldkfjgdgfgfgfgd").length);

// РЕШИТЬ ПРОБЛЕМУ С ТЕМ, ЧТО ФУНКЦИЯ НЕ УБИРАЕТ ПРОБЕЛЫ ИЗ ПЕРЕДАВАЕМОЙ В НЕЕ СТРОКИ
