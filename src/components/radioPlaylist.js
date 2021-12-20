import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { getSpotifyPlaylists } from "../utils/fetch"

import { BaseRadioGroup } from "./radioPrimitives"
import RadioPlaylistButton from "./radioPlaylistButton"

const PlaylistRadioGroup = props => {
  const [playlists, setPlaylists] = useState([])
  const [error, setError] = useState(false)
  useEffect(() => {
    async function fetchPlaylists() {
      const { playlists: fetchedPlaylists, error } = await getSpotifyPlaylists()

      error ? setError(true) : setPlaylists(fetchedPlaylists)
    }
    console.log("render")
    fetchPlaylists()
  }, [])

  return (
    <StyledRadioGroup {...props}>
      {!error ? (
        playlists.map(playlistData => (
          <RadioPlaylistButton key={playlistData.id} {...playlistData} />
        ))
      ) : (
        <>Error loading playlists<br/>Please login</>
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
