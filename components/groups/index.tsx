import { Box } from "@mui/material"
import React from "react"
import { DesktopPxToVw, MobilePxToVw } from "@/utils/view-port-calculator"
import { useMobileCheck } from "@/utils/mobile-viewport-check"
import renderGroupVariant from "./renderGroupVariants"
import MultiRowTitle from "../title/multi-row-title"

export default function Group(props: any) {
  const { title, variant, largeVariant, items, gridLayout, columnSize } = props
  const isMobileView = useMobileCheck()

  const groupVariant = isMobileView ? variant : largeVariant
  const isBackground = groupVariant === "greyBackgroundGroup"
  const columnValue = gridLayout && columnSize
  console.log("columnValue: ", columnValue)
  return (
    <Box
      mt={
        isBackground ? (isMobileView ? MobilePxToVw(40) : DesktopPxToVw(80)) : 0
      }
      mx={title ? (isMobileView ? MobilePxToVw(20) : DesktopPxToVw(100)) : 0}
      //   bgcolor={isBackground ? isDarkMode ? "#181818" : "#f0f0f0" : "none"}
      borderRadius={
        isBackground ? (isMobileView ? MobilePxToVw(30) : DesktopPxToVw(30)) : 0
      }
      p={
        isBackground
          ? isMobileView
            ? `0 ${MobilePxToVw(30)} ${MobilePxToVw(30)} ${MobilePxToVw(30)}`
            : `0 ${DesktopPxToVw(60)} ${DesktopPxToVw(60)} ${DesktopPxToVw(60)}`
          : 0
      }
    >
      {title && <MultiRowTitle title={title} />}
      {groupVariant && renderGroupVariant(groupVariant, items, columnValue)}
    </Box>
  )
}
