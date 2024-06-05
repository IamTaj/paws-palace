import OTPInput from "."
import { OtpBox, StyledBox } from "../styles/common-style"
// import { OtpBox, StyledBox } from "../../Styles/OtpStyled"
// import { OtpComponentInterface } from "../../login-form.types"
// import { OTP_FIELDS_LENGTH } from "../../../constants"

export const OtpComponentLogic = (props: any) => {
  const { setOtp, VerifyHandler, resendOtp, handleChangeForm } = props

  return (
    <StyledBox>
      <OtpBox component="form" sx={{ ...props?.sysprops }}>
        <OTPInput
          autoFocus
          isNumberInput
          length={6}
          onChangeOTP={(otp) => setOtp(otp)}
        />
      </OtpBox>
    </StyledBox>
  )
}
