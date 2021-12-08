import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
import styled from "styled-components"

const StyledRadio = styled(RadioGroupPrimitive.Item)`
  all: unset;
  background-color: white;
  width: 2;
  height: 2;
  border-radius: 100%;
  box-shadow: 0 2px 10px black;
  &:hover {
    background-color: violet;
  }
  &:focus {
    box-shadow: 0 0 0 2px black;
  }
`
const StyledIndicator = styled(RadioGroupPrimitive.Indicator)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: relative;
  &:after {
    content: "";
    display: block;
    width: 1;
    height: 1;
    border-radius: 50%;
    background-color: violet;
  }
`

export const RadioGroup = RadioGroupPrimitive.Root
export const Radio = StyledRadio
export const Indicator = StyledIndicator
