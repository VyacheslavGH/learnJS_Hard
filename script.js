"use strict";

const dateObj = {
    actualDateList: document.querySelector(".time-list"),
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
    hourDeclination: ["час", "часа", "часов"],
    getCorrectDeclination: function (hour) {
        if (hour === 0 || (hour >= 5 && hour <= 20)) {
            return dateObj.hourDeclination[2];
        } else if (hour === 1 || hour === 21) {
            return dateObj.hourDeclination[0];
        } else {
            return dateObj.hourDeclination[1];
        }
    },
    getZeroInTime: function (num) {
        if (String(num).length < 2) {
            return "0";
        } else {
            return "";
        }
    },
    getFullDate: function () {
        let date = new Date();
        let dayOfTheWeek = dateObj.weekDays[date.getDay()];
        let day = date.getDate();
        let month = dateObj.months[date.getMonth()];
        let year = date.getFullYear();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();

        return `Сегодня ${dayOfTheWeek}, ${day} ${month} ${year} года, ${hours} ${dateObj.getCorrectDeclination(hours)} ${minutes} минут ${seconds} секунд`;
    },
    getShortDate: function () {
        let date = new Date();
        let dayMonthYear = date.toLocaleDateString("ru-RU");
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let time = `${dateObj.getZeroInTime(hours) + hours}:${dateObj.getZeroInTime(minutes) + minutes}:${dateObj.getZeroInTime(seconds) + seconds}`;

        return `${dayMonthYear} - ${time}`;
    },
    addElement: function (tagName, text) {
        let addTag = document.createElement(`${tagName}`);
        addTag.textContent = `${text}`;
        dateObj.actualDateList.appendChild(addTag);
    },
    updateElement: function (elementToUpdate, value) {
        elementToUpdate.textContent = value;
    },
};

dateObj.addElement("p", dateObj.getFullDate());
dateObj.addElement("p", dateObj.getShortDate());

setInterval(() => {
    dateObj.updateElement(dateObj.actualDateList.lastElementChild, dateObj.getShortDate());
}, 1000);
