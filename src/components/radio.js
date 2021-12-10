import React from "react"
import PropTypes from "prop-types"
import { upperFirst } from "../utils/string"

import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
import styled from "styled-components"
import Label from "./label"

const StyledRadioGroup = styled(RadioGroupPrimitive.Root)``

const RadioGroup = ({ groupName, children, ...props }) => {
  return (
    <StyledFieldset>
      <StyledLabel htmlFor={`${groupName}-group`}>{upperFirst(groupName)}</StyledLabel>
      <StyledRadioGroup id={`${groupName}-group`} {...props}>
        {children}
      </StyledRadioGroup>
    </StyledFieldset>
  )
}

const StyledFieldset = styled.fieldset`
  all: unset;
`

const StyledLabel = styled(Label)`
  margin-bottom: var(--spacing-2);
`;

const StyledRadio = styled(RadioGroupPrimitive.Item)`
  all: unset;
`

const StyledIndicator = styled(RadioGroupPrimitive.Indicator)``

const StyledRadioLabel = styled.label`
  all: unset;
`

RadioGroup.propTypes = {
  groupName: PropTypes.string.isRequired,
}

export const BaseRadioGroup = RadioGroup
export const BaseRadio = StyledRadio
export const BaseIndicator = StyledIndicator
export const BaseRadioLabel = StyledRadioLabel
