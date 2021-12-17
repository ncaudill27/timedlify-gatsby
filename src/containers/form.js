import React, { useState, useRef } from "react"

import StyledForm from "../components/form"

const Form = props => {
  const formEl = useRef()

  const [name, setName] = useState("")
  const [playlist, setPlaylist] = useState("")
  const [color, setColor] = useState("")
  const [hours, setHours] = useState(null)
  const [minutes, setMinutes] = useState(null)
  const [seconds, setSeconds] = useState(null)
  const [isInterval, setIsInterval] = useState(false)
  const [restInterval, setRestInterval] = useState(null)
  const [roundInterval, setRoundInterval] = useState(null)
  const handleChange = setFn => e => setFn(e.target.value)
  const handleRadix = setFn => val => setFn(val)

  const handleSubmit = e => {
    e.preventDefault()
    console.log(
      name,
      playlist,
      color,
      hours,
      minutes,
      seconds,
      isInterval,
      restInterval
    )
  }

  const formLogic = {
    name,
    playlist,
    color,
    hours,
    minutes,
    seconds,
    isInterval,
    roundInterval,
    setIsInterval,
    setName,
    setPlaylist,
    setColor,
    setHours,
    setMinutes,
    setSeconds,
    restInterval,
    setRestInterval,
    setRoundInterval,
    handleSubmit,
    handleChange,
    handleRadix,
  }

  return <StyledForm ref={formEl} {...{ ...formLogic, ...props }} />
}

export default Form
