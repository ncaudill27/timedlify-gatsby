import React from "react"
import styled from "styled-components"

import * as LabelPrimitive from "@radix-ui/react-label"
import { CheckIcon } from "@radix-ui/react-icons"
import { Checkbox, CheckboxIndicator } from "./checkbox"

const IntervalCheckbox = () => (
  <Label htmlFor='c1'>
    <Checkbox id='c1'>
      <CheckboxIndicator>
        <CheckIcon />
      </CheckboxIndicator>
    </Checkbox>
    Repeating timer
  </Label>
)

const Flex = styled.div``

const Label = styled(LabelPrimitive.Root)`
  display: flex;
  align-items: center;
  padding-left: 0;
  color: var(--color-text);
  font-size: ${22 / 16}rem;
`

export default IntervalCheckbox
