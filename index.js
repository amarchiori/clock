onload(newUser())

function newUser() {
  let text;
  let user = prompt("Please enter your name:");
  if (user == null || user == "") {
    text = "Hello anonymous, welcome!";
  } else {
    text = "Hello " + user + "! Welcome!"
  }
  document.getElementById("user").innerHTML = text;
}


let today = new Date();
let day = today.getDay();
const daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];

let hour = today.getHours();
let minute = today.getMinutes();
let second = today.getSeconds();
let ending = (hour >= 12)? " PM ":" AM ";
  hour = (hour >= 12)? hour - 12: hour;

if (hour === 0 && ending ===' PM ') { 
    if (minute===0 && second===0){ 
        hour=12;
        ending=' Noon';
    } else { 
        hour=12;
        ending=' PM';
    } 
} 

if (hour === 0 && ending === ' AM '){ 
  if (minute === 0 && second === 0){ 
    hour=12;
    ending=' Midnight';
  } else { 
    hour=12;
    ending=' AM';
  } 
} 