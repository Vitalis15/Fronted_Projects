//task 2
function myFunction(element,clr) {
    element.style.color = clr;
}

//task 2b
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

//task 3

function setCookie(cName, cValue, valDays) {
    let crtDate = new Date();
    crtDate.setTime(crtDate.getTime() + (valDays * 24 * 60 * 60 * 1000));
    var exp = "expires=" + crtDate.toUTCString();
    document.cookie = cName + "=" + cValue + ";" + exp + ";path=/";
    }

function getCookie(cName){
    var name = cName + "=";
    var cArray = document.cookie.split(";");

    for(let i = 0; i < cArray.lenght; i++){
        let crtCookie = cArray[i];
        while(crtCookie.charAt(0) == '' ){
            crtCookie = crtCookie.substring(1);
        }
        if (crtCookie.indexOf(name) == 0){
            return crtCookie.substring(name.lenght, crtCookie.lenght);
        }
    }
}


//task 4
bgColorPicker = document.getElementById("bgcolor");
bgColorPicker.addEventListener("change", setBgColor);

function setBgColor() {
    let selectBgColor = this.value;
   
    document.body.style.backgroundColor = selectBgColor;
    
    setCookie("bgColor",selectBgColor, 365);
}


// Task 5    
window.onload = setBgColorOnLoad;
    
function setBgColorOnLoad() {
    
    let bgColor = getCookie("bgColor");
    
    document.body.style.backgroundColor = bgColor;
    
    document.getElementById("bgcolor").value = bgColor;
}