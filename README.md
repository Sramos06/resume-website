# Resume Website

My web-based resume for Web Development (BSIT, Polytechnic University of the Philippines). Built with HTML, CSS and JavaScript only, no frameworks.

The page looks like a full-screen code editor: the file explorer on the left is the navigation, section titles are code comments, there's a terminal you can type in, and the footer is a status bar. It has a matcha coffee color theme with a dark mode and a light mode.

## View it

- Live: https://resume-website-phi-red.vercel.app
- Locally: run `python -m http.server` in this folder and go to http://localhost:8000. Opening `index.html` directly works too, but YouTube won't play the demo video from a file.

## What's on it

- About me, with a greeting that types itself and changes with the time of day
- Skills, built from a JavaScript array, with filter buttons
- What I can do and what my edge is
- Projects: Repaso (screenshot slideshow) and Simple Ordering System (demo video)
- Education and work experience table
- A learning log of what I learned on each build day
- Contact form that checks your input, then opens your email app
- A terminal at the bottom of the screen: type `help`
- Light and dark mode, a phone layout, a print layout, and my resume as a PDF to download
- Animations that switch off when your device is set to reduce motion

## Files

- `index.html`: page content, plus the print styles
- `css/style.css`: styles, with the colors in CSS variables at the top
- `js/script.js`: greeting, skills, light mode, line numbers, contact form check, projects, slideshow, animations, terminal and the phone menu
- `images/`: photos, school logos, favicon and project screenshots
- `files/`: my resume as a PDF
