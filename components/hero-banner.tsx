import { Box, Stack } from "@mui/material"
import React from "react"
import { BANKOFFERS_ASSETS, HEROBANNER_ASSETS } from "./CONSTANT"
import { theme } from "@/lib/theme"
import { useMobileCheck } from "@/utils/mobile-viewport-check"

export default function HeroBanner() {
  const isMobile = useMobileCheck()
  return (
    <Stack
      sx={{
        paddingTop: isMobile ? "80px" : "160px",
        background: "linear-gradient(100deg, #254735, #65a798)",
      }}
    >
      <Box
        component="img"
        src={
          isMobile
            ? HEROBANNER_ASSETS?.MOBILE_HEROBANNER
            : HEROBANNER_ASSETS?.WEBSITE_HEROBANNER
        }
      />
      {/* BANKS OFFERS TAPE */}
      <Box
        component={"img"}
        src={
          isMobile
            ? BANKOFFERS_ASSETS?.MOBILE_BANKSOFFERS
            : BANKOFFERS_ASSETS?.WEBSITE_BANKSOFFERS
        }
      />
    </Stack>
  )
}
