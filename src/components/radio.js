import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
import styled from "styled-components"

const StyledRadioGroup = styled(RadioGroupPrimitive.Root)``

const StyledRadio = styled(RadioGroupPrimitive.Item)`
  all: unset;
`

const StyledIndicator = styled(RadioGroupPrimitive.Indicator)``

const StyledRadioLabel = styled.label`
  all: unset;
`

export const BaseRadioGroup = StyledRadioGroup
export const BaseRadio = StyledRadio
export const BaseIndicator = StyledIndicator
export const BaseRadioLabel = StyledRadioLabel
