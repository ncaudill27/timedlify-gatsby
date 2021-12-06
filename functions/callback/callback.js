require("dotenv").config();
const { AuthorizationCode } = require("simple-oauth2");

const { URL, SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET } = process.env;
const spotifyApi = "https://accounts.spotify.com";
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
};
const siteUrl = URL || "http://localhost:8888";
const redirect_uri = `${siteUrl}/.netlify/functions/callback`;
const scope =
  "user-read-playback-state user-modify-playback-state user-read-currently-playing streaming app-remote-control playlist-read-collaborative playlist-read-private user-read-recently-played user-library-read";

const profilePath = `${spotifyApi}/me/`;
exports.handler = async (event, context, callback) => {
  const client = new AuthorizationCode(config);

  const code = event.queryStringParameters.code;
  /* state helps mitigate CSRF attacks & Restore the previous state of your app */
  // const state = event.queryStringParameters.state;

  // if (state === null) {
  //   // stuff
  // }
  const tokenParams = {
    code,
    redirect_uri,
    scope,
  };

  try {
    const accessToken = await client.getToken(tokenParams);
    console.log(accessToken);
    return {
      statusCode: 302,
      headers: {
        Location: "http://localhost:8888/",
        "Cache-Control": "no-cache", // Disable caching of this response
      },
      body: "", // return body for local dev
    };
  } catch (error) {
    console.log("Access Token Error: ", error.message);
  }
};