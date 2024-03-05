// 5 second timer
var countDown = 5;
// 1 second function call
var dataIntervalTimer = setInterval(importData, 1000);
// Imported data counter
var numData = 0;

// Data button event listener
var dataBtn = document.getElementById("dataBtn");
dataBtn.addEventListener("click", toggleDataImport)

// Variable for determening whether to import data or not
var dataImport = true;

// Counter display
var dispCountDown = document.getElementById("countDown");

function importData() {
    countDown--;

    if (countDown === 0) {
        countDown = 5;
        numData++;
        // HTTP request
        var httpRequest = new XMLHttpRequest();
        httpRequest.open("GET", "https://jsonplaceholder.typicode.com/todos/" + numData);
        httpRequest.send();
        httpRequest.onload = function () {
            var httpResponse = JSON.parse(httpRequest.responseText);

            var htmlString = "<tr>" +
                "<td>" + httpResponse.id + "</td>" +
                "<td>" + httpResponse.title + "</td>" +
                "<td>" + (httpResponse.completed ? "Yes" : "No") + "</td>" +
                "</tr>";

            var dataTable = document.getElementById("dataTable");

            dataTable.tBodies[0].innerHTML += htmlString;
        }
    }

    // Display countdown
    dispCountDown.innerHTML = "New data in: " + countDown + " seconds";
}

function toggleDataImport() {
    if (dataImport) {
        // Disable data import
        dataImport = false;
        dataBtn.innerHTML = "Resume data import";
        dispCountDown.innerHTML = "Data import paused";
        dispCountDown.classList.toggle("redtext");
        clearInterval(dataIntervalTimer);
    }
    else {
        // Re-enable data import
        dataImport = true;
        dataBtn.innerHTML = "Pause data import";
        dispCountDown.innerHTML = "New data in: 5 seconds";
        dispCountDown.classList.toggle("redtext");
        countDown = 5;
        dataIntervalTimer = setInterval(importData, 1000);
    }
}