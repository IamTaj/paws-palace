import { useMobileCheck } from "@/utils/mobile-viewport-check"
import { Box, Stack, Typography } from "@mui/material"
import React, { useState } from "react"
import { OtpComponentLogic } from "./otpComponent/OtpComponentLogic"

export default function ValidateOtpComponent({ handleChangeForm }: any) {
  const isMobile = useMobileCheck()
  const [otp, setOtp] = useState<string>("")
  console.log('otp: ', otp);

  return (
    <Box>
      <Stack alignItems={"center"}>
        <Typography variant={isMobile ? "m-body-s" : "body-s"} pb={4}>
          {"We have sent you an OTP to your email"}
        </Typography>

        <OtpComponentLogic
          handleChangeForm={handleChangeForm}
          setOtp={setOtp}
          otp={otp}
        />
      </Stack>
    </Box>
  )
}
