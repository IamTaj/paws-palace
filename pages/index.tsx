import Image from "next/image"
import { Inter } from "next/font/google"
import PageLayoutComponent from "@/layout/PageLayoutComponent"
import { basePageServerSide } from "@/lib/getPageSchema"
import Head from "next/head"
import { ICONS } from "@/components/CONSTANT"
import DynamicSeo from "@/utils/dynamicSeo"

const inter = Inter({ subsets: ["latin"] })

export default function Home(props: any) {
  console.log("props: ", props)
  return (
    <>
      {/* <Head>
        <title>Paws Palace</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={ICONS?.DOG_LOGO} sizes="any" />
      </Head> */}
      <DynamicSeo title={props?.data?.title} />
      <PageLayoutComponent {...props} />
    </>
  )
}

export const getServerSideProps = async (context: any) => {
  let { resolvedUrl } = context
  const baseProps = await basePageServerSide(context, resolvedUrl.split("?")[0])
  return baseProps
}
