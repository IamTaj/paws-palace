import RenderStepperComponent from "@/components/stepper/forgotPassword/render-stepper.component"
import Stepper from "@/components/stepper/stepper.component"
import { handler as MailService } from "@/features/nodemailer/api/handlers/mail.service"
import { theme } from "@/lib/theme"
import CustomUpdateTextField from "@/pages/my-account/component/tabs/update-profile/update-textField"
import { useMobileCheck } from "@/utils/mobile-viewport-check"
import { DesktopPxToVw, MobilePxToVw } from "@/utils/view-port-calculator"
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material"
import {
  Box,
  Button,
  MobileStepper,
  Stack,
  TextField,
  Typography,
} from "@mui/material"
import React, { useState } from "react"

export default function ForgotPasswordForm({ title, subTitle }: any) {
  const isMobile = useMobileCheck()
  const initialValues = {
    newPassword: "",
    confirmPassword: "",
    email: "",
    otp: "",
  }
  const [userUpdatedData, setUserUpdatedData] = useState<any>(initialValues)
  const [networkResponse, setNetworkResponse] = useState<any>()
  const handleBack = () => {
    setActiveStep((prevActiveStep: number) => prevActiveStep - 1)
  }

  const triggerMail = async () => {
    const payload = {
      recipientEmail: userUpdatedData?.email,
      otp:OTP
    }
    const response = await MailService.apiCall(payload)
    if (response.error) {
      setNetworkResponse({
        state: "error",
        message: response.data,
      })
    } else {
      setNetworkResponse({
        state: "success",
        message: "Your message was sent successfully.",
      })
    }
  }
  const handleNext = () => {
    if (activeStep === 0 && userUpdatedData?.email) {
      triggerMail()
    } else {
      alert("Please enter a valid email address")
    }
    setActiveStep((prevActiveStep: number) => prevActiveStep + 1)
  }
  const [activeStep, setActiveStep] = useState(0)

  const handleChangeForm = (event: any) => {
    const { name, value } = event.target
    setUserUpdatedData((prev: any) => {
      return {
        ...prev,
        [name]: value,
      }
    })
  }

  const generateOtpCode = () => {
    return  Math.floor(Math.random() * 900000) + 100000
  }
  const OTP = generateOtpCode()?.toString()
  console.log("OTP: ", OTP)
  return (
    <Box p={8}>
      <Stack alignItems={"center"}>
        <Typography
          sx={{ pt: 2, pb: 8 }}
          variant={isMobile ? "m-heading-xs" : "heading-xs"}
        >
          {title}
        </Typography>
      </Stack>
      <RenderStepperComponent
        activeStep={activeStep}
        setActiveStep={setActiveStep}
        handleChangeForm={handleChangeForm}
        OTP={OTP}
      />
      <Stack flexDirection={"row"} justifyContent={"flex-end"} gap={5} py={5}>
        <Button
          onClick={handleBack}
          disabled={activeStep === 0}
          sx={{
            background: theme?.palette?.neuPalette?.hexNine,
            borderRadius: "10px",
            ":hover": {
              background: theme?.palette?.neuPalette?.hexThirtyThree,
              color: theme?.palette?.neuPalette?.hexOne,
            },
          }}
        >
          {"Previous"}
        </Button>
        <Button
          onClick={handleNext}
          disabled={activeStep === 2}
          sx={{
            background: theme?.palette?.neuPalette?.hexNine,
            borderRadius: "10px",
            ":hover": {
              background: theme?.palette?.neuPalette?.hexThirtyThree,
              color: theme?.palette?.neuPalette?.hexOne,
            },
          }}
        >
          {"Next"}
        </Button>
      </Stack>
      <Stepper setActiveStep={setActiveStep} activeStep={activeStep} />
    </Box>
  )
}
