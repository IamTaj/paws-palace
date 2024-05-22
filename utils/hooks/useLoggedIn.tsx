import { useState, useEffect } from "react"

export const useLoggedIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  useEffect(() => {
    const token = global?.window?.localStorage?.getItem("accessToken")
    if (token) {
      setIsLoggedIn(true)
    } else {
      setIsLoggedIn(false)
    }
  }, [])

  return isLoggedIn
}
