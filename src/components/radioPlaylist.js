import React from "react"
import styled from "styled-components"

import { BaseRadioGroup } from "./radioPrimitives"
import RadioPlaylistButton from "./radioPlaylistButton"
import useSpotifyPlaylists from "../hooks/useSpotifyPlaylists"

const PlaylistRadioGroup = props => {
  const { playlists, error } = useSpotifyPlaylists()

  return (
    <StyledRadioGroup {...props}>
      {!error ? (
        playlists.map(playlistData => (
          <RadioPlaylistButton key={playlistData.id} {...playlistData} />
        ))
      ) : (
        <>
          Error loading playlists
          <br />
          Please login
        </>
      )}
    </StyledRadioGroup>
  )
}

const StyledRadioGroup = styled(BaseRadioGroup)`
  display: flex;
  flex-direction: column;
  text-align: center;
`

export default PlaylistRadioGroup
