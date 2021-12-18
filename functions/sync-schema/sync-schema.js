#!/usr/bin/env node
const { Buffer } = require("buffer")
const fs = require("fs")
const path = require("path")
const process = require("process")

const fetch = require("node-fetch")

/* sync GraphQL schema to your FaunaDB account - use with `netlify dev:exec <path-to-this-file>` */
const handler = async () => {
  if (!process.env.FAUNADB_SERVER_SECRET) {
    console.log("No FAUNADB_SERVER_SECRET in environment, skipping DB setup")
  }
  console.log("Upload GraphQL Schema!")

  // name of your schema file
  const dataString = fs
    .readFileSync(path.join(__dirname, "schema.graphql"))
    .toString()

  // encoded authorization header similar to https://www.npmjs.com/package/request#http-authentication
  const token = Buffer.from(`${process.env.FAUNADB_SERVER_SECRET}:`).toString(
    "base64"
  )

  const options = {
    method: "POST",
    body: dataString,
    headers: { Authorization: `Basic ${token}` },
  }

  try {
    const res = await fetch("https://graphql.fauna.com/import", options)
    console.log(res)
    const body = await res.text()
    console.log(
      "Netlify Functions:Create - `fauna-graphql/sync-schema.js` success!"
    )
    console.log(body)
    return {
      statusCode: 200,
      body:
        "\nNetlify Functions:Create - attempting to create schema" +
        "\n\n" +
        body,
    }
  } catch (error) {
    console.error("something wrong happened:", { err: error })
    return {
      statusCode: 500,
      body: "ERROR! Netlify Functions:Create failed!" + "\n\n" + error,
    }
  }
}

module.exports = { handler }
