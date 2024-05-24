import Footer from "@/components/footer"
import { useMobileCheck } from "@/utils/mobile-viewport-check"
import PageBody from "./pageBody"
import Header from "@/components/header"

export default function PageLayoutComponent({ data, ...props }: any) {
  const isMobileView = useMobileCheck()

  return (
    <>
      <Header />
      <PageBody {...data} />
      <Footer />
    </>
  )
}
