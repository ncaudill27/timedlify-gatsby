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
      rounds,
      setIsInterval,
      setName,
      setPlaylist,
      setColor,
      setHours,
      setMinutes,
      setSeconds,
      restInterval,
      setRestInterval,
      setRounds,
      handleSubmit,
      handleChange,
      handleRadix,
      loading,
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
        <IntervalFieldset
          style={{
            "--padding": isInterval ? "var(--spacing-1)" : 0,
            "--background-color": isInterval
              ? "var(--color-background-dark)"
              : "inherit",
            "--box-shadow": isInterval ? "var(--shadow-elevation-low)" : "none",
          }}
        >
          <IntervalCheckbox
            id='ic1'
            aria-expanded={isInterval}
            checked={isInterval}
            onCheckedChange={handleRadix(setIsInterval)}
          />
          <Flex
            style={{
              "--visibility": isInterval ? "visible" : "hidden",
              "--opacity": isInterval ? 1 : 0,
              "--height": isInterval ? "fit-content" : 0,
            }}
          >
            <NumberHidden
              name='rest time'
              value={restInterval}
              onChange={handleChange(setRestInterval)}
              isOpen={isInterval}
              aria-hidden={!isInterval}
              aria-labelledby='ic1'
            />
            <NumberHidden
              name='rounds'
              value={rounds}
              onChange={handleChange(setRounds)}
              isOpen={isInterval}
              aria-hidden={!isInterval}
              aria-labelledby='ic1'
            />
          </Flex>
        </IntervalFieldset>
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

const IntervalFieldset = styled.fieldset`
  all: unset;
  height: fit-content;
  width: fit-content;
  padding: var(--padding);

  border-radius: 5px;
  background-color: var(--background-color);
  box-shadow: var(--box-shadow);

  transition: all 250ms ease-in-out;
`

const StyledForm = styled.form`
  margin-top: var(--spacing-6);
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
  background-color: var(--color-background-light);
  color: var(--color-text);
  transition: all 0.5s ease-in-out;

  &:focus,
  &:active {
    width: 70%;
    outline: 0.5px solid var(--color-primary);
    animation: glow 2s linear infinite;
  }

  @keyframes glow {
    0% {
      box-shadow: inset 0 0 1px 1px var(--color-primary),
        0 0 2px 1px var(--color-primary);
    }
    50% {
      box-shadow: inset 0 0 2px 2px var(--color-primary),
        0 0 5px 2px var(--color-primary);
    }
    100% {
      box-shadow: inset 0 0 1px 1px var(--color-primary),
        0 0 2px 1px var(--color-primary);
    }
  }
`

const Flex = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-2);

  height: var(--height);

  visibility: var(--visibility);
  opacity: var(--opacity);
`

export default Form
