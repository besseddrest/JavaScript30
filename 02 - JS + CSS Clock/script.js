// second hand
const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
  const now = new Date(); // get current date
  const seconds = now.getSeconds(); // get current seconds
  const minutes = now.getMinutes(); // get current minutes
  const hours = now.getHours(); // get current hours

  // prevent second hand spinback
  if (seconds == 0) {
    secondHand.style.transition = 'none';
  } else {
    secondHand.style.transition = null;
  }

  // current unit over how many steps in the cirle
  // - multiplied by degrees in full circle (converting # to degrees)
  // - offset it by 90 (so arms start at 12 )
  const secondsDegrees = convertToDegrees(seconds, 60);
  const minutesDegrees = convertToDegrees(minutes, 60);
  const hoursDegrees = convertToDegrees(hours, 12);

  secondHand.style.transform = getRotation(secondsDegrees);
  minuteHand.style.transform = getRotation(minutesDegrees);
  hourHand.style.transform = getRotation(hoursDegrees);
}

function getRotation(str) {
  return `rotate(${str}deg)`;
}

function convertToDegrees(val, unit) {
  return ((val/unit) * 360) + 90;
}

setInterval(setDate, 1000);
