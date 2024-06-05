import React from "react"
import ChangePasswordComponent from "./change-password-stepper.component"
import ChangePasswordEmailFieldComponent from "./change-password-email-stepper.component"
import ValidateOtpComponent from "./validate-otp.component"

export default function RenderStepperComponent({
  activeStep,
  handleChangeForm,
  OTP,
}: any) {
  switch (activeStep) {
    case 0:
      return (
        <ChangePasswordEmailFieldComponent
          handleChangeForm={handleChangeForm}
        />
      )
    case 1:
      return <ValidateOtpComponent handleChangeForm={handleChangeForm} />
    case 2:
      return <ChangePasswordComponent handleChangeForm={handleChangeForm} />
    default:
      return <></>
  }
  return <div>RenderStepperCOmponent</div>
}
