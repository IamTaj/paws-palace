import { theme } from "@/lib/theme"
import { breadcrumbList } from "@/utils/getBreadCrumb"
import { PathType, useAppNavigation } from "@/utils/useAppNavigation"
import { Box, Stack, Typography } from "@mui/material"
import { useRouter } from "next/router"
import React from "react"

export default function BreadcrumbMemberNameComponent() {
  const router = useRouter()
  const navigate = useAppNavigation()
  const breadcrumbValues = breadcrumbList(router)
  const userName = `${global.window?.localStorage?.getItem("firstName")} ${global.window?.localStorage?.getItem("lastName")}`
  // const lastName = global.window?.localStorage?.getItem("lastName")
  const modifiedBreadcrumbValues = (item: any) => {
    let modifiedPathName = item?.text?.replace("-", " ")?.toUpperCase()
    return modifiedPathName
  }
  return (
    <Stack
      flexDirection={"row"}
      justifyContent={"space-between"}
    >
      <Stack flexDirection={"row"} gap={3}>
        {breadcrumbValues?.map((item: any, index: number) => (
          <Stack flexDirection={"row"} gap={3}>
            <Typography
              variant={"body-xs"}
              sx={{
                cursor: "pointer",
                opacity: index === 0 ? 0.5 : 1,
                color:
                  index !== 0 && `${theme?.palette?.neuPalette?.hexSeventeen}`,
                fontWeight: 500,
              }}
              onClick={() => {
                navigate(index === 0 ? "/" : item?.href, PathType?.internal)
              }}
            >
              {modifiedBreadcrumbValues(item)}
            </Typography>
            <Typography>
              {index + 1 < breadcrumbValues?.length - 1 ? "/" : ""}
            </Typography>
          </Stack>
        ))}
      </Stack>
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
    </Stack>
  )
}
