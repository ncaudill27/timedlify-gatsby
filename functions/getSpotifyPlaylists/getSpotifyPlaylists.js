require("dotenv").config()
const fetch = require("node-fetch")
const cookie = require("cookie")
const jwt = require("jsonwebtoken")
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

const handler = async function (event) {
  const client = new AuthorizationCode(config)
  const { timedlify } = cookie.parse(event?.headers?.cookie)
  const publicKey = `-----BEGIN PUBLIC KEY-----
MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAxdS8ISi+4kaQv6VUpLug
iGAajqnd2gNgpC31JMGA/9W6qDLn7zKXEQ0SSe/8YOjlgzDxGTE4llu5YNqPVckA
wn8rlBLTA2kYMDQ/F/OzreBfzir0meb9+kQp+Eym9S0fn4RYfZQipiqX4SsRIcwP
8U1drOnUJ5/TDcI8RObWlxC2OyiPpcU5n81aBXfx87goRd9sbnw/emiHyVBi0lY6
8jFf7loKFi79oswOtQCtSa41i21pZSKFd0TZrmqedsfMhmJDWsRVGvMau2EigQgT
cK63J0OVmv+XnqlKck+Pe1Nb4fW+hJ7+wyhtYy8+6mArF8M1FbWiU4juTB9aeeX0
Bo01wnQUSEQcTOg24sX09GmTgd/p2CbrcubEqf2FQHS3BSU3igBYkowSnoOot9Hm
CLT8F8SV+JseeRv2msIHHHTc64E/VhBX/nl/JoVN3l954b3YUHrhzoEBUCHtN16q
nzsK2YfD1Qj7dK3nTf9wdhuUvKqEUQE2jsBFmDivFMORVsbHjf1fTEbCxcAIin/I
LzEDZ4RptTtslcwV2smvrgKUZ07q95DgIe0GT5SuJUoH8TUVKsIm8RaCEF2tjVe0
R8RYsWbi9QXA8p/0u32YDj/P3pgM3seb82WwfpvGHBpHAI/GmE3XKWU+eNVum6kU
AphbHTvSw3PeZrCCEoBYTykCAwEAAQ==
-----END PUBLIC KEY-----
`

  if (!timedlify) {
    console.log("HANDLE UNAUTHORIZED")
  }

  try {
    let { accessToken } = jwt.verify(timedlify, publicKey)
    accessToken = client.createToken(accessToken)

    if (accessToken.expired()) {
      try {
        accessToken = await accessToken.refresh()
      } catch (error) {
        console.log("Error refreshing access token: ", error.message)
      }
    }
    const { token_type, access_token } = accessToken.token
    const tokenAuthorizationHeader = token_type + " " + access_token

    const response = await fetch(
      // TODO programatically add user_id
      "https://api.spotify.com/v1/users/thatfeoguy/playlists?limit=6",
      {
        headers: {
          Authorization: tokenAuthorizationHeader,
          Accept: "application/json",
        },
      }
    )
    if (!response.ok) {
      // NOT res.status >= 200 && res.status < 300
      return { statusCode: response.status, body: response.statusText }
    }
    const data = await response.json()

    return {
      statusCode: 200,
      body: JSON.stringify({ playlists: data }),
    }
  } catch (error) {
    // output to netlify function log
    console.log(error)
    return {
      statusCode: 500,
      // Could be a custom message or object i.e. JSON.stringify(err)
      body: JSON.stringify({ msg: error.message }),
    }
  }
}

module.exports = { handler }
