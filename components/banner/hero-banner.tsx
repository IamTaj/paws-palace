import { Box, Stack } from "@mui/material"
import React from "react"
import { useMobileCheck } from "@/utils/mobile-viewport-check"
import { urlFor } from "@/lib-sanity"

export default function HeroBannerCard({ image, largeImage, identifier }: any) {
  const isMobile = useMobileCheck()
  const imageData = isMobile ? image : largeImage

  return (
    <Stack
      sx={{
        // paddingTop: isMobile ? "80px" : "80px",
        background:"linear-gradient(100deg, #254735, #65a798)"
      }}
    >
      <Box
        component="img"
        src={urlFor(imageData.asset?._ref).url()}
        alt={imageData?.altText || "banner"}
      />
    </Stack>
  )
}
