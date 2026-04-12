"use strict";

const dateObj = {
    actualDateList: document.querySelectorAll(".time-list"),
    weekDays: ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"],
    months: [
        "Января",
        "Февраля",
        "Марта",
        "Апреля",
        "Мая",
        "Июня",
        "Июля",
        "Августа",
        "Сентября",
        "Октября",
        "Ноября",
        "Декабря",
    ],
    getFullDate: function () {
        let date = new Date();
        let dayOfTheWeek = dateObj.weekDays[date.getDay()];
        let day = date.getDate();
        let month = dateObj.months[date.getMonth()];
        let year = date.getFullYear();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();

        return `Сегодня ${dayOfTheWeek}, ${day} ${month} ${year} года, ${hours} час ${minutes} минут ${seconds} секунд`;
    },
};

console.log(dateObj.getFullDate());
// сделать вариант б
// вывести время на страницу
// реализовать склонение
// добавлять 0 перед значениями из одной цифры
// реализовать обновление даты и времени каждую секунду при помощи setInetrval
