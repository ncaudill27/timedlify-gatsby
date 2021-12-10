import React from "react"
import styled, { keyframes } from "styled-components"

import Label from "./label"
import PlaylistRadioGroup from "./radioPlaylist"
import ColorRadioGroup from "./radioColor"
import Button from "./button"

const Form = React.forwardRef(
  (
    {
      name,
      playlist,
      color,
      hours,
      minutes,
      seconds,
      setName,
      setPlaylist,
      setColor,
      setHours,
      setMinutes,
      setSeconds,
      handleSubmit,
      handleChange,
      handleRadix,
    },
    ref
  ) => {
    return (
      <StyledForm ref={ref} onSubmit={handleSubmit}>
        <Label htmlFor='name'>
          Name
          <StyledInput
            id='name'
            type='text'
            name='name'
            value={name}
            onChange={handleChange(setName)}
            autoComplete='off'
          />
        </Label>
        <PlaylistRadioGroup
          groupName='Playlists'
          aria-labelledby='playlist-title'
          value={playlist}
          onValueChange={handleRadix(setPlaylist)}
          orientation='vertical'
        />
        <ColorRadioGroup
          groupName='Colors'
          aria-labelledby='colors-title'
          value={color}
          onValueChange={handleRadix(setColor)}
          orientation='horizontal'
        />
        <StyledFieldset>
          <TimeLabel htmlFor='hours'>
            Hours
            <TimeInput
              id='hours'
              type='number'
              value={hours}
              onChange={handleChange(setHours)}
            />
          </TimeLabel>
          <TimeLabel htmlFor='minutes'>
            Minutes
            <TimeInput
              id='minutes'
              type='number'
              value={minutes}
              onChange={handleChange(setMinutes)}
            />
          </TimeLabel>
          <TimeLabel htmlFor='seconds'>
            Seconds
            <TimeInput
              id='seconds'
              type='number'
              value={seconds}
              onChange={handleChange(setSeconds)}
            />
          </TimeLabel>
        </StyledFieldset>
        <Button
          style={{
            color: "var(--color-background)",
            marginTop: "auto",
            marginBottom: "var(--spacing-2)",
          }}
          type='submit'
        >
          Create Timer
        </Button>
      </StyledForm>
    )
  }
)

const StyledForm = styled.form`
  margin-top: var(--spacing-6);
  height: calc(100vh - 136px);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3);

  @media (max-width: 543px) {
    padding-left: var(--spacing-1);
    padding-right: var(--spacing-1);
  }
`

const glow = keyframes`
  0% {
    box-shadow: inset 0 0 1px 1px #00ff22, 0 0 2px 1px #00ff22;
  }
  50% {
    box-shadow: inset 0 0 1px 1px #00ff22, 0 0 5px 2px #00ff22;
  }
  100% {
    box-shadow: inset 0 0 1px 1px #00ff22, 0 0 2px 2px #00ff22;
  }
`

const StyledInput = styled.input`
  display: block;
  margin-top: var(--spacing-0);
  margin-left: auto;
  margin-right: auto;
  height: var(--spacing-3);
  width: 40%;

  text-align: center;
  border: none;
  background-color: #4e4e4e;
  color: var(--color-text);
  transition: all 0.5s ease-in-out;

  &:focus,
  &:active {
    width: 70%;
    outline: 0.5px solid #00ff22;
    animation: ${glow} 3s linear infinite;
  }
`

const StyledFieldset = styled.fieldset`
  all: unset;
  display: flex;
  gap: var(--spacing-3);
`

const TimeLabel = styled(Label)`
  flex: 1;
`

const TimeInput = styled.input`
  width: 100%;
`

export default Form
