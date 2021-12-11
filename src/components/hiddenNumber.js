import React from "react"
import styled from "styled-components"

import NumberInput from "./inputNumber"

const NumberHidden = ({ isOpen, ...props }) => <HidingInput {...props} />

const HidingInput = styled(NumberInput)`
  flex: unset;
  margin: 0;
  /* ----------
    TRIANGLE FORMAT
  position: relative;

    &:before {
      position: absolute;
      content: "";
      left: -10px;
      top: 50%;
      margin-top: -10px;
      width: 0;
      height: 0;
      border-top: 10px solid transparent;
      border-bottom: 10px solid transparent;
  
      border-right: 10px solid var(--color-background-dark);
    }
  ---------- */

  /* ----------
    Future media break props
    display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-1);
    & > * {
    flex: 1;
  }

  ---------- */
`

export default NumberHidden
