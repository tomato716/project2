let date = new Date();
let year = date.getFullYear();
let month = date.getMonth() + 1;
let day = date.getDay();
let hour = date.getHours();
let minute = date.getMinutes();

const getTime = () => {
  if (hour < 10) {
    hour = `0${hour}`;
  }
  if (minute < 10) {
    minute = `0${minute}`;
  }

  return `${hour} : ${minute}`;
};

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("timeDisplay").textContent = getTime();
});

const getDate = () => {
  if (month < 10) {
    month = `0${month}`;
  }
  if (day < 10) {
    day = `0${day}`;
  }

  return `${year}-${month}-${day}`;
};

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("dateDisplay").textContent = getDate();
});
