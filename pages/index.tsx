import Image from "next/image"
import { Inter } from "next/font/google"
import PageLayoutComponent from "@/layout/PageLayoutComponent"
import { basePageServerSide } from "@/lib/getPageSchema"

const inter = Inter({ subsets: ["latin"] })

export default function Home(props: any) {
  return (
    <>
      <PageLayoutComponent />
    </>
  )
}

export const getServerSideProps = async (context: any) => {
  let { resolvedUrl } = context
  const baseProps = await basePageServerSide(context, resolvedUrl.split("?")[0])
  return baseProps
}
