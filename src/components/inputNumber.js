import React from "react"
import styled from "styled-components"
import { upperFirst } from "../utils/string"

import Label from "./label"

const NumberInput = ({ name, value, onChange }) => (
  <TimeLabel htmlFor={name}>
    {upperFirst(name)}
    <TimeInput id={name} type='number' value={value} onChange={onChange} />
  </TimeLabel>
)

const TimeLabel = styled(Label)`
  flex: 1;
  margin-top: var(--spacing-2);
`

const TimeInput = styled.input`
  width: 100%;
`

export default NumberInput
