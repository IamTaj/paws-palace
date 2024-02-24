import Image from "next/image"
import { Inter } from "next/font/google"
import PageLayoutComponent from "@/layout/PageLayoutComponent"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <>
      <PageLayoutComponent />
    </>
  )
}
