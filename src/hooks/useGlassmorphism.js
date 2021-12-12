import { useState, useEffect } from "react"
import { rgbToHsl } from "../utils/convertingColor"

const useGlassmorphism = (ref, options) => {
  const [background, setBackground] = useState("")

  useEffect(() => {
    console.log("render")
    if (typeof window !== undefined && ref.current) {
      const rgb = getComputedStyle(ref.current).backgroundColor
      const hsl = rgbToHsl(rgb)
      console.log(hsl)
    }
  }, [ref])
  return "hello"
}

export default useGlassmorphism
