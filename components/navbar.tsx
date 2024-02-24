import { Box, Collapse, Stack, Typography } from "@mui/material"
import React from "react"
import navbarData from "../mock-data/navbar.json"
import { theme } from "@/lib/theme"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { useMobileCheck } from "@/utils/mobile-viewport-check"

export default function Navbar({ showNavBar }: any) {
  const isMobileView = useMobileCheck()
  return (
    <Collapse
      in={showNavBar && !isMobileView}
      timeout={300}
      easing={{ enter: "cubic-bezier(0,-1.55,.61,1.58)", exit: "linear" }}
      sx={{ scrollBehavior: "smooth", transitionDuration: "300s" }}
    >
      <Box>
        <Stack
          alignItems={"center"}
          justifyContent={"center"}
          sx={{
            position: "fixed",
            mt: "80px",
            transform: { lg: "translateX(11%)" },
            "@media(min-width:1920px)": {
              transform: "translateX(27%)",
            },
          }}
        >
          <Stack
            sx={{
              background: "#e0115f",
              padding: "14px 34px",
            }}
            flexDirection={"row"}
          >
            {navbarData?.map((item: any, index: number) => (
              <Stack p={"16px 40px"} flexDirection={"row"} gap={1}>
                <Typography
                  variant="body-s"
                  fontWeight={500}
                  color={theme?.palette?.neuPalette?.hexOne}
                >
                  {item?.value}
                </Typography>
                {item?.fieldType == "dropdown" && (
                  <ExpandMoreIcon
                    sx={{ color: theme?.palette?.neuPalette?.hexOne }}
                  />
                )}
              </Stack>
            ))}
          </Stack>
        </Stack>
      </Box>
    </Collapse>
  )
}
