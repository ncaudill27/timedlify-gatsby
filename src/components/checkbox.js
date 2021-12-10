import styled from "styled-components"

import * as CheckboxPrimitive from "@radix-ui/react-checkbox"

const StyledCheckbox = styled(CheckboxPrimitive.Root)`
  all: unset;
  background-color: white;
  width: 25;
  height: 25;
  border-radius: 4;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-elevation-low);
  &:hover: {
    background-color: var(--color-background-tint);
  }
  &:focus: {
    box-shadow: var(--shadow-elevation-medium);
  }
`

const StyledIndicator = styled(CheckboxPrimitive.Indicator)`
  color: var(--color-text);
`

// Exports
export const Checkbox = StyledCheckbox
export const CheckboxIndicator = StyledIndicator