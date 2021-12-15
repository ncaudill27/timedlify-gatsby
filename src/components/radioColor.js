import React from "react"
import { BaseIndicator as Indicator } from "./radioPrimitives"
import { BaseRadioGroup, BaseRadio, BaseRadioLabel } from "./radioPrimitives"
import styled, { keyframes } from "styled-components"
import useGlassmorphism from "../hooks/useGlassmorphism"

const ColorRadioGroup = props => (
  <StyledRadioGroup {...props}>
    <ColorRadio color='hsl(27, 100%, 50%)' />
    <ColorRadio color='hsl(0, 100%, 50%)' />
    <ColorRadio color='hsl(281, 100%, 50%)' />
    <ColorRadio color='hsl(192, 100%, 50%)' />
    <ColorRadio color='hsl(69, 100%, 50%)' />
  </StyledRadioGroup>
)

const ColorRadio = ({ color }) => {
  const radioEl = React.useRef()
  useGlassmorphism(radioEl)
  return (
    <StyledRadio value={color} id={color}>
      <Indicator />
      <StyledRadioLabel
        ref={radioEl}
        style={{ "--background-color": color }}
        htmlFor={color}
      ></StyledRadioLabel>
    </StyledRadio>
  )
}

const StyledRadioGroup = styled(BaseRadioGroup)`
  display: flex;
  align-items: center;
  height: 55px;
`

const StyledRadio = styled(BaseRadio)`
  flex: 1;
  border-radius: 5px;
  height: 55px;
`

const StyledRadioLabel = styled(BaseRadioLabel)`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 45px;
  height: 45px;

  background-color: var(--background-color);
  border-radius: 5px;

  transition: all 0.25s ease-in-out;
  box-shadow: var(--shadow-elevation-low);

  ${StyledRadio}[data-state="checked"] & {
    width: 55px;
    height: 55px;
    box-shadow: var(--shadow-elevation-medium);
  }

  ${StyledRadio}:focus & {
    animation: dance 0.75s linear infinite;
  }
  @keyframes dance {
    0% {
      transform: translate(1px, 1px) rotate(10deg);
    }
    25% {
      transform: translate(-1px, 1px) rotate(-6deg);
    }
    50% {
      transform: translate(-1px, 1px) rotate(6deg);
    }
    75% {
      transform: translate(-1px, -1px) rotate(-6deg);
    }
    100% {
      transform: translate(1px, 1px) rotate(10deg);
    }
  }
`

export default ColorRadioGroup
