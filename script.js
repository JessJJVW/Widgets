function updateClock() {
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var period = "AM";

  // Convert hours to standard (12-hour) time
  if (hours > 12) {
    hours -= 12;
    period = "PM";
  } else if (hours == 0) {
    hours = 12;
  }
  // Add leading zeros to hours and minutes if necessary
  hours = (hours < 10) ? hours : "" + hours;
  minutes = (minutes < 10 ? "0" : "") + minutes;

  // Update the clock's text
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("period").textContent = period;
}

// Update the clock every minute
setInterval(updateClock, 60000);

// Initialize the clock with the current time
updateClock();
