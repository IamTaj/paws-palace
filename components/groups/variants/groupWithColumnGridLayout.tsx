import { renderComponentUtility } from "@/components/renderComponent"
import { useMobileCheck } from "@/utils/mobile-viewport-check"
import { Box, Grid } from "@mui/material"
import React from "react"

export default function GroupWithColumnGridLayout({ items, column }: any) {
  const isMobile = useMobileCheck()
  const columnBreakPoints = isMobile ? 4 : 12 / column
  console.log("columnBreakPoints: ", columnBreakPoints)
  return (
    <Box>
      <Grid container spacing={2}>
        {items?.map((item: any, index: number) => (
          <Grid item xs={columnBreakPoints}>
            {renderComponentUtility(item)}
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
