import React from "react"
import { BaseIndicator as Indicator } from "./radioPrimitives"
import { BaseRadioGroup, BaseRadio, BaseRadioLabel } from "./radioPrimitives"
import styled, { keyframes } from "styled-components"

const PlaylistRadioGroup = props => {
  const [playlists, setPlaylists] = React.useState([])
  React.useEffect(() => {
    fetch("/.netlify/functions/getSpotifyPlaylists")
      .then(res => res.json())
      .then(data => {
        console.log(typeof data.playlists.items)
        setPlaylists(data.playlists.items)
      })
  }, [fetch])

  return (
    <StyledRadioGroup {...props}>
      {playlists.map(({id, name, href}) => (
        <StyledRadio value={href} id={id}>
          <Indicator />
          <StyledRadioLabel htmlFor={id}>{name}</StyledRadioLabel>
        </StyledRadio>
      ))}
    </StyledRadioGroup>
  )
}

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
    animation: shimmer 2s linear infinite;
  }

  @keyframes shimmer {
    0% {
      box-shadow: -2px -1px 5px 1px #0c0c0c inset, 2px 1px 5px 1px #0c0c0c inset;
    }
    50% {
      box-shadow: -1px 0 2px 0 #0c0c0c inset, 1px 0 2px 0 #0c0c0c inset;
    }
    100% {
      box-shadow: -2px -1px 5px 1px #0c0c0c inset, 2px 1px 5px 1px #0c0c0c inset;
    }
  }
`

export default PlaylistRadioGroup
