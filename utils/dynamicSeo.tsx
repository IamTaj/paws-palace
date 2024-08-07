import { ICONS } from "@/components/CONSTANT"
import Head from "next/head"
import React from "react"

export default function DynamicSeo({ title }: any) {
  // const headTitle = title ==="Homepage"?`PAWS PALACE`:(title||)
  const headTitle = title
    ? title === "Homepage"
      ? `Paws Palace`
      : title
    : `Paws Palace`
  return (
    <Head>
      <title>{headTitle}</title>
      <meta name="description" content="Generated by create next app" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href={ICONS?.DOG_LOGO} sizes="any" />
    </Head>
  )
}
