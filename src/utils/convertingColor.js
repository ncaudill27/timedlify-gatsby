// https://stackoverflow.com/questions/10970958/get-a-color-component-from-an-rgb-string-in-javascript
const parseRgb = string => {
  return string
    .substring(4, string.length - 1)
    .replace(/ /g, "")
    .split(",")
}

// https://css-tricks.com/converting-color-spaces-in-javascript/
export const rgbToHsl = rgb => {
  let [r, g, b] = parseRgb(rgb)
  // Make r, g, and b fractions of 1
  r /= 255
  g /= 255
  b /= 255

  // Find greatest and smallest channel values
  let cmin = Math.min(r, g, b),
    cmax = Math.max(r, g, b),
    delta = cmax - cmin,
    h = 0,
    s = 0,
    l = 0
  // Calculate hue
  // No difference
  if (delta == 0) h = 0
  // Red is max
  else if (cmax == r) h = ((g - b) / delta) % 6
  // Green is max
  else if (cmax == g) h = (b - r) / delta + 2
  // Blue is max
  else h = (r - g) / delta + 4

  h = Math.round(h * 60)

  // Make negative hues positive behind 360°
  if (h < 0) h += 360
  // Calculate lightness
  l = (cmax + cmin) / 2

  // Calculate saturation
  s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1))

  // Multiply l and s by 100
  s = +(s * 100).toFixed(1)
  l = +(l * 100).toFixed(1)

  return "hsl(" + h + "," + s + "%," + l + "%)"
}

// https://www.demo2s.com/javascript/javascript-regex-match-and-parse-hsl-color-string-with-regex.html
export const parseHsl = (string = "") => {
  console.log(string)
  const regexp =
    /hsl\(\s*(\d+)\s*,\s*(\d+(?:\.\d+)?%)\s*,\s*(\d+(?:\.\d+)?%)\)/g
  return regexp.exec(string).slice(1)
}

export const extractHSLValuesFromNode = node => {
  const rgb = getComputedStyle(node).backgroundColor
  const hsl = rgbToHsl(rgb)
  const [h, s, l] = parseHsl(hsl)

  return {
    h,
    s,
    l,
  }
}

export const stepDownValue = (value, step = 1) => {
  return parseInt(value) * step + "%"
}
