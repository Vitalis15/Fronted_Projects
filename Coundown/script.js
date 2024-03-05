// Cache the DOM
// Countdown element
var countDownText = document.getElementById("countDown");
// 10 second timer
var countDown = 10;
// Countdown timer
var countIntervalTimer;
// Start button
var startButton = document.getElementById("btnStart");

// Add event listener
startButton.addEventListener("click", startCountDown);

// Function that starts the countdown
function startCountDown() {
    // Start timer
    countIntervalTimer = setInterval(countDownTime, 1000);
    // Hide button
    this.style.display = "none";
}

function countDownTime() {
    // Decrement countdown
    countDown--;

    // If countdown has ended
    if (countDown === 0) {
        // Generate a random number between 1 and 100 
        var postNum = Math.ceil(Math.random() * 100);

        // HTTP request
        var httpRequest = new XMLHttpRequest();
        httpRequest.open("GET", "https://jsonplaceholder.typicode.com/posts/" + postNum);
        httpRequest.send();
        httpRequest.onload = function () {
            var httpResponse = JSON.parse(httpRequest.responseText);

            // Display title and content in div
            countDownText.innerHTML = httpResponse.id + ". " + httpResponse.title;

            // Shrink font size to 100px
            countDownText.style.fontSize = "100px";

            // Stop countdown timer
            clearInterval(countIntervalTimer);
        }
    }
    else {
        // Get new random color
        var newColor = getRandomColor();
        // Set new color as text color
        countDownText.style.color = newColor;
        // Display countdown
        countDownText.innerHTML = countDown;
    }
}

// Function that returns a random hexa color when called
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';

    // Generate 6 random values from letters array
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
