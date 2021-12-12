import { useState, useEffect } from "react"

const useGlassmorphism = (ref, options) => {
  const [background, setBackground] = useState("")

  useEffect(() => {
    console.log("render")
    if (ref.current) {
      console.log(getComputedStyle(ref.current))
    }
  }, [ref])
  return "hello"
}

export default useGlassmorphism
