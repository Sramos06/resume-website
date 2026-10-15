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

// Skills: each one has a name, a type (language or tool) and a level from 0 to 100
const skills = [
  { name: "Java", type: "language", level: 80 },
  { name: "Python", type: "language", level: 80 },
  { name: "JavaScript", type: "language", level: 55 },
  { name: "SQL (MySQL)", type: "language", level: 65 },
  { name: "HTML and CSS", type: "language", level: 70 },
  { name: "C++", type: "language", level: 30 },
  { name: "Git and GitHub", type: "tool", level: 70 },
  { name: "VS Code", type: "tool", level: 80 },
  { name: "MySQL Workbench", type: "tool", level: 60 },
  { name: "pandas and NumPy", type: "tool", level: 60 },
  { name: "Figma", type: "tool", level: 45 },
  { name: "Microsoft Excel", type: "tool", level: 70 }
];

// Turn a level number into a word for the label
function levelLabel(level) {
  if (level >= 75) {
    return "Strong";
  } else if (level >= 50) {
    return "Comfortable";
  } else {
    return "Learning";
  }
}

// Show only the skills that match the clicked filter button
function showSkills(filter) {
  let html = "";

  for (let i = 0; i < skills.length; i++) {
    const skill = skills[i];
    let show;

    switch (filter) {
      case "languages":
        show = skill.type === "language";
        break;
      case "tools":
        show = skill.type === "tool";
        break;
      default:
        show = true;
    }

    if (show) {
      html += `<div class="skill">
        <span class="skill-name">${skill.name}</span>
        <span class="bar"><span class="bar-fill" style="width: ${skill.level}%"></span></span>
        <span class="skill-level">${levelLabel(skill.level)}</span>
      </div>`;
    }
  }

  document.getElementById("skill-list").innerHTML = html;

  // Highlight only the button that was clicked
  const buttons = document.querySelectorAll(".filter-btn");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("active");
  }
  document.getElementById("btn-" + filter).classList.add("active");
}

showSkills("all");

// Light mode: adding the "light" class to <body> swaps every CSS color variable
function toggleTheme() {
  document.body.classList.toggle("light");

  const button = document.getElementById("theme-btn");
  if (document.body.classList.contains("light")) {
    button.innerHTML = "Dark mode";
  } else {
    button.innerHTML = "Light mode";
  }
}

// Line numbers down the left edge, like a code editor
let numbers = "";
for (let i = 1; i <= 300; i++) {
  numbers += i + "<br>";
}
document.getElementById("gutter").innerHTML = numbers;

// Back-to-top button: only show it after scrolling down a bit
const topButton = document.getElementById("top-btn");

window.onscroll = function () {
  if (document.documentElement.scrollTop > 400) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
};

function scrollToTop() {
  window.scrollTo(0, 0);
}
