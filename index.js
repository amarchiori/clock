function showTime() {
  let today = new Date();
  let day = today.getDay();
  const daylist = ["SUNDAY","MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY"];

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
  document.getElementById("day").innerHTML = `TODAY IS ${daylist[day]}`;
  document.getElementById("time").innerHTML = `${hour}:${minute}${ending}  ${second}s`;
  document.querySelector("button").innerHTML = `Update Time`;
}

function askName() {
  let username = sessionStorage.getItem('username');

  if (username === null) {
      username = prompt("Welcome, what is your name?");
  }

  if (username != null) {
      document.getElementById("user").innerHTML = "Welcome, " + username;
      sessionStorage.setItem('username', username);
  } else {
      document.getElementById("user").innerHTML = "Welcome, Stranger!";
  } 
  showTime();
}
