import React from "react"
import styled from "styled-components"

import Label from "./label"
import PlaylistRadioGroup from "./radioPlaylist"
import ColorRadioGroup from "./radioColor"
import Button from "./button"
import TimerDurationGroup from "./timerDurationGroup"
import IntervalCheckbox from "./checkboxInterval"
import NumberHidden from "./hiddenNumber"

const Form = React.forwardRef(
  (
    {
      name,
      playlist,
      color,
      hours,
      minutes,
      seconds,
      isInterval,
      setIsInterval,
      setName,
      setPlaylist,
      setColor,
      setHours,
      setMinutes,
      setSeconds,
      restInterval,
      setRestInterval,
      handleSubmit,
      handleChange,
      handleRadix,
    },
    ref
  ) => {
    return (
      <StyledForm ref={ref} onSubmit={handleSubmit}>
        <Label htmlFor='name'>
          Timer Name
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
          groupName='playlists'
          aria-labelledby='playlist-title'
          value={playlist}
          onValueChange={handleRadix(setPlaylist)}
          orientation='vertical'
        />
        <ColorRadioGroup
          groupName='colors'
          aria-labelledby='colors-title'
          value={color}
          onValueChange={handleRadix(setColor)}
          orientation='horizontal'
        />
        <TimerDurationGroup
          hours={hours}
          minutes={minutes}
          seconds={seconds}
          setHours={setHours}
          setMinutes={setMinutes}
          setSeconds={setSeconds}
          handleChange={handleChange}
        />
        <Flex>
          <IntervalCheckbox
            id='ic1'
            aria-expanded={isInterval}
            checked={isInterval}
            onCheckedChange={handleRadix(setIsInterval)}
          />
          <NumberHidden
            name='interval (seconds)'
            isOpen={isInterval}
            aria-labelledby='ic1'
          />
        </Flex>
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
  gap: var(--spacing-7);

  @media (max-width: 543px) {
    padding-left: var(--spacing-1);
    padding-right: var(--spacing-1);
  }
`

const StyledInput = styled.input`
  display: block;
  margin-top: var(--spacing-2);
  margin-left: auto;
  margin-right: auto;
  padding: 4px var(--spacing-0);
  width: 40%;

  text-align: center;
  border: none;
  background-color: var(--color-background-tint);
  color: var(--color-text);
  transition: all 0.5s ease-in-out;

  &:focus,
  &:active {
    width: 70%;
    outline: 0.5px solid #00ff22;
    animation: glow 2s linear infinite;
  }

  @keyframes glow {
    0% {
      box-shadow: inset 0 0 1px 1px #00ff22, 0 0 2px 1px #00ff22;
    }
    50% {
      box-shadow: inset 0 0 2px 2px #00ff22, 0 0 5px 2px #00ff22;
    }
    100% {
      box-shadow: inset 0 0 1px 1px #00ff22, 0 0 2px 1px #00ff22;
    }
  }
`

const Flex = styled.div`
  display: flex;
  align-items: center;
`

export default Form
