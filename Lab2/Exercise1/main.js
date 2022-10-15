//1. Write a JavaScript program to display the current day and time
var today = new Date();
var day = today.getDay();
var daylist = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
var hour = today.getHours();
var min = today.getMinutes();

var suffix = (hour >= 12)? " PM" : " AM";
hour = (hour >= 12)? hour - 12 : hour;

if (hour === "0" && suffix === " PM"){
  if(min === "0" && sec === "0") {
    hour = 12;
    suffix = " Noon";
  }
} 
else if (hour === "0" && suffix === " AM") {
  if(min === "0" && sec === "0") {
    hour = 12;
    suffix = " Midnight";
  }
}

var todayHTML = document.getElementById("today");
var timeHTML = document.getElementById("time");

todayHTML.innerHTML = "today is " + daylist[day];
timeHTML.innerHTML = "the time is " + hour + suffix + " " + min;

//2. Write a JavaScript program to copy a string to the clipboard.
function myFunction() {
    // Get the text field
    var copyText = document.getElementById("myInput");
  
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 999); 
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
  }

  //3.Write a JavaScript program to parse an HTTP Cookie header string and return an object of all.
  fetch('https://httpbin.org/cookies', {
    headers: {
      Cookie: 'xxx=yyy'
    }
  }).then(response => response.json())
  .then(data => console.log(JSON.stringify(data, null, 2)));
  //4.
  const isValidJSON = obj => {
    try {
      JSON.parse(obj);
      return true;
    } catch (e) {
      return false;
    }
  };
  console.log(isValidJSON('{"name":"Adam","age":20}'));
  console.log(isValidJSON('{"name":"Adam",age:"20"}'));
  console.log(isValidJSON(null));

  