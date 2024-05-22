import { urlFor } from "@/lib-sanity"
import { useMobileCheck } from "@/utils/mobile-viewport-check"
import { Box } from "@mui/material"
import React from "react"

export default function CardWithIcons({ image, largeImage }: any) {
  const isMobile = useMobileCheck()
  const imageData = isMobile ? image : largeImage

  return (
    <Box
      component={"img"}
      width={"100%"}
      src={urlFor(imageData?.asset?._ref).url()}
      alt={imageData?.altText || "banner"}
    ></Box>
  )
}
