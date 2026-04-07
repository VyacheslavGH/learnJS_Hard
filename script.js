"use script";

const week = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
let textWrapper = document.querySelector(".wrapper");

const logger = function (arr) {
    let date = new Date();
    let todayDay = date.getDay();
    let weekDay = "";

    for (day of arr) {
        if (day === "saturday" || day === "sunday") {
            weekDay = document.createElement("p");
            weekDay.textContent = day;
            weekDay.classList.add("weekends");
            textWrapper.append(weekDay);
        } else if (arr.indexOf(day) === todayDay - 1) {
            weekDay = document.createElement("p");
            weekDay.textContent = day;
            weekDay.classList.add("today");
            textWrapper.append(weekDay);
        } else {
            weekDay = document.createElement("p");
            weekDay.textContent = day;
            textWrapper.append(weekDay);
        }
    }
};

logger(week);
