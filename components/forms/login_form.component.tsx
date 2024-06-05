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
import { useMobileCheck } from "@/utils/mobile-viewport-check"
import { theme } from "@/lib/theme"
import { useDispatch } from "react-redux"
import { pawsPalaceGlobalStore } from "@/globalStore/paws-palace.store"
import { handler as ProfileHandler } from "../../features/sso/api/handlers/profile.service"
import { handler as LoginHandler } from "../../features/sso/api/handlers/login.service"
import { useRouter } from "next/router"
import { useAppNavigation } from "@/utils/useAppNavigation"

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

export default function LoginFormComponent() {
  type AppDispatch = typeof pawsPalaceGlobalStore.dispatch
  const isMobile = useMobileCheck()
  const router = useRouter()
  const navigate = useAppNavigation()
  const [loading, setLoading] = useState<boolean>(false)
  const [loginUserDetails, setLoginUserDetails] = useState<any>({
    email: "",
    password: "",
  })

  const setProfileDetails = async () => {
    setLoading(true)
    try {
      const accessToken = global?.window?.localStorage?.getItem("accessToken")
      const { error, data } = await ProfileHandler.apiCall(accessToken)
      if (error === false) {
        global?.window?.localStorage?.setItem("firstName", data?.firstName)
        global?.window?.localStorage?.setItem("lastName", data?.lastName)
        global?.window?.localStorage?.setItem("email", data?.email)
        // router?.reload()
        navigate("/")
      }
    } catch (error) {
      console.log("error at user profile", error)
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (event: any) => {
    event?.preventDefault()
    if (loginUserDetails?.email && loginUserDetails?.password) {
      try {
        const { error, data } = await LoginHandler.apiCall(loginUserDetails)
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
  }
  const handleChange = (event: any) => {
    const { name, value } = event?.target
    if (name === "email") {
      setLoginUserDetails({ ...loginUserDetails, email: value })
    } else if (name === "password") {
      setLoginUserDetails({ ...loginUserDetails, password: value })
    }
  }
  const handleForgetPassword = () => {
    navigate("/password-reset")
  }

  return (
    <Box sx={{ background: theme?.palette?.neuPalette?.hexOne }}>
      <Grid container sx={{ width: isMobile ? "100%" : "50vw" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${process.env.NEXT_PUBLIC_UNSPLASH_LINK})`,
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
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
            <Typography component="h1">Log In</Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
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
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e: any) => handleChange(e)}
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
              >
                <Typography
                  variant="body-xxs"
                  sx={{ color: theme?.palette?.neuPalette?.hexOne }}
                >
                  Login
                </Typography>
              </Button>
              <Grid container>
                <Grid item xs sx={{ cursor: "pointer" }}>
                  <Link onClick={() => handleForgetPassword()}>
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Box sx={{ cursor: "pointer" }}>
                    {"Don't have an account? Sign Up"}
                  </Box>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}
