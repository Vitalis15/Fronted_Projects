// Get button from DOM
var dataButton = document.getElementById("getDataBtn");
// Add event listener to button
dataButton.addEventListener("click", loadData);
// Button timeout counter
var btnTimeout;
// Counter for pieces of data loaded
cntData = 0;
// On window open, load 10 pieces of data
window.onload = function () {
 for (let i = 1; i <= 10; i++) {
 cntData++;
 getDataAndGenerateContent(cntData);
 }
}
// Function that loads data and disables button for
// 5 seconds after data has been loaded
function loadData() {
 // Get data and generate table content
 for (let i = 1; i <= 5; i++) {
 cntData++;
 getDataAndGenerateContent(cntData);
 }
 // Toggle between active and inactive button state
 dataButton.classList.toggle("activeBtn");
 dataButton.classList.toggle("inactiveBtn");
 // Deactivate button for 5 seconds
 // Remove button event handler
 dataButton.removeEventListener("click", loadData);
 // Initiate countdown
 btnTimeout = 5;
 // Display remaining time on button
 dataButton.innerHTML = "Timeout: " + btnTimeout + "s";
 // Call countdown function every second
 myTimer = setInterval(deactivateButton, 1000);
}
function getDataAndGenerateContent(cnt) {
 // Cache data table
 var dataTable = document.getElementById("dataTable");
 // HTTP request
 var httpRequest = new XMLHttpRequest();
 httpRequest.open("GET", "https://jsonplaceholder.typicode.com/albums/" + cnt);
 httpRequest.send();
 httpRequest.onload = function () {
 var httpResponse = JSON.parse(httpRequest.responseText);
 var htmlString = "<tr><td>" + httpResponse.userId + "</td>" +
 "<td>" + httpResponse.id + "</td>" +
 "<td>" + httpResponse.title + "</td></tr>";
 dataTable.tBodies[0].innerHTML += htmlString;
 }
}
// Function that counts down the necessary amount of time
// and reactivates button after countdown elapsed
function deactivateButton() {
 // Decrement passed time
 btnTimeout--;
 // Display remaining time on button
 dataButton.innerHTML = "Timeout: " + btnTimeout + "s";
 // If countdown finished
 if (btnTimeout == 0) {
 // Stop the timer
 clearInterval(myTimer);
 // Reactivate button
 dataButton.innerHTML = "Load more data..."
 // Toggle between active and inactive button state
 dataButton.classList.toggle("activeBtn");
 dataButton.classList.toggle("inactiveBtn");
 // Reactivate click event on button
 dataButton.addEventListener("click", loadData);
 }
}