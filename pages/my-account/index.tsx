import Footer from "@/components/footer"
import Header from "@/components/header"
import { Box } from "@mui/material"
import React from "react"
import BreadcrumbMemberNameComponent from "./component/group-with-breadcrumb-memberName.component"
import RenderTabsComponent from "./component/group-with-tabs-component"

export default function MyAccount() {
  return (
    <>
      <Header />
      <Box
        sx={{
          paddingTop: "12vw",
          paddingLeft: "10vw",
          paddingRight: "12vw",
          padding: "12vw 12vw 12vw 10vw",
        }}
      >
        <BreadcrumbMemberNameComponent />
        <RenderTabsComponent />
      </Box>
      <Footer />
    </>
  )
}
