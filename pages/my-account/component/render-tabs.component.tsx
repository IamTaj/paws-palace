import { theme } from "@/lib/theme"
import { Stack, Typography } from "@mui/material"
import React from "react"

export default function RenderTabsItem({ tabProps, handleChange, value }: any) {
  const { tabTitle, tabsItem } = tabProps
  return (
    <>
      <Typography sx={{ pt: "2vw" }}>{tabTitle}</Typography>
      {tabsItem &&
        tabsItem?.map((tabsItem: any, index: number) => {
          return (
            <Stack
              sx={{
                flexDirection: "column",
                pt: "2vw",
                alignItems: "self-start",
              }}
            >
              <Stack sx={{ alignItems: "center" }}>
                <Typography
                  onClick={() =>
                    handleChange(tabsItem?.index, tabsItem?.tabName)
                  }
                  sx={{
                    textTransform: "uppercase",
                    cursor: "pointer",
                    lineHeight: "1.25",
                    maxWidth: "360px",
                    minWidth: "90px",
                    minHeight: "48px",
                    padding: "12px 16px",
                    overflow: "hidden",
                    whiteSpace: "normal",
                    textAlign: "center",
                    color:
                      value === tabsItem?.index
                        ? theme?.palette?.neuPalette?.hexThirtyThree
                        : theme?.palette?.neuPalette?.hexSeventeen,
                    opacity: value === tabsItem?.index ? 1 : 0.5,
                  }}
                >
                  {tabsItem?.tabName}
                </Typography>
              </Stack>
            </Stack>
          )
        })}
    </>
  )
}
