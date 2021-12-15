import { useState, useEffect } from "react"
import {
  extractHSLValuesFromNode,
  stepDownValue,
} from "../utils/convertingColor"

const useGlassmorphism = (ref, options) => {
  const [background, setBackground] = useState("")

  useEffect(() => {
    if (typeof window !== undefined && ref.current) {
      const domNode = ref.current
      const { h, s, l } = extractHSLValuesFromNode(domNode)

      const hsl60 = `hsl(${h}, ${s}, ${parseInt(l) * 1.3 + "%"}, 0.5)`
      const hsl20 = `hsl(${h}, ${s}, ${parseInt(l) * 1.3 + "%"}, 0.2)`
      const hsl03 = `hsl(${h}, ${s}, ${parseInt(l) * 1.3 + "%"}, 0.03)`

      const glassBackground = `
        linear-gradient(
          159.39deg,
          ${hsl60} -10%,
          ${hsl03} 110%
        ),
        linear-gradient(
          to right,
          ${hsl20} 0%,
          ${hsl03} 50%
        ),
        linear-gradient(
          159.39deg,
          hsl(0deg, 0%, 100%, 0.1) 40%,
          ${hsl03} 110%
        )
      `

      const elevationLow = `
        0px 0.5px 0.7px hsl(${h}, ${s}, ${l}, 0.14),
        0px 0.9px 1.2px -0.5px hsl(${h}, ${s}, ${l}, 0.28),
        0px 2px 2.7px -1px hsl(${h}, ${s}, ${l}, 0.28)
      `

      const elevationMedium = `
        inset -2px 2px 5px 1px hsl(0deg, 0%, 100%, 0.1),
        0px 0.5px 0.7px hsl(${h}, ${s}, ${l}, 0.14),
        0px 2.1px 2.8px -0.3px hsl(
          ${h}, ${stepDownValue(s, 0.8)}, ${stepDownValue(l, 0.8)}, 0.25
      ),
        0px 4.5px 6.1px -0.7px hsl(
          ${h}, ${stepDownValue(s, 0.75)}, ${stepDownValue(l, 0.75)}, 0.36
      ),
        0.1px 9.8px 13.2px -1px hsl(
          ${h}, ${stepDownValue(s, 0.5)}, ${stepDownValue(l, 0.5)}, 0.47
      )
      `

      const elevationHigh = `
        0px 0.5px 0.7px hsl(${h}, ${s}, ${l}, 0.15),
        0px 4.7px 6.3px -0.2px hsl(
          ${h}, ${stepDownValue(s, 0.6)}, ${stepDownValue(l, 0.6)}, 0.25
        ),
        0.1px 8.7px 11.7px -0.3px hsl(
          ${h}, ${stepDownValue(s, 0.5)}, ${stepDownValue(l, 0.5)}, 0.28
        ),
        0.1px 13.8px 18.6px -0.5px hsl(
          ${h}, ${stepDownValue(s, 0.45)}, ${stepDownValue(l, 0.45)}, 0.35
        ),
        0.2px 21.2px 28.6px -0.7px hsl(
          ${h}, ${stepDownValue(s, 0.4)}, ${stepDownValue(l, 0.4)}, 0.42
        ),
        0.2px 32.5px 43.9px -0.8px hsl(
          ${h}, ${stepDownValue(s, 0.2)}, ${stepDownValue(l, 0.2)}, 0.48
        ),
        0.4px 48.8px 65.9px -1px hsl(
          ${h}, ${stepDownValue(s, 0.1)}, ${stepDownValue(l, 0.1)}, 0.55
        )
      `

      domNode.style.boxShadow = elevationMedium
      domNode.style.background = glassBackground
      domNode.style.backdropFilter = "var(--glass-blur)"
      domNode.style.border = "1px solid rgba(255, 255, 255, 0.18)"
    }
  }, [ref, extractHSLValuesFromNode, stepDownValue])
  return "hello"
}

export default useGlassmorphism
