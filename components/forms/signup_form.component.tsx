import React, { useState } from "react"
import Avatar from "@mui/material/Avatar"
import Button from "@mui/material/Button"
import CssBaseline from "@mui/material/CssBaseline"
import TextField from "@mui/material/TextField"
import FormControlLabel from "@mui/material/FormControlLabel"
import Checkbox from "@mui/material/Checkbox"
import Link from "@mui/material/Link"
import Paper from "@mui/material/Paper"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import LockOutlinedIcon from "@mui/icons-material/LockOutlined"
import Typography from "@mui/material/Typography"
import { getAuth } from "firebase/auth"
import { fireBaseCustomConfig } from "@/firebase.congig"
import { theme } from "@/lib/theme"
import { ICONS } from "../CONSTANT"
import { IconButton, InputAdornment, Stack } from "@mui/material"
import { useMobileCheck } from "@/utils/mobile-viewport-check"
import { Visibility, VisibilityOff } from "@mui/icons-material"
import { handler as ProfileHandler } from "../../features/sso/api/handlers/profile.service"
import { handler as RegisterHandler } from "../../features/sso/api/handlers/register.service"
import { useRouter } from "next/router"

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://google.com/">
        Paws Palace
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  )
}

export default function SignInFormComponent({
  setOpenSignIn,
  openSignIn,
}: any) {
  const auth = getAuth(fireBaseCustomConfig)
  const isMobile = useMobileCheck()
  const router = useRouter()

  // const [email, setEmail] = useState<string>("")
  // const [password, setPassword] = useState<string>("")
  const [userData, setUserData]: any = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    registeredAt: "PAWS_PALACE",
  })
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState<boolean>(false)

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  }

  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event?.preventDefault()
  //   if (userData?.email && userData?.password) {
  //     signInWithEmailAndPassword(auth, email, password)
  //       .then((userCredential) => {
  //         // Signed in
  //         const user = userCredential.user
  //         // ...
  //       })
  //       .catch((error) => {
  //         const errorCode = error.code
  //         const errorMessage = error.message
  //       })
  //   }
  // }

  const setProfileDetails = async () => {
    setLoading(true)
    try {
      const accessToken = global?.window?.localStorage?.getItem("accessToken")
      const { error, data } = await ProfileHandler.apiCall(accessToken)
      if (error === false) {
        global?.window?.localStorage?.setItem("firstName", data?.firstName)
        global?.window?.localStorage?.setItem("lastName", data?.lastName)
        router?.reload()
      }
    } catch (error) {
      console.log("error at user profile", error)
    } finally {
      setLoading(false)
    }
  }

  const handleRegister = async (e: any) => {
    e.preventDefault()
    setLoading(true)
    try {
      const { error, data } = await RegisterHandler.apiCall(userData)
      if (error === false) {
        global?.window?.localStorage?.setItem("accessToken", data?.token)
        setProfileDetails()
      }
    } catch (error) {
      console.log("error at SSO Login", error)
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (event: any) => {
    const { name, value } = event?.target
    setUserData({
      ...userData,
      [name]: value,
    })
  }

  return (
    <Box>
      <Grid container sx={{ width: isMobile ? "100%" : "50vw" }}>
        <CssBaseline />
        <Grid
          item
          xs={12}
          sm={8}
          md={12}
          component={Paper}
          elevation={6}
          square
        >
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Stack flexDirection={"row"} alignItems={"end"}>
              <Typography component="h1" fontWeight={700}>
                Hello Hooman !
              </Typography>
              <Box component={"img"} src={ICONS?.DOG_LOGO} width={"50px"}></Box>
            </Stack>
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <Stack sx={{ flexDirection: "row", gap: "3vw" }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  name="firstName"
                  autoComplete="off"
                  autoFocus
                  onChange={(e: any) => handleChange(e)}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="off"
                  autoFocus
                  onChange={(e: any) => handleChange(e)}
                />
              </Stack>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={(e: any) => handleChange(e)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type={showPassword ? "text" : "password"}
                id="password"
                autoComplete="current-password"
                onChange={(e: any) => handleChange(e)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 2, mb: 2, borderRadius: "50px" }}
                onClick={(e: any) => handleRegister(e)}
              >
                <Typography
                  variant="body-xxs"
                  sx={{ color: theme?.palette?.neuPalette?.hexOne }}
                >
                  Let's Go
                </Typography>
              </Button>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}
