let is24HourFormat = true; // Default to 24-hour format

function updateClock() {
  const clockElement = document.getElementById("clock");
  const now = new Date();

  let hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  let period = "";

  if (!is24HourFormat) {
    period = hours >= 12 ? " PM" : " AM";
    hours = hours % 12 || 12; // Convert to 12-hour format
  }

  hours = String(hours).padStart(2, "0");
  clockElement.textContent = `${hours}:${minutes}:${seconds}${period}`;
}

function toggleFormat() {
  const switcherButton = document.getElementById("switcher");
  is24HourFormat = !is24HourFormat;

  if (is24HourFormat) {
    switcherButton.textContent = "Switch to 12-Hour Format";
  } else {
    switcherButton.textContent = "Switch to 24-Hour Format";
  }

  updateClock(); // Update the clock immediately after switching
}

// Event listener for the switcher button
document.getElementById("switcher").addEventListener("click", toggleFormat);

// Update the clock every second
setInterval(updateClock, 1000);

// Initial call to display the clock immediately
updateClock();