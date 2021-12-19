import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { getSpotifyPlaylists } from "../utils/fetch"

import { BaseRadioGroup } from "./radioPrimitives"
import RadioPlaylistButton from "./radioPlaylistButton"

const PlaylistRadioGroup = props => {
  const [playlists, setPlaylists] = useState([])
  useEffect(() => {
    async function fetchPlaylists() {
      const { playlists: fetchedPlaylists, error } = await getSpotifyPlaylists()
      console.log("Playlists: ", fetchedPlaylists)
      setPlaylists(fetchedPlaylists)
    }

    fetchPlaylists()
  }, [])

  return (
    <StyledRadioGroup {...props}>
      {playlists.map(playlistData => (
        <RadioPlaylistButton key={playlistData.id} {...playlistData} />
      ))}
    </StyledRadioGroup>
  )
}

const StyledRadioGroup = styled(BaseRadioGroup)`
  display: flex;
  flex-direction: column;
  text-align: center;
`

export default PlaylistRadioGroup
