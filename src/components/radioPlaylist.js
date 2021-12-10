import React from "react"
import { BaseIndicator as Indicator } from "./radio"
import { BaseRadioGroup, BaseRadio, BaseRadioLabel } from "./radio"
import styled, { keyframes } from "styled-components"

const PlaylistRadioGroup = props => (
  <StyledRadioGroup {...props}>
    <StyledRadio value='Hi' id='r1'>
      <Indicator />
      <StyledRadioLabel htmlFor='r1'>Hi</StyledRadioLabel>
    </StyledRadio>
    <StyledRadio value='WTF' id='r2'>
      <Indicator />
      <StyledRadioLabel htmlFor='r2'>Wtf</StyledRadioLabel>
    </StyledRadio>
    <StyledRadio value='more' id='r3'>
      <Indicator />
      <StyledRadioLabel htmlFor='r3'>more</StyledRadioLabel>
    </StyledRadio>
    <StyledRadio value='test' id='r4'>
      <Indicator />
      <StyledRadioLabel htmlFor='r4'>test</StyledRadioLabel>
    </StyledRadio>
    <StyledRadio value='end' id='r5'>
      <Indicator />
      <StyledRadioLabel htmlFor='r5'>end</StyledRadioLabel>
    </StyledRadio>
  </StyledRadioGroup>
)

const StyledRadioGroup = styled(BaseRadioGroup)`
  display: flex;
  flex-direction: column;
  text-align: center;
`

const StyledRadio = styled(BaseRadio)`
  border-radius: 5px;

  &:first-of-type {
    margin-top: calc(var(--spacing-0) * -1);
  }
`

const glow = keyframes`
  0% {
    box-shadow:
      -2px -1px 5px 1px #0c0c0c inset,
      2px 1px 5px 1px #0c0c0c inset;
  }
  50% {
    box-shadow:
      -1px 0 2px 0 #0c0c0c inset,
      1px 0 2px 0 #0c0c0c inset;
  }
  100% {
    box-shadow:
      -2px -1px 5px 1px #0c0c0c inset,
      2px 1px 5px 1px #0c0c0c inset;
  }
`

const StyledRadioLabel = styled(BaseRadioLabel)`
  display: block;
  padding: var(--spacing-1);
  padding-bottom: var(--spacing-0);
  transition: all 0.25s ease-in-out;

  text-align: center;
  font-size: ${20 / 16}rem;
  border-bottom: 1px solid #4e4e4e;
  border-radius: 5px;

  ${StyledRadio}[data-state="checked"] & {
    background-color: #222222;
    box-shadow: -2px -1px 5px 1px #0c0c0c inset, 2px 1px 5px 1px #0c0c0c inset;
  }
  ${StyledRadio}:focus & {
    animation: ${glow} 2s linear infinite;
  }
`

export default PlaylistRadioGroup
