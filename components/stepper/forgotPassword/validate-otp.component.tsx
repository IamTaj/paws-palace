import { useMobileCheck } from "@/utils/mobile-viewport-check"
import { Box, Stack, Typography } from "@mui/material"
import React, { useEffect, useState } from "react"
import { OtpComponentLogic } from "./otpComponent/OtpComponentLogic"
import { theme } from "@/lib/theme"

export default function ValidateOtpComponent({
  handleChangeForm,
  OTP,
  setDisableButton,
  triggerMail,
  setActiveStep,
}: any) {
  const isMobile = useMobileCheck()
  const [otp, setOtp] = useState<string>("")
  const [resendOtp, setresendOtp] = useState<boolean>(false)
  console.log("otp: ", otp, OTP)
  useEffect(() => {
    if (otp?.length > 5) {
      if (OTP?.toString() === otp) {
        setDisableButton(false)
        // alert("Otp has been validated successfully")
        triggerMail
        setActiveStep(2)
      } else {
        setDisableButton(true)
        setresendOtp(true)
        // alert("Otp didn't matched")
      }
    } else if (otp?.length > 3) {
      setDisableButton(false)
    } else {
      setDisableButton(true)
    }
  }, [otp])

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
        {resendOtp && (
          <Box sx={{ pt: 2 }}>
            <Typography
              sx={{ color: theme?.palette?.neuPalette?.hexTen, pb: "1vw" }}
            >
              {"Otp didn't matched"}
            </Typography>
            <Typography
              variant={isMobile ? "m-link-m" : "link-m"}
              sx={{ mt: 3 }}
              onClick={() => {
                triggerMail()
                setresendOtp(false)
              }}
            >
              {"RESEND OTP"}
            </Typography>
          </Box>
        )}
      </Stack>
    </Box>
  )
}
