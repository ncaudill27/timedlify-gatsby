import { useState, useEffect } from "react"
import { getSpotifyPlaylists } from "../utils/fetch"

const useSpotifyPlaylists = () => {
  const [playlists, setPlaylists] = useState([])
  const [error, setError] = useState(false)
  useEffect(() => {
    async function fetchPlaylists() {
      const { playlists: fetchedPlaylists, error } = await getSpotifyPlaylists()

      error ? setError(true) : setPlaylists(fetchedPlaylists)
    }

    fetchPlaylists()
  }, [])

  return {
    playlists,
    error,
  }
}

export default useSpotifyPlaylists
