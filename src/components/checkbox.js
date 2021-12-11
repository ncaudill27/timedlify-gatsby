import styled from "styled-components"

import * as CheckboxPrimitive from "@radix-ui/react-checkbox"

const StyledCheckbox = styled(CheckboxPrimitive.Root)`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: var(--spacing-0);
  width: 25px;
  height: 25px;

  border-radius: 4px;
  background-color: var(--color-background-tint);

  box-shadow: var(--shadow-elevation-low);

  &:focus: {
    box-shadow: var(--shadow-elevation-medium);
  }
`

const StyledIndicator = styled(CheckboxPrimitive.Indicator)`
  color: red;
`

// Exports
export const Checkbox = StyledCheckbox
export const CheckboxIndicator = StyledIndicator
