let alarmTime = null; // Store the alarm time
let alarmTimeout = null; // Reference to the alarm timeout

function updateClock() {
    const clockElement = document.getElementById('clock');
    const dateElement = document.getElementById('date');
    const now = new Date();

    // Get hours, minutes, and seconds
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Format time as HH:MM:SS
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    // Display time
    clockElement.textContent = `${hours}:${minutes}:${seconds}`;

    // Get and format date
    const options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
    const formattedDate = now.toLocaleDateString('en-US', options);

    // Display date
    dateElement.textContent = formattedDate;

    // Check if the current time matches the alarm time
    if (alarmTime && `${hours}:${minutes}` === alarmTime) {
        triggerAlarm();
    }
}

function setAlarm() {
    const alarmInput = document.getElementById('alarm-time').value;
    if (alarmInput) {
        alarmTime = alarmInput;
        alert(`Alarm set for ${alarmTime}`);
    } else {
        alert('Please select a valid time for the alarm.');
    }
}

function clearAlarm() {
    alarmTime = null;
    clearTimeout(alarmTimeout);
    alert('Alarm cleared.');
}

function triggerAlarm() {
    const alarmSound = document.getElementById('alarm-sound');
    alarmSound.play();
    alert('Alarm ringing!');
    clearAlarm(); // Clear the alarm after it rings
}

// Attach event listeners
document.getElementById('set-alarm').addEventListener('click', setAlarm);
document.getElementById('clear-alarm').addEventListener('click', clearAlarm);

// Call the updateClock function every second
setInterval(updateClock, 1000);

// Initialize the clock immediately on page load
updateClock();
