import React, { useState, useRef } from "react"

import StyledForm from "../components/form"

const Form = props => {
  const formEl = useRef()

  const [name, setName] = useState("")
  const [playlist, setPlaylist] = useState("")
  const [color, setColor] = useState("")
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const [noon, setNoon] = useState("PM")
  const handleChange = setFn => e => setFn(e.target.value)
  const handleRadix = setFn => val => setFn(val)

  const handleSubmit = e => {
    e.preventDefault()
    console.log(name, playlist, color, hours, minutes, seconds)
  }

  const formLogic = {
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
  }

  return <StyledForm ref={formEl} {...{ ...formLogic, ...props }} />
}

export default Form
