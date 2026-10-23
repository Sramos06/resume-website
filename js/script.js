// Scripts for Shawn Angel Ramos's resume website

// Me: first name, last name and age (the whoami command prints it)
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

const welcome = "> " + greeting + "! Welcome to my resume website.";

// Typing effect (W3Schools How To: Typing Effect): one letter every 45 milliseconds
let letter = 0;

function typeGreeting() {
  if (letter < welcome.length) {
    document.getElementById("greeting").textContent += welcome.charAt(letter);
    letter++;
    setTimeout(typeGreeting, 45);
  }
}

// If the visitor turned on "reduce motion", show the whole greeting at once instead of typing it
if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  document.getElementById("greeting").textContent = welcome;
} else {
  document.getElementById("greeting").textContent = "";
  typeGreeting();
}

// Footer year, so it never goes out of date
document.getElementById("year").innerHTML = new Date().getFullYear();

// Skills: each one has a name, a type (language or tool), a level from 0 to 100, and its logo file in images/skills
const skills = [
  { name: "Java", type: "language", level: 80, logo: "java.svg" },
  { name: "Python", type: "language", level: 80, logo: "python.svg" },
  { name: "JavaScript", type: "language", level: 55, logo: "javascript.svg" },
  { name: "SQL (MySQL)", type: "language", level: 65, logo: "mysql.svg" },
  { name: "HTML and CSS", type: "language", level: 70, logo: "html5.svg" },
  { name: "C++", type: "language", level: 30, logo: "cplusplus.svg" },
  { name: "Git and GitHub", type: "tool", level: 70, logo: "git.svg" },
  { name: "VS Code", type: "tool", level: 80, logo: "vscode.svg" },
  { name: "MySQL Workbench", type: "tool", level: 60, logo: "mysql.svg" },
  { name: "pandas and NumPy", type: "tool", level: 60, logo: "numpy.svg" },
  { name: "Figma", type: "tool", level: 45, logo: "figma.svg" },
  { name: "Microsoft Excel", type: "tool", level: 70, logo: "excel.png" }
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
      // 10 blocks like a loading bar, one filled block per 10 points. Each one waits a bit longer, so they light up left to right
      let blocks = "";
      for (let b = 1; b <= 10; b++) {
        if (b * 10 <= skill.level) {
          blocks += `<span class="block on" style="transition-delay: ${b * 60}ms"></span>`;
        } else {
          blocks += `<span class="block"></span>`;
        }
      }

      html += `<div class="skill">
        <img src="images/skills/${skill.logo}" alt="" class="skill-logo" width="28" height="28">
        <span class="skill-name">${skill.name}</span>
        <span class="blocks">${blocks}</span>
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

  const label = document.getElementById("theme-label");
  if (document.body.classList.contains("light")) {
    label.innerHTML = "Dark mode";
  } else {
    label.innerHTML = "Light mode";
  }
}

// Line numbers down the left edge, like a code editor
let numbers = "";
for (let i = 1; i <= 300; i++) {
  numbers += i + "<br>";
}
document.getElementById("gutter").innerHTML = numbers;

// Contact form: check each field before it's sent
function sendMessage() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  let valid = true;

  // Clear old messages first
  document.getElementById("name-error").textContent = "";
  document.getElementById("email-error").textContent = "";
  document.getElementById("message-error").textContent = "";
  document.getElementById("form-message").textContent = "";

  if (name === "") {
    document.getElementById("name-error").textContent = "Please enter your name.";
    valid = false;
  }

  if (email === "") {
    document.getElementById("email-error").textContent = "Please enter your email.";
    valid = false;
  } else if (!email.includes("@") || !email.includes(".")) {
    document.getElementById("email-error").textContent = "That email doesn't look right.";
    valid = false;
  }

  if (message === "") {
    document.getElementById("message-error").textContent = "Please write a message.";
    valid = false;
  }

  // true sends the form to FormSubmit, false keeps it here to be fixed
  return valid;
}

// FormSubmit comes back here with "?sent" in the address after sending
if (location.search.indexOf("sent") !== -1) {
  document.getElementById("form-message").textContent = "Thanks! Your message was sent. I'll reply to your email soon.";
}

// Projects: show one project at a time (like the W3Schools Tabs page)
function openProject(id, button) {
  const projects = document.querySelectorAll(".project");
  for (let i = 0; i < projects.length; i++) {
    projects[i].classList.remove("open");
  }
  document.getElementById(id).classList.add("open");

  const buttons = document.querySelectorAll(".project-btn");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("active");
  }
  button.classList.add("active");
}

// Repaso slideshow (based on the W3Schools How To: Slideshow)
let slideIndex = 1;
showSlide(slideIndex);

function changeSlide(step) {
  slideIndex = slideIndex + step;
  showSlide(slideIndex);
}

// Hide every screenshot, then show only the current one. Past the last it wraps to the first, and back
function showSlide(n) {
  const slides = document.querySelectorAll(".slide");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
  document.getElementById("slide-count").innerHTML = slideIndex + " / " + slides.length;
}

// Scroll animation: a section fades in once its top is 3/4 down the screen. JS adds "reveal", so without JS nothing gets hidden
const code = document.getElementById("code");
const sections = document.querySelectorAll("section");

for (let i = 0; i < sections.length; i++) {
  sections[i].classList.add("reveal");
}

function revealSections() {
  for (let i = 0; i < sections.length; i++) {
    if (sections[i].getBoundingClientRect().top < window.innerHeight * 0.75) {
      sections[i].classList.add("show");
    }
  }
}

// On a laptop only the editor scrolls; on a phone the whole page does, so listen to both
code.addEventListener("scroll", revealSections);
window.addEventListener("scroll", revealSections);
revealSections();

// Current file: the last section that reached the top. It's highlighted in the explorer and named in the tab
const fileLinks = document.querySelectorAll(".tree a");

function highlightFile() {
  let current = "about";
  for (let i = 0; i < sections.length; i++) {
    if (sections[i].getBoundingClientRect().top < 160) {
      current = sections[i].id;
    }
  }

  // At the very bottom, the last file counts as open even if its top never gets that high
  let scroller = document.documentElement;
  if (code.scrollHeight > code.clientHeight) {
    scroller = code;
  }
  if (scroller.scrollTop + scroller.clientHeight >= scroller.scrollHeight - 5) {
    current = sections[sections.length - 1].id;
  }

  for (let i = 0; i < fileLinks.length; i++) {
    // what-i-can-do.md and my-edge.md share one section, so check the section around each link's target
    const target = document.querySelector(fileLinks[i].getAttribute("href"));
    if (target.closest("section").id === current) {
      fileLinks[i].classList.add("active");
    } else {
      fileLinks[i].classList.remove("active");
    }

    // lastChild is the file name after the <i> icon
    if (fileLinks[i].getAttribute("href") === "#" + current) {
      document.getElementById("tab-name").textContent = fileLinks[i].lastChild.textContent;
    }
  }
}

code.addEventListener("scroll", highlightFile);
window.addEventListener("scroll", highlightFile);
highlightFile();

// Learning log: hovering over or tapping a day shows its text under the timeline
const days = document.querySelectorAll(".timeline li");

function showDay(n) {
  for (let i = 0; i < days.length; i++) {
    days[i].classList.remove("active");
  }
  days[n].classList.add("active");

  const date = days[n].querySelector("time").textContent;
  const text = days[n].querySelector("p").textContent;
  document.getElementById("log-text").textContent = date + ": " + text;
}

// let gives each pass of the loop its own i, so each day remembers its number
for (let i = 0; i < days.length; i++) {
  days[i].onmouseenter = function () {
    showDay(i);
  };
  days[i].onclick = function () {
    showDay(i);
  };
}

// Start on the latest day
showDay(days.length - 1);

// Terminal: it starts closed, and the bar opens and closes it
function toggleTerminal() {
  const terminal = document.getElementById("terminal");
  terminal.classList.toggle("open");

  const open = terminal.classList.contains("open");
  terminal.querySelector(".term-head").setAttribute("aria-expanded", open);
  if (open) {
    document.getElementById("term-input").focus();
  }
}

// Terminal commands: print the command back, then answer it. Each command is one case of the switch
function runCommand() {
  const input = document.getElementById("term-input");
  const typed = input.value.trim();
  const words = typed.toLowerCase().split(" ");
  input.value = "";

  // createTextNode shows typed HTML as plain text, so it can't run
  const line = document.createElement("div");
  line.innerHTML = '<span class="prompt">shawn@pup:~$</span> ';
  line.appendChild(document.createTextNode(typed));
  document.getElementById("term-output").appendChild(line);

  switch (words[0]) {
    case "help":
      printLine("ls: list the files | open <file>: jump to a file | whoami | resume | theme | clear");
      break;
    case "ls": {
      let names = "";
      for (let i = 0; i < fileLinks.length; i++) {
        names += fileLinks[i].lastChild.textContent + "   ";
      }
      printLine(names);
      break;
    }
    case "open": {
      // "open edu" is enough: the first file whose name starts with it gets clicked
      let found = false;
      for (let i = 0; i < fileLinks.length; i++) {
        const name = fileLinks[i].lastChild.textContent;
        if (!found && words.length > 1 && name.startsWith(words[1])) {
          fileLinks[i].click();
          printLine("Opened " + name + ".");
          found = true;
        }
      }
      if (!found) {
        printLine("No such file. Type ls to see them.");
      }
      break;
    }
    case "whoami":
      // From the person array at the top: first name, last name, age
      printLine(person[0] + " " + person[1] + ", " + person[2] + " years old, BSIT 3rd Year at PUP Manila");
      break;
    case "resume":
      // Same as clicking the Download resume button
      document.getElementById("resume-link").click();
      printLine("Downloading my resume (PDF).");
      break;
    case "theme":
      toggleTheme();
      printLine("Switched the theme.");
      break;
    case "clear":
      document.getElementById("term-output").innerHTML = "";
      break;
    case "":
      break;
    default:
      printLine("Command not found: " + words[0] + ". Type help.");
  }

  // Keep the newest line in view
  const body = document.getElementById("term-body");
  body.scrollTop = body.scrollHeight;

  // false stops the form from reloading the page
  return false;
}

function printLine(text) {
  const line = document.createElement("div");
  line.className = "term-out";
  line.textContent = text;
  document.getElementById("term-output").appendChild(line);
}

// Phone: the file list slides in from the left. Picking a file closes it again
function toggleDrawer() {
  document.body.classList.toggle("drawer-open");
}

for (let i = 0; i < fileLinks.length; i++) {
  fileLinks[i].onclick = function () {
    document.body.classList.remove("drawer-open");
  };
}
