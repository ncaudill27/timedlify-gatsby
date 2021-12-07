import React from "react"
import { useRadio } from "@react-aria/radio"

import RadioContext from "./radioContext"

const Radio = props => {
  let { children } = props
  let state = React.useContext(RadioContext)
  let ref = React.useRef(null)
  let { inputProps } = useRadio(props, state, ref)

  return (
    <label style={{ display: "block" }}>
      <input {...inputProps} ref={ref} />
      {children}
    </label>
  )
}

export default Radio
