import AppBarHeader from "@/components/appBar"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import { useMobileCheck } from "@/utils/mobile-viewport-check"
import { debounce } from "@mui/material"
import { useEffect, useState } from "react"

export default function PageLayoutComponent() {
  const isMobileView = useMobileCheck()
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
      <Footer />
      <Footer />
      <Footer />
      <Footer />
    </>
  )
}
