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
  position: relative;

  visibility: var(--visibility);
  opacity: var(--opacity);

  margin: 0;
  padding: var(--spacing-0) var(--spacing-1);
  border-radius: 5px;

  white-space: nowrap;
  text-align: center;

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
