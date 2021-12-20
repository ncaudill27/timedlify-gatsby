import { useState, useEffect } from "react"
import { getSpotifyUser } from "../utils/fetch"

const useCurrentUser = () => {
  const [user, setUser] = useState({})
  const [error, setError] = useState(false)

  useEffect(() => {
    async function getCurrentUser() {
      const { user, error } = await getSpotifyUser()
      error ? setError(true) : setUser(user)
    }

    getCurrentUser()
  }, [])

  return { user, error }
}

export default useCurrentUser
