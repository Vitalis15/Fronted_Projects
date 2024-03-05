// Get image handle
var contentDiv = document.getElementById("contentDiv");

// Add event listener
contentDiv.addEventListener("wheel", importData, true);

// Function that imports data and renders it to the contentDiv
function importData() {
    // Generate randon post ID value (1-100)
    var postNum = Math.ceil(Math.random() * 100);

    // HTTP request
    var httpRequest = new XMLHttpRequest();
    httpRequest.open("GET", "https://jsonplaceholder.typicode.com/posts/" + postNum);
    httpRequest.send();

    httpRequest.onload = function () {
        var httpResponse = JSON.parse(httpRequest.responseText);

        // Extract data fields from data received
        var id = httpResponse.id;
        var title = httpResponse.title;
        var comment = httpResponse.body;

        // Build HTML content inside contentDiv
        contentDiv.innerHTML = "<h1>" + id + ". " + title + "</h1>" +
            "<p>" + comment + "</p>";

        // Get new random color
        var newDivColor = getRandomColor();
        // Set new color as contentDiv background color
        contentDiv.style.backgroundColor = newDivColor;

        // Check if new color is light 
        var isLightColor = isLight(newDivColor);

        // If color is light
        if (isLightColor) {
            // Set contentDiv font to black
            contentDiv.style.color = "black";
        }
        else {
            // Set contentDiv fotn to white
            contentDiv.style.color = "white";
        }
    }
}

// Function that returns a random hexa color
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';

    // Generate 6 random values from letters array
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function that checks the luminosity of a hexadecimal color
// Returns true if a color is light and false if a color is dark
// e.g. isLight("#FFFFFF") returns true 
//      isLight("#000000") returns false
function isLight(color) {
    var color = color.substring(1);     // Strip #
    var rgb = parseInt(color, 16);      // Convert RRGGBB to decimal
    var red = (rgb >> 16) & 0xff;       // Extract red
    var green = (rgb >> 8) & 0xff;      // Extract green
    var blue = (rgb >> 0) & 0xff;       // Extract blue

    var luminance = 0.2126 * red + 0.7152 * green + 0.0722 * blue; // per ITU-R BT.709

    if (luminance > 128) {
        return true;        // Color is light
    }
    else {
        return false;       // Color is dark
    }
}