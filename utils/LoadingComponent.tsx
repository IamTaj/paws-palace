import { Box } from "@mui/system"
import React from "react"
import { DesktopPxToVw, MobilePxToVw } from "./view-port-calculator"
import { ICONS } from "@/components/CONSTANT"
import { useMobileCheck } from "./mobile-viewport-check"

export default function LoadingSpinner({
  componentLevel = false,
  containerStyle,
}: any) {
  const isMobile = useMobileCheck()
  return (
    <div
      className={
        componentLevel ? "inline-spinner-container" : "spinner-container"
      }
      style={{ ...containerStyle }}
    >
      <Box
        alt={`taj-loader-img`}
        component={"img"}
        src={ICONS?.LOADING_SPINNER}
        sx={{
          width: isMobile ? MobilePxToVw(100) : DesktopPxToVw(100),
          height: isMobile ? MobilePxToVw(100) : DesktopPxToVw(100),
        }}
      />
    </div>
  )
}
