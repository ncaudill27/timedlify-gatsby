import React from "react"
import { BaseIndicator as Indicator } from "./radio"
import { BaseRadioGroup, BaseRadio, BaseRadioLabel } from "./radio"
import styled from "styled-components"

const PlaylistRadioGroup = props => (
  <StyledRadioGroup {...props}>
    <label>Playlists</label>
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
  &[data-state="checked"] ${StyledRadioLabel} {
    background-color: #222222;
    box-shadow: -2px -1px 5px 1px #0c0c0c inset, 2px 1px 5px 1px #0c0c0c inset;
  }
`

const StyledRadioLabel = styled(BaseRadioLabel)`
  display: block;
  padding: var(--spacing-1);
  padding-bottom: var(--spacing-0);
  
  text-align: center;
  font-size: ${20 / 16}rem;
  border-bottom: 1px solid #4e4e4e;
  border-radius: 5px;
`

export default PlaylistRadioGroup
