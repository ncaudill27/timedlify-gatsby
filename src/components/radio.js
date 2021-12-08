import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
import styled from "styled-components"

const StyledRadioGroup = styled(RadioGroupPrimitive.Root)`
  display: flex;
  flex-direction: column;
`

const StyledRadio = styled(RadioGroupPrimitive.Item)`
  all: unset;
  &:checked + ${RadioLabel} {
    background-color: #222222;
    box-shadow: -2px -1px 5px 1px #0c0c0c inset, 2px 1px 5px 1px #0c0c0c inset;
  }
`

const StyledIndicator = styled(RadioGroupPrimitive.Indicator)`
  all: unset;
  position: absolute;
  left: -9999px;
  width: 0;
  height: 0;
  visibility: hidden;
`

const StyledRadioLabel = styled.label`
  all: unset;
  display: block;
  border-bottom: 1px solid #4e4e4e;
  border-radius: 5px;
`

export const RadioGroup = StyledRadioGroup
export const Radio = StyledRadio
export const Indicator = StyledIndicator
export const RadioLabel = StyledRadioLabel
