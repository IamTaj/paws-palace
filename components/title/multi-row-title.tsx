// import { useMobileCheck } from '@/hooks/mobileCheck'
import { useMobileCheck } from "@/utils/mobile-viewport-check"
import { Typography } from "@mui/material"
import React from "react"
import { TitleStack } from "./title.styles"
import { DesktopPxToVw, MobilePxToVw } from "@/utils/view-port-calculator"
// import { TitleStack } from './title.styles'
// import { DesktopPxToVw, MobilePxToVw } from '@/utils/pxToVw'

export default function MultiRowTitle({ title, titleVariant }: any) {
  const isMobile = useMobileCheck()
  const titles =
    typeof title === typeof ""
      ? [title]
      : isMobile
        ? title?.mobile || title?.desktop
        : title?.desktop
  return (
    <TitleStack
      width={"100"}
      pt={isMobile ? MobilePxToVw(60) : DesktopPxToVw(80)}
      pb={isMobile ? MobilePxToVw(40) : DesktopPxToVw(40)}
    >
      {titles?.map((singleTitle: any) => (
        <Typography
          key={singleTitle}
          fontWeight={800}
          variant={isMobile ? "m-heading-m" : "heading-m"}
        >
          {singleTitle}
        </Typography>
      ))}
    </TitleStack>
  )
}
