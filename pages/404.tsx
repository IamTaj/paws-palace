import AppBarHeader from "@/components/appBar"
import Footer from "@/components/footer"
import Header from "@/components/header"
import { Box } from "@mui/material"
import { useRouter } from "next/router"
import React from "react"

const NotFound = () => {
  const router = useRouter()
  const { asPath, query, route } = router
  console.log("router: ", route)
  return (
    <>
      <Header />
      <Box sx={{ padding: "500px" }}>not found</Box>
      <Footer />
    </>
  )
}

export default NotFound
