# Design notes (v2)

The site looks like a code editor (VS Code style) that fills the whole screen. Every new part should look like something an editor would have: a panel, a tab, a file, a terminal line or a status bar item.

## Layout

| Region | Desktop | Phone (max-width 860px) |
|---|---|---|
| Top bar | Site name, path, Resume button | Same, plus a menu button that opens the explorer |
| Activity bar | Icon column on the far left | Becomes the bottom navigation bar |
| Explorer | File list (the navigation), profile links, school | Slides in from the left as a drawer |
| Editor | Tabs, breadcrumbs, line numbers, the content | Full width, no tabs or line numbers |
| Preview panel | Profile card and a phone-size preview of the site (iframe) | Hidden (hidden below 1250px too) |
| Terminal panel | Typeable terminal: `help`, `whoami`, `skills`, ... | A section near the top, with tap buttons for the commands |
| Status bar | Branch, current file, clock, light/dark switch | Hidden |

## Colors (CSS variables in `style.css`)

| Variable | Dark (default) | Light | Used for |
|---|---|---|---|
| `--bg` | #17120F | #E9DFCD | Page background, inputs |
| `--panel` | #211A16 | #FBF7EF | Editor background |
| `--bar` | #1B1512 | #F4EDE1 | Top bar, tabs, terminal, table headers |
| `--side` | #1D1713 | #F1E9DB | Explorer and preview panel |
| `--muted-bg` | #30261F | #E7DCC8 | Bar tracks, highlights |
| `--text` | #F2E8D9 | #3A2A1F | Main text |
| `--muted` | #B3A391 | #6B5848 | Labels, comments, input borders |
| `--border` | #3D3129 | #D9CBB4 | All dividers |
| `--accent` | #9BC26B | #46652A | The one accent: links, active states, buttons, status bar |
| `--on-accent` | #17120F | #FFFFFF | Text on accent |
| `--warn` | #E8B84A | #9A6A12 | Commit hashes, terminal highlights |
| `--error` | #E8907E | #A63A2A | Form errors, unknown commands |

One accent only. Every text color was checked for at least 4.5:1 contrast.

## Type

- Body: IBM Plex Sans, 15 to 16px, line height 1.65.
- Editor chrome (tabs, labels, file names, terminal, buttons): JetBrains Mono, 11 to 14px.
- Sizes: h1 44px (32px on phones), h2 24px, h3 17px, labels 11.5px uppercase mono.
- No accent-colored words inside headings.

## Spacing and shape

- Spacing steps: 4, 8, 12, 16, 24, 32, 48px.
- Corner radius: 4px for buttons and inputs, 6px for panels and images, 8px for windows.
- No floating card grids. Content sits in editor panes separated by 1px borders.

## Components

- **Button:** mono 12.5px, 1px border, 4px radius. The primary button is filled with the accent.
- **Social link:** 38px square with an inline SVG logo (`fill="currentColor"`), so it follows the theme.
- **Skill row:** name, bar track (`--muted-bg`), accent fill, level word.
- **Slideshow:** framed screenshot, prev and next buttons, a "1 / 4 name" counter.
- **Learning log:** a git-style timeline with an accent dot per commit.
- **Terminal line:** `shawn@pup:~$` prompt in accent, output in `--muted`, errors in `--error`.

## Motion

- Hover color changes: 0.2s. Drawer: 0.3s. Section fade-in: 0.6s. Skill bars: 1s.
- Typing: 45 to 70ms per letter.
- Only one or two things move at a time. Nothing loops except the blinking cursor and the clock.
- `@media (prefers-reduced-motion: reduce)` turns every animation off.

## Writing

- Real facts only, no em dashes, and no claims Shawn can't back up.
- For Repaso, "my part" is planning, design and testing.
