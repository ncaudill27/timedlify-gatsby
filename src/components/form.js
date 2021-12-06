import React from "react"
import styled from "styled-components"
import { useRadio, useRadioGroup } from "@react-aria/radio"

const Form = ({
  name,
  playlist,
  color,
  hours,
  minutes,
  noon,
  handleChange,
  handlePlaylist,
  handleColor,
  handleHours,
  handleMinutes,
  handleNoon,
  handleSubmit,
}) => {
  console.log(name)

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Label htmlFor='name'>
        Name
        <StyledInput
          id='name'
          type='text'
          name='name'
          value={name}
          onChange={handleChange}
          autoComplete='off'
        />
      </Label>
    </StyledForm>
  )
}

const StyledForm = styled.form`
  margin-top: var(--spacing-6);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-0);

  @media (max-width: 543px) {
    padding-left: var(--spacing-1);
    padding-right: var(--spacing-1);
  }
`

const Label = styled.label`
  display: block;
  font-size: ${18 / 16}rem; // 18px
  font-weight: 600;
  color: var(--color-text);
  text-align: center;
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
    animation: input-glow 3s linear infinite;
  }

  @keyframes input-glow {
    0% {
      box-shadow: inset 0 0 1px 1px #00ff22, 0 0 2px 1px #00ff22;
    }
    50% {
      box-shadow: inset 0 0 1px 1px #00ff22, 0 0 5px 2px #00ff22;
    }
    100% {
      box-shadow: inset 0 0 1px 1px #00ff22, 0 0 2px 2px #00ff22;
    }
  }
`

export default Form
