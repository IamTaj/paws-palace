import { ICONS } from "@/components/CONSTANT"
import { useMobileCheck } from "@/utils/mobile-viewport-check"
import { Box, Button, Stack, Typography } from "@mui/material"
import React, { useState } from "react"
import { DesktopPxToVw, MobilePxToVw } from "@/utils/view-port-calculator"
import PetsIcon from "@mui/icons-material/Pets"
import { theme } from "@/lib/theme"
import { useAppNavigation } from "@/utils/useAppNavigation"

export default function OrderTab({ tabTitle }: any) {
  const isMobile = useMobileCheck()
  const navigate = useAppNavigation()
  const [hoverButton, setHoverButton] = useState<boolean>(false)
  return (
    <Box>
      <Stack>
        <Stack sx={{ alignItems: "center", pb: 5 }}>
          <Typography
            variant={isMobile ? "m-heading-s" : "heading-s"}
            sx={{ letterSpacing: "0.05em" }}
          >
            {tabTitle}
          </Typography>
        </Stack>
        <Stack alignItems={"center"}>
          <Box
            sx={{ width: isMobile ? MobilePxToVw(400) : DesktopPxToVw(400) }}
          >
            <Box
              component={"img"}
              width={"100%"}
              src={ICONS?.EMPTY_CART}
              alt={"product-card"}
            />
          </Box>
          <Typography
            variant={isMobile ? "m-body-ml" : "body-ml"}
            sx={{ letterSpacing: "0.05em", pb: 4 }}
          >
            {"No Order has been found"}
          </Typography>
          <Button
            onMouseEnter={() => setHoverButton(true)}
            onMouseLeave={() => setHoverButton(false)}
            onClick={() => navigate("/")}
            sx={{
              color: theme?.palette?.neuPalette?.hexSeventeen,
              width: "16vw",
              ":hover": {
                background: theme?.palette?.neuPalette?.hexOne,
                color: theme?.palette?.neuPalette?.hexThirtyThree,
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                transition: "transform 1s ease-in-out",
                transform: hoverButton ? "translateX(20px)" : "translateX(0px)",
                gap: "2vw",
              }}
            >
              {hoverButton && (
                <Typography
                  sx={{
                    marginLeft: 2,
                    opacity: hoverButton ? 1 : 0,
                    transition: "opacity 1s ease-in-out",
                  }}
                >
                  Explore
                </Typography>
              )}
              <PetsIcon
                fontSize="large"
                sx={{
                  transition: "transform 0.7s ease-in-out",
                  transform: hoverButton ? "rotate(90deg)" : "rotate(0deg)",
                }}
              />
            </Box>
          </Button>
        </Stack>
      </Stack>
    </Box>
  )
}
