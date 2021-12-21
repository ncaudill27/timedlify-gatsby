require("dotenv").config()
const { AuthorizationCode } = require("simple-oauth2")
const cookie = require("cookie")
const jwt = require("jsonwebtoken")

const { URL, SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET, JWT_SECRET_KEY } =
  process.env
const spotifyApi = "https://accounts.spotify.com"
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
const siteUrl = URL || "http://localhost:8888"
const redirect_uri = `${siteUrl}/.netlify/functions/callback`
const scope =
  "user-read-playback-state user-modify-playback-state user-read-currently-playing streaming app-remote-control playlist-read-collaborative playlist-read-private user-read-recently-played user-library-read"

const profilePath = `${spotifyApi}/me/`
exports.handler = async event => {
  const client = new AuthorizationCode(config)

  const code = event.queryStringParameters.code
  /* state helps mitigate CSRF attacks & Restore the previous state of your app */
  // const state = event.queryStringParameters.state;

  // if (state === null) {
  //   // stuff
  // }
  const tokenParams = {
    code,
    redirect_uri,
    scope,
  }

  try {
    const accessToken = await client.getToken(tokenParams)
    // TODO use accessToken to hit "https://api.spotify.com/v1/me" and get userData
    // const userData = getSpotifyUser(accessToken)

    // TODO pass userData into cookie for storage
    // const cookieData = {
    //   accessToken,
    //   userData
    // }
    // const timedlifyCookie = createEncryptedCookie(cookieData)
    const timedlifyCookie = createEncryptedCookie(accessToken)

    return {
      statusCode: 302,
      headers: {
        Location: "http://localhost:8888/",
        "Set-Cookie": timedlifyCookie,
        "Cache-Control": "no-cache", // Disable caching of this response
      },
      body: "", // return body for local dev
    }
  } catch (error) {
    console.log("Error: ", error.message)
  }
}

const createEncryptedCookie = rawToken => {
  const secretKey =
    "-----BEGIN RSA PRIVATE KEY-----\n" +
    JWT_SECRET_KEY +
    "\n-----END RSA PRIVATE KEY-----"

  // TODO sign jwt with spotifyUser data
  // const token = jwt.sign(cookieData, secretKey, {
  const token = jwt.sign({ accessToken: rawToken }, secretKey, {
    algorithm: "RS256",
    expiresIn: "2 weeks",
  })

  const hour = 3600000
  const twoWeeks = 14 * 24 * hour

  return cookie.serialize("timedlify", token, {
    secure: true,
    httpOnly: true,
    path: "/",
    maxAge: twoWeeks,
  })
}
