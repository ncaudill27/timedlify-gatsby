import React, { useState } from "react"
import { useRadioGroupState } from "@react-stately/radio"

import StyledForm from "../components/form"

const Form = props => {
  const [name, setName] = useState("")
  const handleChange = e => setName(e.target.value)

  const [playlist, setPlaylist] = useState("")
  const handlePlaylist = e => setPlaylist(e.target.value)

  const [color, setColor] = useState("")
  const handleColor = e => setColor(e.target.value)

  const [hours, setHours] = useState(12)
  const handleHours = val => {
    if (val < 1) setHours(12)
    else if (val > 12) setHours(1)
    else setHours(val)
  }

  const [minutes, setMinutes] = useState(0)
  const handleMinutes = val => {
    if (val < 0) setMinutes(59)
    else if (val > 59) setMinutes(0)
    else setMinutes(val)
  }

  const [noon, setNoon] = useState("PM")
  const handleNoon = val => setNoon(val)

  const handleSubmit = e => {
    e.preventDefault()
  }

  const formLogic = {
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
  }

  return <StyledForm {...{ ...formLogic, ...props }} />
}

export default Form
