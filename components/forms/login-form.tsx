import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  CssBaseline,
  FormControlLabel,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material"
import React, { useEffect, useState } from "react"
import LockOutlinedIcon from "@mui/icons-material/LockOutlined"
import Link from "next/link"
import { theme } from "@/lib/theme"
import {
  getAuth,
  signInWithPhoneNumber,
  RecaptchaVerifier,
} from "firebase/auth"
import { fireBaseCustomConfig } from "../../firebase.congig"

export default function LoginFormComponent() {
  const [userInputData, setUserInputdata] = useState<any>({})
  const [otp, setOtp] = useState<any>()
  const [confirmationResult, setConfirmationResult] = useState<any>()
  const [otpSent, setOtpSent] = useState<any>(false)

  const auth = getAuth(fireBaseCustomConfig)

  const handleChange = (event: any) => {
    const { name, value } = event?.target
    if (name === "phoneNumber") {
      setUserInputdata((prev: any) => {
        return {
          ...prev,
          phoneNumber: value,
        }
      })
    }
  }
  const handleOtpChange = (event: any) => {
    const { name, value } = event?.target
    if (name === "otp") {
      setOtp((prev: any) => {
        return {
          ...prev,
          otp: value,
        }
      })
    }
  }

  const handleSendOtp = async () => {
    try {
      const formattedPhoneNumber = `+91${userInputData?.phoneNumber?.replace(
        /\D/g,
        ""
      )}`
      let confirmation = await signInWithPhoneNumber(
        auth,
        formattedPhoneNumber,
        window.recaptchaVerifier
      )
      setConfirmationResult(confirmation)
      setOtpSent(true)
      alert("OTP has been sent")
    } catch (error) {
      console.log("Network Error")
    }
  }

  useEffect(() => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      auth,
      "recaptcha-container",
      {
        size: "normal",
        callback: (response: any) => {},
        "expired-callback": () => {},
      }
    )
  }, [auth])

  const handleOtpSubmit = async () => {
    try {
      await confirmationResult?.confirm(otp?.otp)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Stack sx={{ background: theme?.palette?.neuPalette?.hexOne }}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography>Sign in</Typography>
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="phoneNumber"
                label="Phone Number"
                name="phoneNumber"
                autoComplete="off"
                autoFocus
                onChange={(e) => handleChange(e)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="otp"
                label="OTP"
                id="otp"
                autoComplete="off"
                onChange={(e) => handleOtpChange(e)}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={otpSent ? handleOtpSubmit : handleSendOtp}
              >
                {otpSent ? "SUBMIT OTP" : "GET OTP  "}
              </Button>
              {!otpSent && (
                <Stack alignItems={"center"}>
                  <div id="recaptcha-container"></div>
                </Stack>
              )}

              <Grid container>
                <Grid item xs>
                  <Link href="#">Forgot password?</Link>
                </Grid>
                <Grid item>
                  <Link href="#">{"Don't have an account? Sign Up"}</Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </Stack>
    </>
  )
}
