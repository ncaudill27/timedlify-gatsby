import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  :root {
  /* ----------
  SPACING VARIABLES
  ---------- */
  --spacing-0: 8px;
  --spacing-1: 16px;
  --spacing-2: 24px;
  --spacing-3: 32px;
  --spacing-4: 40px;
  --spacing-5: 48px;
  --spacing-6: 56px;
  --spacing-7: 64px;
  --spacing-8: 72px;
  --spacing-9: 80px;
  --spacing-10: 88px;
  --spacing-11: 96px;
  --spacing-12: 104px; 
  /* ----------
  COLOR PALETTE
  ---------- */
  --color-text:	white;
  --color-text-tint: hsl(183deg, 18%, 40%);
  --color-text-shade: hsl(183deg, 18%, 15%);
  --color-text-transparent: hsl(183deg, 28%, 88%);//#D8E8E9 color based on color text at 0.1 alpha
  --color-text-transparent-2: hsl(183deg, 21%, 85%);//#D0DFE0 color based on color text at 0.15 alpha
  --color-text-transparent-3: hsl(184deg, 18%, 81%);//#C6D6D7 color based on color text at 0.2 alpha
  --color-background: hsl(0deg, 0%, 15%);//#ebf9fa
  --color-background-shade: hsl(0deg, 0%, 6%);
  --color-background-tint: 	hsl(0deg, 0%, 31%);
  --color-background-io: hsl(0deg, 0%, 97%);
  --color-primary: 	hsl(128deg, 100%, 50%); // #00ff22
  --color-primary-muted: 	hsl(128deg, 100%, 70%); // #00ff22
  --color-secondary: hsl(3deg, 100%, 43%);
  /* ----------
  SHADOW VARIABLES
  ---------- */
  --shadow-color: 0deg 0% 5%;
  --shadow-elevation-low:
    0px 0.5px 0.7px hsl(var(--shadow-color) / 0.14),
    0px 0.9px 1.2px -0.5px hsl(var(--shadow-color) / 0.28),
    0px 2px 2.7px -1px hsl(var(--shadow-color) / 0.41);
  --shadow-elevation-medium:
    0px 0.5px 0.7px hsl(var(--shadow-color) / 0.14),
    0px 2.1px 2.8px -0.3px hsl(var(--shadow-color) / 0.25),
    0px 4.5px 6.1px -0.7px hsl(var(--shadow-color) / 0.36),
    0.1px 9.8px 13.2px -1px hsl(var(--shadow-color) / 0.47);
  --shadow-elevation-high:
    0px 0.5px 0.7px hsl(var(--shadow-color) / 0.15),
    0px 4.7px 6.3px -0.2px hsl(var(--shadow-color) / 0.22),
    0.1px 8.7px 11.7px -0.3px hsl(var(--shadow-color) / 0.28),
    0.1px 13.8px 18.6px -0.5px hsl(var(--shadow-color) / 0.35),
    0.2px 21.2px 28.6px -0.7px hsl(var(--shadow-color) / 0.42),
    0.2px 32.5px 43.9px -0.8px hsl(var(--shadow-color) / 0.48),
    0.4px 48.8px 65.9px -1px hsl(var(--shadow-color) / 0.55);
  }
  /*
    Josh's Custom CSS Reset
    https://www.joshwcomeau.com/css/custom-css-reset/
  */
  *, *::before, *::after {
    box-sizing: border-box;
  }
  * {
    margin: 0;
  }
  html, body {
    height: 100%;
  }
  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    background-color: var(--color-background);
    color: var(--color-text);
  }
  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }
  input, button, textarea, select {
    font: inherit;
  }
  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }
  #root, #__next {
    isolation: isolate;
  }
`
