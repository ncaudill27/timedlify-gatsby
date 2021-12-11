import React from "react"
import styled from "styled-components"
import { upperFirst } from "../utils/string"

import Label from "./label"

const NumberInput = ({ name, value, onChange, ...props }) => (
  <TimeLabel htmlFor={name} {...props}>
    {upperFirst(name)}
    <TimeInput id={name} type='number' value={value} onChange={onChange} />
  </TimeLabel>
)

const TimeLabel = styled(Label)`
  flex: 1;
  margin-top: var(--spacing-2);
`

const TimeInput = styled.input`
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding: 4px var(--spacing-0);
  width: 40%;

  text-align: center;
  border: none;
  background-color: var(--color-background-light);
  color: var(--color-text);
  transition: all 0.5s ease-in-out;

  &:focus,
  &:active {
    width: 70%;
    outline: 0.5px solid #00ff22;
    animation: glow 2s linear infinite;
  }

  @keyframes glow {
    0% {
      box-shadow: inset 0 0 1px 1px #00ff22, 0 0 2px 1px #00ff22;
    }
    50% {
      box-shadow: inset 0 0 2px 2px #00ff22, 0 0 5px 2px #00ff22;
    }
    100% {
      box-shadow: inset 0 0 1px 1px #00ff22, 0 0 2px 1px #00ff22;
    }
  }
`

export default NumberInput
