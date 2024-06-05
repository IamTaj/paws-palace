import { theme } from "@/lib/theme"
import CustomUpdateTextField from "@/pages/my-account/component/tabs/update-profile/update-textField"
import { useMobileCheck } from "@/utils/mobile-viewport-check"
import { DesktopPxToVw, MobilePxToVw } from "@/utils/view-port-calculator"
import { Box, Stack, Typography } from "@mui/material"
import React, { useState } from "react"

export default function ChangePasswordEmailFieldComponent({
  handleChangeForm,
}: any) {
  const isMobile = useMobileCheck()

  return (
    <Stack gap={4}>
      <Stack alignItems={"center"} gap={4}>
        <Typography variant={isMobile ? "m-body-s" : "body-s"}>
          {"Please Enter Your Registered email to reset your password"}
        </Typography>
        <Box sx={{ width: "100%" }}>
          <Typography variant={isMobile ? "m-body-s" : "body-s"}>
            {"Email"}
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
              placeholder="Email"
              name="email"
              handleChangeForm={handleChangeForm}
              isFieldDisable={false}
              variant="standard"
              showButton={false}
              InputProps={{ disableUnderline: true }}
              sx={{ position: "absolute" }}
            />
          </Box>
        </Box>
      </Stack>
    </Stack>
  )
}
