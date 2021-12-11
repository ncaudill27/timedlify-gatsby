import React from "react"
import styled from "styled-components"

import * as LabelPrimitive from "@radix-ui/react-label"
import { CheckIcon } from "@radix-ui/react-icons"
import { Checkbox, CheckboxIndicator } from "./checkbox"

const IntervalCheckbox = () => (
  <form>
    <Flex>
      <Checkbox id='c1'>
        <CheckboxIndicator>
          <CheckIcon />
        </CheckboxIndicator>
      </Checkbox>
      <Label css={{ paddingLeft: 15 }} htmlFor='c1'>
        Repeating timer
      </Label>
    </Flex>
  </form>
)

const Flex = styled.div`
  display: flex;
  align-items: center;
`

const Label = styled(LabelPrimitive.Root)`
  margin-left: var(--spacing-1);
  color: var(--color-text);
  font-size: ${22 / 16}rem;
`

export default IntervalCheckbox
