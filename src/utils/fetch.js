export const getSpotifyPlaylists = () => {
  return fetch("/.netlify/functions/getSpotifyPlaylists")
    .then(res => res.json())
    .then(data => {
      return { playlists: data.playlists.items }
    })
    .catch(error => {
      return { error }
    })
}

export const getSpotifyUser = () => {
  return fetch("/.netlify/functions/getSpotifyUser")
    .then(res => res.json())
    .then(data => {
      return { user: data.userData }
    })
    .catch(error => {
      return { error }
    })
}
