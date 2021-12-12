import { useState, useEffect } from "react"
import { rgbToHsl, parseHsl } from "../utils/convertingColor"

const useGlassmorphism = (ref, options) => {
  const [background, setBackground] = useState("")

  useEffect(() => {
    console.log("render")
    if (typeof window !== undefined && ref.current) {
      const domNode = ref.current
      const rgb = getComputedStyle(domNode).backgroundColor
      console.log("color", rgb);
      const hsl = rgbToHsl(rgb)
      const [h, s, l] = parseHsl(hsl)

      const hsl80 = `hsl(${h}, ${s}, ${l}, 0.8)`
      const hsl30 = `hsl(${h}, ${s}, ${l}, 0.3)`
      const hsl0 = `hsl(${h}, ${s}, ${l}, 0)`

      const glassBackground = `
        linear-gradient(
          159.39deg,
          ${hsl80} -10%,
          ${hsl0} 110%
        ),
        linear-gradient(
          to right,
          ${hsl30} 0%,
          ${hsl0} 50%
        )
      `
      
      const elevationLow = `
        0px 0.5px 0.7px hsl(${h}, ${s}, ${parseInt(l) / 3 + "%"}, 0.14),
        0px 0.9px 1.2px -0.5px hsl(${h}, ${s}, ${parseInt(l) / 3 + "%"}, 0.28),
        0px 2px 2.7px -1px hsl(${h}, ${s}, ${parseInt(l) / 3 + "%"}, 0.41)
      `

      const elevationMedium = `
        0px 0.5px 0.7px hsl(${h}, ${s}, ${parseInt(l) / 3 + "%"}, 0.14),
        0px 2.1px 2.8px -0.3px hsl(${h}, ${s}, ${parseInt(l) / 3 + "%"}, 0.25),
        0px 4.5px 6.1px -0.7px hsl(${h}, ${s}, ${parseInt(l) / 3 + "%"}, 0.36),
        0.1px 9.8px 13.2px -1px hsl(${h}, ${s}, ${parseInt(l) / 3 + "%"}, 0.47)
      `

      const elevationHigh = `
        0px 0.5px 0.7px hsl(${h}, ${s}, ${parseInt(l) / 3 + "%"}, 0.15),
        0px 4.7px 6.3px -0.2px hsl(${h}, ${s}, ${parseInt(l) / 3 + "%"}, 0.22),
        0.1px 8.7px 11.7px -0.3px hsl(${h}, ${s}, ${
        parseInt(l) / 3 + "%"
      }, 0.28),
        0.1px 13.8px 18.6px -0.5px hsl(${h}, ${s}, ${
        parseInt(l) / 3 + "%"
      }, 0.35),
        0.2px 21.2px 28.6px -0.7px hsl(${h}, ${s}, ${
        parseInt(l) / 3 + "%"
      }, 0.42),
        0.2px 32.5px 43.9px -0.8px hsl(${h}, ${s}, ${
        parseInt(l) / 3 + "%"
      }, 0.48),
        0.4px 48.8px 65.9px -1px hsl(${h}, ${s}, ${parseInt(l) / 3 + "%"}, 0.55)
      `

      console.log("shadow", typeof domNode.style.boxShadow)
      domNode.style.boxShadow = elevationMedium
      domNode.style.background = glassBackground
      domNode.style.backdropFilter = "var(--glass-blur)"
    }
  }, [ref])
  return "hello"
}

export default useGlassmorphism
