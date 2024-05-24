import React, { useEffect, useState } from "react"
import AppBarHeader from "./appBar"
import Navbar from "./header/navbar"
import { debounce } from "@mui/material"

export default function Header() {
  const [showNavBar, setShowNavBar] = useState<any>(true)
  const handleScroll = () => {
    const scrollTop = global?.window?.scrollY
    if (scrollTop == 0) {
      setShowNavBar(true)
    } else {
      setShowNavBar(false)
    }
  }

  const debouncedHandleScroll = debounce(handleScroll, 80)

  useEffect(() => {
    global?.window?.addEventListener("scroll", debouncedHandleScroll)

    return () => {
      global?.window?.removeEventListener("scroll", debouncedHandleScroll)
    }
  }, [debouncedHandleScroll])
  return (
    <>
      <AppBarHeader setShowNavBar={setShowNavBar} showNavBar={showNavBar} />
      <Navbar showNavBar={showNavBar} />
    </>
  )
}
