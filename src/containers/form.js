import React, { useState, useRef } from "react"
import { useMutation } from "@apollo/client"
import { CREATE_TIMEDLIFY } from "../utils/graphql/gql"

import StyledForm from "../components/form"

const Form = props => {
  const formEl = useRef()
  const [createTimedlify, { loading }] = useMutation(CREATE_TIMEDLIFY, {
    onCompleted: () => resetForm(),
  })

  const [name, setName] = useState("")
  const [playlist, setPlaylist] = useState("")
  const [color, setColor] = useState("")
  const [hours, setHours] = useState(null)
  const [minutes, setMinutes] = useState(null)
  const [seconds, setSeconds] = useState(null)
  const [isInterval, setIsInterval] = useState(false)
  const [restInterval, setRestInterval] = useState(null)
  const [rounds, setRounds] = useState(null)
  const handleChange = setFn => e => setFn(e.target.value)
  const handleRadix = setFn => val => setFn(val)

  const resetForm = () => {
    setName("")
    setPlaylist("")
    setColor("")
    setHours(null)
    setMinutes(null)
    setSeconds(null)
    setIsInterval(false)
    setRestInterval(null)
    setRounds(null)
  }

  const handleSubmit = e => {
    e.preventDefault()
    createTimedlify({
      variables: {
        name,
        playlist,
        color,
        hours,
        minutes,
        seconds,
        interval: isInterval,
        restInterval,
        rounds: restInterval,
      },
    })
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
    loading
  }

  return <StyledForm ref={formEl} {...{ ...formLogic, ...props }} />
}

export default Form
