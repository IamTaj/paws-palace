import { useEffect, useState } from "react"
import { useMediaQuery } from "@mui/material"

export const useMobileCheck = (width = "(min-width : 641px )") => {
  const isMobileCheck = useMediaQuery(width)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(!isMobileCheck)
  }, [isMobileCheck])

  return isMobile
}
