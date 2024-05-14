import AppBarHeader from "@/components/appBar"
import Footer from "@/components/footer"
import { PageContext } from "@/lib/prepare-page-context"
import { useMobileCheck } from "@/utils/mobile-viewport-check"
import { debounce } from "@mui/material"
import { useEffect, useMemo, useState } from "react"
import PageBody from "./pageBody"
import Navbar from "@/components/header/navbar"

export default function PageLayoutComponent({ data, ...props }: any) {
  console.log('data: ', data);
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

  const pageContext = useMemo(
    () => ({
      isMobileView,
    }),
    []
  )

  return (
    <>
      <PageContext.Provider value={PageContext}>
        <AppBarHeader setShowNavBar={setShowNavBar} showNavBar={showNavBar} />
        <Navbar showNavBar={showNavBar} />
        <PageBody {...data} />
        <Footer />
      </PageContext.Provider>
    </>
  )
}
