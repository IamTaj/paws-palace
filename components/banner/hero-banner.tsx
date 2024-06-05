import { Box, Stack } from "@mui/material"
import React from "react"
import { useMobileCheck } from "@/utils/mobile-viewport-check"
import { urlFor } from "@/lib-sanity"

export default function HeroBannerCard({ image, largeImage, identifier }: any) {
  const isMobile = useMobileCheck()
  const imageData = isMobile ? image : largeImage

  return (
    <Stack>
      <Box
        component="img"
        src={urlFor(imageData.asset?._ref).url()}
        alt={imageData?.altText || "banner"}
      />
    </Stack>
  )
}
