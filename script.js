// Set the date to count down to
const countDownDate = new Date("December 12, 2021 14:35:00 UTC").getTime();

// Update the count down every 1 second
const countdown = setInterval(function() {

  // Get the current date and time
  const now = new Date().getTime();

  // Calculate the time difference between now and the count down date
  const timeDiff = now - countDownDate;

  // Calculate the time units
  const years = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365));
  const months = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 30));
  const weeks = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 7));
  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const hours = Math.floor(timeDiff / (1000 * 60 * 60));
  const minutes = Math.floor(timeDiff / (1000 * 60));
  const seconds = Math.floor(timeDiff / 1000);
  const milliseconds = timeDiff;

  // Display the time units in the HTML elements
  document.getElementById("years").innerHTML = years;
  document.getElementById("months").innerHTML = months;
  document.getElementById("weeks").innerHTML = weeks;
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
  document.getElementById("milliseconds").innerHTML = milliseconds;

}, 1);