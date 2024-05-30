import { theme } from "@/lib/theme"
import { useMobileCheck } from "@/utils/mobile-viewport-check"
import { DesktopPxToVw, MobilePxToVw } from "@/utils/view-port-calculator"
import {
  Box,
  Button,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material"
import React, { useState } from "react"

import ModeEditIcon from "@mui/icons-material/ModeEdit"
import CustomUpdateTextField from "./update-textField"
import { handler as UpdateProfileHandler } from "../../../../../features/sso/api/handlers/update-profile.service"

export default function UpdateProfile({ tabTitle }: any) {
  const isMobile = useMobileCheck()
  const firstName = global?.window?.localStorage?.getItem("firstName")
  const lastName = global?.window?.localStorage?.getItem("lastName")
  const email = global?.window?.localStorage?.getItem("email")
  const address = global?.window?.localStorage?.getItem("address")

  const initialValues = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    address: address,
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  }

  const [userUpdatedData, setUserUpdatedData] = useState<any>(initialValues)
  const [loading, setLoading] = useState<boolean>(false)

  const handleChangeForm = (event: any) => {
    const { name, value } = event.target
    setUserUpdatedData((prev: any) => {
      return {
        ...prev,
        [name]: value,
      }
    })
  }

  const handleSubmit = async () => {
    if (userUpdatedData?.newPassword === userUpdatedData?.confirmPassword) {
      const accessToken = global?.window?.localStorage?.getItem("accessToken")
      const payLoad = {
        firstName: userUpdatedData?.firstName,
        lastName: userUpdatedData?.lastName,
        email: userUpdatedData?.email,
        // address: userUpdatedData?.address,
        password: userUpdatedData?.newPassword,
      }
      event?.preventDefault()
      try {
        const { error, data } = await UpdateProfileHandler.apiCall(payLoad)
        if (error === false) {
          global?.window?.localStorage?.setItem("accessToken", data?.token)
          // setProfileDetails()
        }
      } catch (error) {
        console.log("error at SSO Login", error)
      } finally {
        setLoading(false)
      }
    } else {
      alert("New and Confirm Password are not matched")
    }
    console.log("userUpdatedData", userUpdatedData)
  }
  return (
    <Box
      sx={{
        p: 3,
        boxShadow: "0px 1px 13px rgba(0, 0, 0, 0.05)",
      }}
    >
      <Stack sx={{ alignItems: "center" }}>
        <Typography
          variant={isMobile ? "m-heading-s" : "heading-s"}
          sx={{ letterSpacing: "0.05em" }}
        >
          {tabTitle}
        </Typography>
      </Stack>
      <Stack gap={isMobile ? MobilePxToVw(24) : DesktopPxToVw(18)}>
        <Stack
          sx={{
            pt: 5,
            flexDirection: "row",
            gap: 4,
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ width: "100%" }}>
            <Typography variant={isMobile ? "m-body-s" : "body-s"}>
              {"First Name"}
            </Typography>
            <Box
              sx={{
                background: theme?.palette?.neuPalette?.hexTwentyNine,
                borderRadius: "4px",
                p: isMobile
                  ? `${MobilePxToVw(13)} ${MobilePxToVw(16)}`
                  : `${DesktopPxToVw(13)} ${DesktopPxToVw(16)}`,
                color: theme?.palette?.neuPalette?.hexEleven,
                height: isMobile ? MobilePxToVw(60) : DesktopPxToVw(60),
                position: "relative",
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
              }}
            >
              <CustomUpdateTextField
                id="standard-basic"
                value={userUpdatedData?.firstName}
                name={"firstName"}
                handleChangeForm={handleChangeForm}
                disabled
                variant="standard"
                fullWidth
                InputProps={{
                  disableUnderline: true,
                  endAdornment: (
                    <InputAdornment position="start">
                      <ModeEditIcon sx={{ mr: "2vw" }} />
                    </InputAdornment>
                  ),
                }}
                sx={{ position: "absolute" }}
              />
            </Box>
          </Box>
          <Box sx={{ width: "100%" }}>
            <Typography variant={isMobile ? "m-body-s" : "body-s"}>
              {"Last Name"}
            </Typography>
            <Box
              sx={{
                background: theme?.palette?.neuPalette?.hexTwentyNine,
                borderRadius: "4px",
                p: isMobile
                  ? `${MobilePxToVw(13)} ${MobilePxToVw(16)}`
                  : `${DesktopPxToVw(13)} ${DesktopPxToVw(16)}`,
                color: theme?.palette?.neuPalette?.hexEleven,
                height: isMobile ? MobilePxToVw(60) : DesktopPxToVw(60),
                position: "relative",
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
              }}
            >
              <CustomUpdateTextField
                id="standard-basic"
                value={userUpdatedData?.lastName}
                name={"lastName"}
                handleChangeForm={handleChangeForm}
                disabled
                variant="standard"
                fullWidth
                InputProps={{
                  disableUnderline: true,
                  endAdornment: (
                    <InputAdornment position="start">
                      <ModeEditIcon sx={{ mr: "2vw" }} />
                    </InputAdornment>
                  ),
                }}
                sx={{ position: "absolute" }}
              />
            </Box>
          </Box>
        </Stack>
        <Stack
          sx={{
            pt: 5,
            flexDirection: "row",
            gap: 4,
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ width: "100%" }}>
            <Typography variant={isMobile ? "m-body-s" : "body-s"}>
              {"Email"}
            </Typography>
            <Box
              sx={{
                background: theme?.palette?.neuPalette?.hexTwentyNine,
                borderRadius: "4px",
                p: isMobile
                  ? `${MobilePxToVw(13)} ${MobilePxToVw(16)}`
                  : `${DesktopPxToVw(13)} ${DesktopPxToVw(16)}`,
                color: theme?.palette?.neuPalette?.hexEleven,
                height: isMobile ? MobilePxToVw(60) : DesktopPxToVw(60),
                position: "relative",
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
              }}
            >
              <CustomUpdateTextField
                id="standard-basic"
                value={userUpdatedData?.email}
                name={"email"}
                handleChangeForm={handleChangeForm}
                disabled
                variant="standard"
                fullWidth
                InputProps={{
                  disableUnderline: true,
                  endAdornment: (
                    <InputAdornment position="start">
                      <ModeEditIcon sx={{ mr: "2vw" }} />
                    </InputAdornment>
                  ),
                }}
                sx={{ position: "absolute" }}
              />
            </Box>
          </Box>
          <Box sx={{ width: "100%" }}>
            <Typography variant={isMobile ? "m-body-s" : "body-s"}>
              {"Address"}
            </Typography>
            <Box
              sx={{
                background: theme?.palette?.neuPalette?.hexTwentyNine,
                borderRadius: "4px",
                p: isMobile
                  ? `${MobilePxToVw(13)} ${MobilePxToVw(16)}`
                  : `${DesktopPxToVw(13)} ${DesktopPxToVw(16)}`,
                color: theme?.palette?.neuPalette?.hexEleven,
                height: isMobile ? MobilePxToVw(60) : DesktopPxToVw(60),
                position: "relative",
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
              }}
            >
              <CustomUpdateTextField
                id="standard-basic"
                value={userUpdatedData?.address}
                name={"address"}
                handleChangeForm={handleChangeForm}
                disabled
                variant="standard"
                fullWidth
                InputProps={{
                  disableUnderline: true,
                  endAdornment: (
                    <InputAdornment position="start">
                      <ModeEditIcon sx={{ mr: "2vw" }} />
                    </InputAdornment>
                  ),
                }}
                sx={{ position: "absolute" }}
              />
            </Box>
          </Box>
        </Stack>
        <Stack
          sx={{
            pt: 5,
            flexDirection: "column",
            gap: 4,
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ width: "100%" }}>
            <Typography variant={isMobile ? "m-body-s" : "body-s"}>
              {"Current Password"}
            </Typography>
            <Box
              sx={{
                background: theme?.palette?.neuPalette?.hexTwentyNine,
                borderRadius: "4px",
                p: isMobile
                  ? `${MobilePxToVw(13)} ${MobilePxToVw(16)}`
                  : `${DesktopPxToVw(13)} ${DesktopPxToVw(16)}`,
                color: theme?.palette?.neuPalette?.hexEleven,
                height: isMobile ? MobilePxToVw(60) : DesktopPxToVw(60),
                position: "relative",
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
              }}
            >
              <CustomUpdateTextField
                id="standard-basic"
                placeholder="Current Password"
                variant="standard"
                name="currentPassword"
                handleChangeForm={handleChangeForm}
                showButton={true}
                fullWidth
                InputProps={{
                  disableUnderline: true,
                }}
                sx={{ position: "absolute" }}
              />
            </Box>
          </Box>
          <Box sx={{ width: "100%" }}>
            <Typography variant={isMobile ? "m-body-s" : "body-s"}>
              {"New Password"}
            </Typography>
            <Box
              sx={{
                background: theme?.palette?.neuPalette?.hexTwentyNine,
                borderRadius: "4px",
                p: isMobile
                  ? `${MobilePxToVw(13)} ${MobilePxToVw(16)}`
                  : `${DesktopPxToVw(13)} ${DesktopPxToVw(16)}`,
                color: theme?.palette?.neuPalette?.hexEleven,
                height: isMobile ? MobilePxToVw(60) : DesktopPxToVw(60),
                position: "relative",
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
              }}
            >
              <CustomUpdateTextField
                id="standard-basic"
                placeholder="New Password"
                name="newPassword"
                handleChangeForm={handleChangeForm}
                variant="standard"
                showButton
                InputProps={{ disableUnderline: true }}
                sx={{ position: "absolute" }}
              />
            </Box>
          </Box>
          <Box sx={{ width: "100%" }}>
            <Typography variant={isMobile ? "m-body-s" : "body-s"}>
              {"Confirm New Password"}
            </Typography>
            <Box
              sx={{
                background: theme?.palette?.neuPalette?.hexTwentyNine,
                borderRadius: "4px",
                p: isMobile
                  ? `${MobilePxToVw(13)} ${MobilePxToVw(16)}`
                  : `${DesktopPxToVw(13)} ${DesktopPxToVw(16)}`,
                color: theme?.palette?.neuPalette?.hexEleven,
                height: isMobile ? MobilePxToVw(60) : DesktopPxToVw(60),
                position: "relative",
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
              }}
            >
              <CustomUpdateTextField
                id="standard-basic"
                placeholder="Confirm New Password"
                name="confirmPassword"
                handleChangeForm={handleChangeForm}
                variant="standard"
                showButton
                InputProps={{ disableUnderline: true }}
                sx={{ position: "absolute" }}
              />
            </Box>
          </Box>
        </Stack>
      </Stack>

      <Stack
        alignItems={"end"}
        pt={"24px"}
        flexDirection={"row-reverse"}
        gap={4}
      >
        <Button
          onClick={() => handleSubmit()}
          sx={{
            border: ` 1px solid ${theme?.palette?.neuPalette?.hexThirtyThree}`,

            color: theme?.palette?.neuPalette?.hexThirtyThree,
            width: "10vw",
            gap: "5px",
            ":hover": {
              background: theme?.palette?.neuPalette?.hexThirtyThree,
              color: theme?.palette?.neuPalette?.hexOne,
            },
          }}
        >
          <Box>{"Update Profile"}</Box>
        </Button>
      </Stack>
    </Box>
  )
}

// function TabPanel(props: TabPanelProps) {
//     const { children, value, index, ...other } = props

//     return (
//       <div
//         role="tabpanel"
//         hidden={value !== index}
//         id={`vertical-tabpanel-${index}`}
//         aria-labelledby={`vertical-tab-${index}`}
//         {...other}
//       >
//         {value === index && (
//           <Box sx={{ p: 3 }}>
//             <Typography>{children}</Typography>
//           </Box>
//         )}
//       </div>
//     )
//   }
