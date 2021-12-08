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
