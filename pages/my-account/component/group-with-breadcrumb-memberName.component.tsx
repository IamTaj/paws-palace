import { theme } from "@/lib/theme"
import { breadcrumbList } from "@/utils/getBreadCrumb"
import { useMobileCheck } from "@/utils/mobile-viewport-check"
import { PathType, useAppNavigation } from "@/utils/useAppNavigation"
import { Box, Stack, Typography } from "@mui/material"
import { useRouter } from "next/router"
import React, { useState } from "react"
import LogoutIcon from "@mui/icons-material/Logout"

export default function BreadcrumbMemberNameComponent() {
  const router = useRouter()
  const navigate = useAppNavigation()
  const breadcrumbValues = breadcrumbList(router)
  const isMobile = useMobileCheck()
  const [hoverOnButton, setHoverOnButton] = useState<boolean>(false)
  const userName = `${global.window?.localStorage?.getItem("firstName")} ${global.window?.localStorage?.getItem("lastName")}`
  const modifiedBreadcrumbValues = (item: any) => {
    let modifiedPathName = item?.text?.replace("-", " ")?.toUpperCase()
    return modifiedPathName
  }

  const handleLogout = () => {
    localStorage.removeItem("accessToken")
    localStorage.removeItem("lastName")
    localStorage.removeItem("firstName")
    navigate("/")
  }
  return (
    <Stack flexDirection={"row"} justifyContent={"space-between"}>
      <Stack flexDirection={"row"} gap={3}>
        {breadcrumbValues?.map((item: any, index: number) => (
          <Stack flexDirection={"row"} gap={3}>
            <Typography
              variant={"body-xs"}
              sx={{
                cursor: "pointer",
                opacity: index === 0 ? 0.5 : 1,
                color:
                  index !== 0
                    ? `${theme?.palette?.neuPalette?.hexSeventeen}`
                    : "initial",
                fontWeight: 500,
              }}
              onClick={() => {
                navigate(index === 0 ? "/" : item?.href, PathType?.internal)
              }}
            >
              {modifiedBreadcrumbValues(item)}
            </Typography>
            <Typography
              sx={{
                cursor: "pointer",
                opacity: index === 0 ? 0.5 : 1,
                color:
                  index !== 0
                    ? `${theme?.palette?.neuPalette?.hexSeventeen}`
                    : "initial",
                fontWeight: 500,
              }}
            >
              {index + 1 < breadcrumbValues?.length - 1 ? "/" : ""}
            </Typography>
          </Stack>
        ))}
      </Stack>
      <Stack alignItems={"center"} gap={2}>
        <Stack flexDirection={"row"} gap={1.5}>
          <Typography
            variant="body-s"
            sx={{ color: theme?.palette?.neuPalette?.hexSeventeen }}
          >
            {"Welcome ! "}
          </Typography>
          <Typography
            variant="body-s"
            sx={{
              color: theme?.palette?.neuPalette?.hexThirtyThree,
            }}
          >
            {userName}
          </Typography>
        </Stack>
        <Stack
          flexDirection={"row"}
          gap={1}
          onMouseEnter={() => setHoverOnButton(true)}
          onMouseLeave={() => setHoverOnButton(false)}
          onClick={() => handleLogout()}
          sx={{
            cursor: "pointer",
            background: hoverOnButton
              ? theme?.palette?.neuPalette?.hexOne
              : theme?.palette?.neuPalette?.hexThirtyThree,
            borderRadius: "1vw",
            padding: "5px 30px",
            // ":hover": {
            //   background: theme?.palette?.neuPalette?.hexOne,
            //   transitionDelay: "1000s",
            //   transition: "ease-in-out",
            // },
          }}
        >
          <LogoutIcon
            fontSize="small"
            sx={{
              color: hoverOnButton
                ? theme?.palette?.neuPalette?.hexThirtyThree
                : theme?.palette?.neuPalette?.hexOne,
              // ":hover": {
              //   color: theme?.palette?.neuPalette?.hexThirtyThree,
              // },
            }}
          />
          <Typography
            variant={isMobile ? "m-body-xs" : "body-xs"}
            sx={{
              color: hoverOnButton
                ? theme?.palette?.neuPalette?.hexThirtyThree
                : theme?.palette?.neuPalette?.hexOne,
            }}
          >
            LOG OUT
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  )
}
