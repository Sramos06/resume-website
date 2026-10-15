// Scripts for Shawn Angel Ramos's resume website

// Greeting: an array with my first name, last name and age
const person = ["Shawn", "Ramos", 20];

// Pick a greeting based on the current hour (0 to 23)
const hour = new Date().getHours();
let greeting;

if (hour < 12) {
  greeting = "Good morning";
} else if (hour < 18) {
  greeting = "Good afternoon";
} else {
  greeting = "Good evening";
}

document.getElementById("greeting").innerHTML =
  "&gt; " + greeting + "! Hi, my name is " + person[0] + " " + person[1] +
  " and I'm " + person[2] + " years old.";

// Footer year, so it never goes out of date
document.getElementById("year").innerHTML = new Date().getFullYear();
