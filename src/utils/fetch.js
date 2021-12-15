export const getSpotifyPlaylists = () => {
  return fetch("/.netlify/functions/getSpotifyPlaylists")
    .then(res => res.json())
    .then(data => {
      return data.playlists.items
    })
}
