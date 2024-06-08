import { theme } from "@/lib/theme"
import { useMobileCheck } from "@/utils/mobile-viewport-check"
import { DesktopPxToVw, MobilePxToVw } from "@/utils/view-port-calculator"
import { Box, Button, Grow, Stack, Typography } from "@mui/material"
import React, { useState } from "react"
import EditIcon from "@mui/icons-material/Edit"
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts"
import { handler as DeactivateProfileHandler } from "../../../../../features/sso/api/handlers/deactivate-account.service"
import LoadingSpinner from "@/utils/LoadingComponent"
import { useAppNavigation } from "@/utils/useAppNavigation"

export default function MyProfile({ tabTitle, handleChange }: any) {
  const isMobile = useMobileCheck()
  const navigate = useAppNavigation()
  const firstName = global?.window?.localStorage?.getItem("firstName")
  const lastName = global?.window?.localStorage?.getItem("lastName")
  const email = global?.window?.localStorage?.getItem("email")
  const address = global?.window?.localStorage?.getItem("address")
  const [checked, setChecked] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)

  const handleDeactivateAccount = async () => {
    event?.preventDefault()
    setLoading(true)
    try {
      const { error, data } = await DeactivateProfileHandler.apiCall()
      if (error === false) {
        localStorage.removeItem("accessToken")
        localStorage.removeItem("lastName")
        localStorage.removeItem("firstName")
        navigate("/")
      }
    } catch (error) {
      console.log("error at SSO Login", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Box
      sx={{
        p: 3,
        boxShadow: "0px 1px 13px rgba(0, 0, 0, 0.05)",
      }}
    >
      {loading ? (
        <LoadingSpinner
          componentLevel={true}
          containerStyle={{
            maxHeight: isMobile ? MobilePxToVw(300) : DesktopPxToVw(300),
          }}
        />
      ) : (
        <Box>
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
                  }}
                >
                  <Typography variant={isMobile ? "m-body-s" : "body-s"}>
                    {firstName}
                  </Typography>
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
                  }}
                >
                  <Typography variant={isMobile ? "m-body-m" : "body-m"}>
                    {lastName}
                  </Typography>
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
                  }}
                >
                  <Typography variant={isMobile ? "m-body-s" : "body-s"}>
                    {email}
                  </Typography>
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
                  }}
                >
                  <Typography variant={isMobile ? "m-body-s" : "body-s"}>
                    {address ? address : "No Address Has Been Found"}
                  </Typography>
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
            ></Stack>
          </Stack>

          <Stack
            alignItems={"end"}
            pt={"24px"}
            flexDirection={"row-reverse"}
            gap={4}
          >
            <Button
              onMouseEnter={() => setChecked(true)}
              onMouseLeave={() => setChecked(false)}
              onClick={() => handleChange(1)}
              sx={{
                border: ` 1px solid ${theme?.palette?.neuPalette?.hexThirtyThree}`,

                color: theme?.palette?.neuPalette?.hexThirtyThree,
                width: "12vw",
                gap: "5px",
                ":hover": {
                  background: theme?.palette?.neuPalette?.hexThirtyThree,
                  color: theme?.palette?.neuPalette?.hexOne,
                },
              }}
            >
              <Grow
                in={true}
                style={{ transformOrigin: "0 0 0", animation: "ease-in-out" }}
                timeout={2000}
              >
                {checked ? <EditIcon /> : <ManageAccountsIcon />}
              </Grow>

              <Box>{"Edit Profile"}</Box>
            </Button>
            <Button
              onClick={() => handleDeactivateAccount()}
              sx={{
                border: ` 1px solid ${theme?.palette?.neuPalette?.hexThirtyThree}`,

                color: theme?.palette?.neuPalette?.hexThirtyThree,
                width: "12vw",
                gap: "5px",
                ":hover": {
                  background: theme?.palette?.neuPalette?.hexThirtyThree,
                  color: theme?.palette?.neuPalette?.hexOne,
                },
              }}
            >
              <Box>{"Deactivate Profile"}</Box>
            </Button>
          </Stack>
        </Box>
      )}
    </Box>
  )
}
