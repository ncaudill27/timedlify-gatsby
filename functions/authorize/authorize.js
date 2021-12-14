require("dotenv").config()
const { AuthorizationCode } = require("simple-oauth2")

const { URL, SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET } = process.env
const spotifyApi = "https://accounts.spotify.com"
/* process.env.URL from netlify BUILD environment variables */
const siteUrl = URL || "http://localhost:8888"
const config = {
  client: {
    id: SPOTIFY_CLIENT_ID,
    secret: SPOTIFY_CLIENT_SECRET,
  },
  auth: {
    tokenHost: spotifyApi,
    tokenPath: `${spotifyApi}/api/token`,
    authorizePath: `${spotifyApi}/authorize`,
  },
}

const redirect_uri = `${siteUrl}/.netlify/functions/callback`
const scope =
  "user-read-playback-state user-modify-playback-state user-read-currently-playing streaming app-remote-control playlist-read-collaborative playlist-read-private user-read-recently-played user-library-read"

exports.handler = async () => {
  try {
    // set state for callback to verify
    // const state = writeState();
    const client = new AuthorizationCode(config)
    
    const authorizationUri = client.authorizeURL({
      redirect_uri: redirect_uri,
      scope: scope,
      // state: "<state>",
    })

    return {
      statusCode: 302,
      headers: {
        Location: authorizationUri,
        "Cache-Control": "no-cache", // Disable caching of this response
      },
      body: "", // return body for local dev
    }
  } catch (err) {
    return { statusCode: 500, body: err.toString() }
  }
}
