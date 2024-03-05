function Time(){
     var date =new Date();
  
    document.getElementById("resultDiv").innerHTML = "It's" + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
}

function showDay() {
	var date =new Date();
	var day = date.getDay();
	var rez = "Today is ";
    
	if (day == 1) {
		rez = rez + "Monday";
	}
	else if (day == 2) {
		rez = rez +"Tuesday";
	}
	else if (day == 3) {
		rez = rez + "Wednesday";
	}
	else if (day == 4) {
		rez = rez + "Thursday";
	}
	else if (day == 5) {
		rez = rez + "Friday";
	}
	else if (day == 6) {
		rez = rez + "Saturday";
	}
	else {
		rez = rez + "Sunday";
	}

	document.getElementById("resultDiv").innerHTML = rez;
}
let count = 0;
function Click(){
    
    count = count + 1;
    document.getElementById("resultDiv").innerHTML = "You have double-click " + Math.floor(count/2) + " times";

}

function Sum(){
    let nr = document.getElementById("sumNum").value;
   

    var s = 0;
    var i = 1;
    while(i<=nr){
        s = s + i;
        i = i + 1;
    }
    document.getElementById("resultDiv").innerHTML = "The sum is " + s;
}