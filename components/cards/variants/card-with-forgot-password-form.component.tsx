import RenderStepperComponent from "@/components/stepper/forgotPassword/render-stepper.component"
import Stepper from "@/components/stepper/stepper.component"
import { handler as MailService } from "@/features/nodemailer/api/handlers/mail.service"
import { theme } from "@/lib/theme"
import CustomUpdateTextField from "@/pages/my-account/component/tabs/update-profile/update-textField"
import LoadingSpinner from "@/utils/LoadingComponent"
import { useMobileCheck } from "@/utils/mobile-viewport-check"
import { DesktopPxToVw, MobilePxToVw } from "@/utils/view-port-calculator"
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material"
import { handler as UpdateProfileHandler } from "../../../features/sso/api/handlers/update-profile.service"
import {
  Box,
  Button,
  MobileStepper,
  Stack,
  TextField,
  Typography,
} from "@mui/material"
import React, { useEffect, useState } from "react"

export default function ForgotPasswordForm({ title, subTitle }: any) {
  const isMobile = useMobileCheck()
  const initialValues = {
    newPassword: "",
    confirmPassword: "",
    email: "",
    otp: "",
  }
  const [userUpdatedData, setUserUpdatedData] = useState<any>(initialValues)
  const [errorMessage, setErrorMessage] = useState<any>()
  const [loading, setLoading] = useState<boolean>(false)
  const [disableButton, setDisableButton] = useState<boolean>(false)
  const [activeStep, setActiveStep] = useState(0)

  const handleBack = () => {
    setActiveStep((prevActiveStep: number) => prevActiveStep - 1)
  }

  const generateOtpCode = () => {
    return Math.floor(Math.random() * 900000) + 100000
  }

  useEffect(() => {
    const OTP = generateOtpCode()?.toString()
    setUserUpdatedData({ ...userUpdatedData, otp: OTP })
  }, [])

  const triggerMail = async () => {
    setLoading(true)
    const payload = {
      recipientEmail: userUpdatedData?.email,
      otp: userUpdatedData?.otp,
    }
    const response = await MailService.apiCall(payload)
    if (response.error) {
      setErrorMessage({
        state: "error",
        message: response.data,
      })
      setLoading(false)
    } else {
      setErrorMessage({
        state: "success",
        message: "Your message was sent successfully.",
      })
      setLoading(false)
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

  const handleChangeForm = (event: any) => {
    const { name, value } = event.target
    setUserUpdatedData((prev: any) => {
      return {
        ...prev,
        [name]: value,
      }
    })
  }

  useEffect(() => {
    if (activeStep === 0) {
      if (userUpdatedData?.email) {
        setDisableButton(false)
      } else {
        setDisableButton(true)
        setErrorMessage({
          state: "error",
          errorMessage: "Please enter a valid email address",
        })
      }
    }
  }, [userUpdatedData?.email])

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

      {loading ? (
        <LoadingSpinner
          componentLevel={true}
          containerStyle={{ maxHeight: DesktopPxToVw(200) }}
        />
      ) : (
        <RenderStepperComponent
          activeStep={activeStep}
          setActiveStep={setActiveStep}
          handleChangeForm={handleChangeForm}
          OTP={userUpdatedData?.otp}
          setDisableButton={setDisableButton}
          triggerMail={triggerMail}
        />
      )}
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
          disabled={activeStep === 2 || disableButton}
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
