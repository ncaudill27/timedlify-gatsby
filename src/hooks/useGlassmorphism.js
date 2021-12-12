import { useState, useEffect } from "react"
import { rgbToHsl, parseHsl } from "../utils/convertingColor"

const useGlassmorphism = (ref, options) => {
  const [background, setBackground] = useState("")

  useEffect(() => {
    console.log("render")
    if (typeof window !== undefined && ref.current) {
      const rgb = getComputedStyle(ref.current).backgroundColor
      const hsl = rgbToHsl(rgb)
      const [h, s, l] = parseHsl(hsl)
      console.log(h, s, l)

      const glassBackground = `
        linear-gradient(
          159.39deg,
          hsl(0deg, 0%, 6%, 0.8) -10%,
          hsl(0deg, 0%, 6%, 0) 110%
        ),
        linear-gradient(
          to right,
          hsl(0deg, 0%, 6%, 0.3) 0%,
          hsl(0deg, 0%, 6%, 0) 50%
        )
      `
    }
  }, [ref])
  return "hello"
}

export default useGlassmorphism
