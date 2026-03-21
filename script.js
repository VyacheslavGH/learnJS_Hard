"use script";

const removeSpacesSetMaxLength = function (str) {
    let strWithoutSpaces = "";
    let strElipsis = "";
    let result = "";

    // Проверка на корректно введенный тип данных
    if (typeof str !== "string") {
        return "Пользователь ввел другой тип данных";
    }

    // Убираем пробелы в начале и конце строки, если они есть
    const removeSpaces = function (strToClean) {
        let strToArr = strToClean.split("");

        if (strToArr[0] !== " " && strToArr[strToArr.length - 1] !== " ") {
            return strToClean;
        }

        while (strToArr[0] === " " || strToArr[strToArr.length - 1] === " ") {
            if (strToArr[0] === " ") {
                strToArr.splice(0, 1);
            } else if (strToArr[strToArr.length - 1] === " ") {
                strToArr.splice(-1, 1);
            }
        }

        return strToArr.join("");
    };

    // Добавляем троеточие, если длина строки более 30 символов
    const ellipsis = function (strMaxLength) {
        if (strMaxLength.length <= 30) {
            return strMaxLength;
        } else {
            return (strElipsis = strMaxLength.slice(0, 31) + "...");
        }
    };

    strWithoutSpaces = removeSpaces(str);
    result = ellipsis(strWithoutSpaces);

    return result;
};

// Логи для проверки

// Проверка на ввод нужного типа данных
console.log(removeSpacesSetMaxLength(12));
console.log("\n");

// Убираем лишние пробелы по краям строки
console.log(removeSpacesSetMaxLength("  gjkgj           "));
console.log("\n");

// Если строка более 30 символов, то добавляем троеточие
console.log(removeSpacesSetMaxLength("jhfgljhfdlgjhldfkjghldfkjhggffg"));
console.log(removeSpacesSetMaxLength("jhfgljhfdlgjhldfkjghldfkjhggffg").length - 3);
console.log("\n");

// Иначе ничего не делаем и просто выводим строку
console.log(removeSpacesSetMaxLength("Привет, Мир!"));
