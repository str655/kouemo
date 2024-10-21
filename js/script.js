const seconds = document.querySelector(".seconds .nbr"),
  minutes = document.querySelector(".minutes .nbr"),
  hours = document.querySelector(".hours .nbr"),
  days = document.querySelector(".days .nbr");

let secValue = 11,
  minValue = 2,
  hourValue = 2,
  dayValue = 9;

const timeFunction = setInterval(() => {
  secValue--;

  if (secValue === 0) {
    minValue--;
    secValue = 60;
  }
  if (minValue === 0) {
    hourValue--;
    minValue = 60;
  }
  if (hourValue === 0) {
    dayValue--;
    hourValue = 24;
  }

  if (dayValue === 0) {
    clearInterval(timeFunction);
  }
  seconds.txtxContent = secValue < 10 ? `0${secValue}` : secValue;
  minutes.txtxContent = minValue < 10 ? `0${minValue}` : minValue;
  hours.txtxContent = hourValue < 10 ? `0${hourValue}` : hourValue;
  days.txtxContent = dayValue < 10 ? `0${dayValue}` : dayValue;
}, 1000); //1000ms = 1s
