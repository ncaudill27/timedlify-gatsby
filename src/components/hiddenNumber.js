import React from "react"
import styled from "styled-components"

import NumberInput from "./inputNumber"

const NumberHidden = ({ isOpen, ...props }) => (
  <HidingInput
    style={{
      "--visibility": isOpen ? "visible" : "hidden",
      "--opacity": isOpen ? 1 : 0,
    }}
    {...props}
  />
)

const HidingInput = styled(NumberInput)`
  visibility: var(--visibility);
  flex: unset;
  margin: 0;
  margin-left: auto;
  opacity: var(--opacity);
  display: flex;
  gap: var(--spacing-1);
  align-items: center;
  white-space: nowrap;
`

export default NumberHidden
