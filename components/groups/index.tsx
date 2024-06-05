import { Box } from "@mui/material"
import React from "react"
import { DesktopPxToVw, MobilePxToVw } from "@/utils/view-port-calculator"
import { useMobileCheck } from "@/utils/mobile-viewport-check"
import renderGroupVariant from "./renderGroupVariants"
import MultiRowTitle from "../title/multi-row-title"

export default function Group(props: any) {
  const {
    title,
    variant,
    largeVariant,
    items,
    gridLayout,
    columnSize,
    aesthetic,
  } = props
  const groupBackgroundColor = aesthetic?.backgroundColor
  const groupPadding = aesthetic?.padding
  const isMobileView = useMobileCheck()

  const groupVariant = isMobileView ? variant : largeVariant
  const isBackground = groupVariant === "greyBackgroundGroup"
  const columnValue = gridLayout && columnSize
  return (
    <Box
      mt={
        isBackground ? (isMobileView ? MobilePxToVw(40) : DesktopPxToVw(80)) : 0
      }
      mx={title ? (isMobileView ? MobilePxToVw(20) : DesktopPxToVw(100)) : 0}
      borderRadius={
        isBackground ? (isMobileView ? MobilePxToVw(30) : DesktopPxToVw(30)) : 0
      }
      p={groupPadding ? groupPadding : 0}
      sx={{
        background: groupBackgroundColor ? groupBackgroundColor : "initial",
      }}
    >
      {title && <MultiRowTitle title={title} />}
      {groupVariant && renderGroupVariant(groupVariant, items, columnValue)}
    </Box>
  )
}
