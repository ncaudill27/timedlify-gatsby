import { gql } from "@apollo/client"

export const GET_USER = gql`
  query GetUser($name: String!) {
    findUserByName(name: $name) {
      name
    }
  }
`

export const GET_USER_ALERTS = gql`
  query GetUser($name: String!) {
    findUserByName(name: $name) {
      alerts {
        data {
          name
          playlist
          color
        }
      }
    }
  }
`

export const CREATE_USER = gql`
  mutation CreateUser($name: String!) {
    createUser(data: { name: $name }) {
      name
    }
  }
`

export const CREATE_TIMEDLIFY = gql`
  mutation CreateTimedlify(
    $name: String!
    $playlist: String!
    $color: String!
    $hours: Int
    $minutes: Int
    $seconds: Int
    $interval: Boolean
    $restInterval: Int
    $rounds: Int
    $user: TimedlifyUserRelation
  ) {
    createTimedlify(
      data: {
        name: $name
        playlist: $playlist
        color: $color
        hours: $hours
        minutes: $minutes
        seconds: $seconds
        interval: $interval
        restInterval: $restInterval
        rounds: $rounds
      }
    ) {
      name
      playlist
      color
      hours
      minutes
      seconds
      interval
      restInterval
      rounds
    }
  }
`
