import React from "react"
import styled from "styled-components"

import Label from "./label"
import NumberInput from "./inputNumber"

const TimerDurationGroup = ({
  hours,
  minutes,
  seconds,
  setHours,
  setMinutes,
  setSeconds,
  handleChange,
}) => (
  <StyledFieldset>
    <Label as='legend'>Timer duration</Label>
    <NumberInput name='hours' value={hours} onChange={handleChange(setHours)} />
    <NumberInput
      name='minutes'
      value={minutes}
      onChange={handleChange(setMinutes)}
    />
    <NumberInput
      name='seconds'
      value={seconds}
      onChange={handleChange(setSeconds)}
    />
  </StyledFieldset>
)

const StyledFieldset = styled.fieldset`
  all: unset;
  display: flex;
  gap: var(--spacing-3);
`

export default TimerDurationGroup
