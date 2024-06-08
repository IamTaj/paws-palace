import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import { Grid, Stack } from "@mui/material"
import tabsData from "../../../mock-data/myAccountTabsItem.json"
import RenderTabsItem from "./render-tabs.component"
import RenderTabsPanel from "./render-tabs-panel.component"
import { useState } from "react"

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

export default function RenderTabsComponent() {
  const [tabValue, setTabValue] = useState<any>({
    value: 0,
    tabTitle: tabsData?.[0]?.tabsItem?.[0]?.tabName,
  })

  const handleChange = (newValue: number) => {
    const tabItemsData = tabsData?.flatMap((item: any) => item?.tabsItem)
    const tabsTitle = tabItemsData?.find(
      (item: any) => item?.index === newValue
    )
    setTabValue({ ...tabValue, value: newValue, tabTitle: tabsTitle?.tabName })
  }

  return (
    <Stack sx={{ flexGrow: 1, display: "flex", paddingTop: "6vw" }}>
      <Grid
        container
        sx={{
          flexGrow: 1,
          flexDirection: "row",
          gap: "12vw",
        }}
      >
        <Grid item lg={2}>
          {tabsData?.map((tabsItem: any, index: number) => (
            <>
              <RenderTabsItem
                value={tabValue?.value}
                tabProps={tabsItem}
                handleChange={handleChange}
              />
            </>
          ))}
        </Grid>

        <Grid item lg={8}>
          <RenderTabsPanel
            tabsPanelIndex={tabValue?.value}
            tabTitle={tabValue?.tabTitle}
            handleChange={handleChange}
          />
        </Grid>
      </Grid>
    </Stack>
  )
}
