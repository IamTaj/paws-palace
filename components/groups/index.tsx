import { Box } from '@mui/material'
import React from 'react'
import { DesktopPxToVw, MobilePxToVw } from '@/utils/view-port-calculator'
import { useMobileCheck } from '@/utils/mobile-viewport-check'
import renderGroupVariant from './renderGroupVariants'

export default function Group(props: any) {
  const {
    title,
    variant,
    largeVariant,
    items,
  } = props
const isMobileView = useMobileCheck()

  const groupVariant = isMobileView ? variant : largeVariant
  const isBackground = groupVariant === "greyBackgroundGroup"
  return (
    <Box mt={isBackground ? isMobileView ? MobilePxToVw(40) : DesktopPxToVw(80) : 0}
      mx={title ? isMobileView ? MobilePxToVw(20) : DesktopPxToVw(100) : 0}
    //   bgcolor={isBackground ? isDarkMode ? "#181818" : "#f0f0f0" : "none"}
      borderRadius={isBackground ? isMobileView ? MobilePxToVw(30) : DesktopPxToVw(30) : 0}
      p={isBackground ? isMobileView
        ? `0 ${MobilePxToVw(30)} ${MobilePxToVw(30)} ${MobilePxToVw(30)}`
        : `0 ${DesktopPxToVw(60)} ${DesktopPxToVw(60)} ${DesktopPxToVw(60)}` : 0}
    >
      {/* {title && <Title title={title} />} */}
      {groupVariant && renderGroupVariant(groupVariant, items)}
    </Box>
  )
}
