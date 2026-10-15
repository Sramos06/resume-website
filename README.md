# Resume Website

My web-based resume for Web Development (BSIT, Polytechnic University of the Philippines). Built with HTML, CSS and JavaScript only, no frameworks.

The page is designed to look like a code editor: the navigation is file tabs, section titles are code comments, and the footer is a status bar. It has a matcha coffee color theme with a dark mode and a light mode.

## View it

- Live: https://resume-website-phi-red.vercel.app
- Locally: open `index.html` in a browser, or run `python -m http.server` in this folder and go to http://localhost:8000

## What's on it

- About me, with a greeting that changes with the time of day
- Skills, built from a JavaScript array, with filter buttons
- What I can do and what my edge is
- Projects: Repaso and Simple Ordering System
- Education and work experience table
- Contact form that checks your input, then opens your email app
- Light and dark mode, a back-to-top button, and a layout that works on phones

## Files

- `index.html`: page content
- `css/style.css`: styles, with the colors in CSS variables at the top
- `js/script.js`: greeting, skills filter, light mode, line numbers, back-to-top button and the contact form check
- `images/`: photo, favicon and project screenshots
