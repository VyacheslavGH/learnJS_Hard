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
        let strToArr = strToClean.split("");
        console.log(strToArr);

        if (strToArr[0] !== " " && strToArr[strToArr.length - 1] !== " ") {
            return strToClean;
        }

        while (strToArr[0] === " " || strToArr[strToArr.length - 1] === " ") {
            if (strToArr[0] === " ") {
                strToArr.splice(0, 1);
                console.log(strToArr);
            } else if (strToArr[strToArr.length - 1] === " ") {
                strToArr.splice(-1, 1);
                console.log(strToArr);
            }
        }

        console.log(`Возврат из функции удаления пробелов = ${strToArr.join("")}`);
        return strToArr.join("");
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