import React from "react"
import { BaseIndicator as Indicator } from "./radio"
import { BaseRadioGroup, BaseRadio, BaseRadioLabel } from "./radio"
import styled, { keyframes } from "styled-components"

const ColorRadioGroup = props => (
  <StyledRadioGroup {...props}>
    <ColorRadio color='hsl(27, 100%, 50%)' />
    <ColorRadio color='hsl(0, 100%, 50%)' />
    <ColorRadio color='hsl(281, 100%, 50%)' />
    <ColorRadio color='hsl(192, 100%, 50%)' />
    <ColorRadio color='hsl(69, 100%, 50%)' />
  </StyledRadioGroup>
)

const ColorRadio = ({ color }) => (
  <StyledRadio value={color} id={color}>
    <Indicator />
    <StyledRadioLabel
      style={{ "--background-color": color }}
      htmlFor={color}
    ></StyledRadioLabel>
  </StyledRadio>
)

const StyledRadioGroup = styled(BaseRadioGroup)`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-items: center;
  align-content: center;
`

const StyledRadio = styled(BaseRadio)`
  border-radius: 5px;
  height: 45px;
  width: 45px;
`

const dance = keyframes`
  0% {
    transform: 
    translate(1px, 1px)
    rotate(10deg);
  }
  25% {
    transform:
    translate(-1px, 1px)
      rotate(-6deg);
    }
  50% {
    transform: 
    translate(-1px, 1px)
    rotate(8deg);
  }
  75% {
    transform: 
    translate(-1px, -1px)
    rotate(-1deg);
  }
  100% {
    transform: 
    translate(1px, 1px)
    rotate(10deg);
  }
`

const StyledRadioLabel = styled(BaseRadioLabel)`
  display: block;
  width: 45px;
  height: 45px;
  background-color: var(--background-color);
  transition: all 0.25s ease-in-out;

  ${StyledRadio}[data-state="checked"] & {
    width: 60px;
    height: 60px;
  }

  ${StyledRadio}:focus & {
    animation: ${dance} 0.75s linear infinite;
  }
`

export default ColorRadioGroup
