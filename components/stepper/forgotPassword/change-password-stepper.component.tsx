import { theme } from "@/lib/theme"
import CustomUpdateTextField from "@/pages/my-account/component/tabs/update-profile/update-textField"
import { useMobileCheck } from "@/utils/mobile-viewport-check"
import { DesktopPxToVw, MobilePxToVw } from "@/utils/view-port-calculator"
import { Box, Stack, Typography } from "@mui/material"
import React from "react"

export default function ChangePasswordComponent({ handleChangeForm }: any) {
  const isMobile = useMobileCheck()
  return (
    <Stack gap={4}>
      <Box sx={{ width: "100%" }}>
        <Typography variant={isMobile ? "m-body-s" : "body-s"}>
          {"New Password"}
        </Typography>
        <Box
          sx={{
            background: theme?.palette?.neuPalette?.hexTwentyNine,
            borderRadius: "4px",
            p: isMobile
              ? `${MobilePxToVw(13)} ${MobilePxToVw(16)}`
              : `${DesktopPxToVw(13)} ${DesktopPxToVw(16)}`,
            color: theme?.palette?.neuPalette?.hexEleven,
            height: isMobile ? MobilePxToVw(60) : DesktopPxToVw(60),
            position: "relative",
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
          }}
        >
          <CustomUpdateTextField
            id="standard-basic"
            placeholder="New Password"
            name="newPassword"
            handleChangeForm={handleChangeForm}
            isFieldDisable={false}
            variant="standard"
            showButton={false}
            InputProps={{ disableUnderline: true }}
            sx={{ position: "absolute" }}
          />
        </Box>
      </Box>
      <Box sx={{ width: "100%" }}>
        <Typography variant={isMobile ? "m-body-s" : "body-s"}>
          {"Confirm New Password"}
        </Typography>
        <Box
          sx={{
            background: theme?.palette?.neuPalette?.hexTwentyNine,
            borderRadius: "4px",
            p: isMobile
              ? `${MobilePxToVw(13)} ${MobilePxToVw(16)}`
              : `${DesktopPxToVw(13)} ${DesktopPxToVw(16)}`,
            color: theme?.palette?.neuPalette?.hexEleven,
            height: isMobile ? MobilePxToVw(60) : DesktopPxToVw(60),
            position: "relative",
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
          }}
        >
          <CustomUpdateTextField
            id="standard-basic"
            placeholder="Confirm New Password"
            name="confirmPassword"
            handleChangeForm={handleChangeForm}
            variant="standard"
            showButton={false}
            isFieldDisable={false}
            InputProps={{ disableUnderline: true }}
            sx={{ position: "absolute" }}
          />
        </Box>
      </Box>
    </Stack>
  )
}
