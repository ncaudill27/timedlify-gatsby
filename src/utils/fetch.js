export const getSpotifyPlaylists = () => {
  return fetch("/.netlify/functions/getSpotifyPlaylists")
    .then(res => res.json())
    .then(data => {
      return data.playlists.items
    })
}

export const getSpotifyUser = () => {
  return fetch("/.netlify/functions/getSpotifyUser")
    .then(res => res.json())
    .then(data => {
      return data.userData
    })
}
