"use script";

const week = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];

const logger = function (arr) {
    let date = new Date();
    let todayDay = date.getDay();
    // console.log(todayDay);
    for (day of arr) {
        if (day === "saturday" || day === "sunday") {
            console.log("%c" + day, "font-style: italic;");
        } else if (arr.indexOf(day) === todayDay - 1) {
            console.log("%c" + day, "font-weight: bold;");
        } else {
            console.log(day);
        }
    }
};

logger(week);

// выводить нужно на страницу html
// реализовать
