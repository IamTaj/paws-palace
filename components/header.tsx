import React, { useEffect, useState } from "react"
import AppBarHeader from "./appBar"
import Navbar from "./header/navbar"
import { debounce } from "@mui/material"
import { useRouter } from "next/router"

export default function Header() {
  const router = useRouter()
  const [showNavBar, setShowNavBar] = useState<any>(true)
  const isMyAccount = router?.pathname === "/my-account"
  const handleScroll = () => {
    const scrollTop = global?.window?.scrollY
    if (scrollTop == 0 && !isMyAccount) {
      setShowNavBar(true)
    } else {
      setShowNavBar(false)
    }
  }
  console.log("router",router)

  const debouncedHandleScroll = debounce(handleScroll, 80)

  useEffect(() => {
    global?.window?.addEventListener("scroll", debouncedHandleScroll)

    return () => {
      global?.window?.removeEventListener("scroll", debouncedHandleScroll)
    }
  }, [debouncedHandleScroll])
  return (
    <>
      <AppBarHeader setShowNavBar={setShowNavBar} showNavBar={showNavBar} isMyAccount={isMyAccount}/>
      <Navbar showNavBar={showNavBar} isMyAccount={isMyAccount}/>
    </>
  )
}
