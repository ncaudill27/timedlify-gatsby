import React from "react"
import styled from "styled-components"
import { useRadioGroupState } from "@react-stately/radio"
import { useRadioGroup } from "@react-aria/radio"

import RadioContext from "./radioContext"

const RadioGroup = props => {
  let { children, label } = props
  let state = useRadioGroupState(props)

  let { radioGroupProps, labelProps } = useRadioGroup(props, state)

  return (
    <div {...radioGroupProps}>
      <span {...labelProps}>{label}</span>
      <RadioContext.Provider value={state}>{children}</RadioContext.Provider>
    </div>
  )
}

export default RadioGroup
