import { theme } from "@/lib/theme"
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material"
import { Button, MobileStepper, Stack } from "@mui/material"
import { useState } from "react"

export default function Stepper({ setActiveStep, activeStep }: any) {
  return (
    <Stack
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"row"}
    >
      <MobileStepper
        variant="dots"
        steps={3}
        position="static"
        activeStep={activeStep}
        sx={{
          maxWidth: 400,
          flexGrow: 1,
          ".MuiMobileStepper-dot": {
            borderRadius: "10px",
            width: "30px",
            height: "10px",
            margin: "0vw 5px",
          },
          ".MuiMobileStepper-dotActive": {
            background: theme?.palette?.neuPalette?.hexThirtyThree,
          },
        }}
        nextButton={
          <Button size="small" disabled={activeStep === 2}>
          </Button>
        }
        backButton={
          <Button size="small" disabled={activeStep === 0}>

          </Button>
        }
      />
    </Stack>
  )
}
