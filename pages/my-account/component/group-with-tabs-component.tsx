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

  const handleChange = (newValue: number, tabName: string) => {
    setTabValue({ ...tabValue, value: newValue, tabTitle: tabName })
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
          />
          {/* <TabPanel value={value} index={0}>
            Item One
          </TabPanel>
          <TabPanel value={value} index={1}>
            Item Two
          </TabPanel>
          <TabPanel value={value} index={2}>
            Item Three
          </TabPanel>
          <TabPanel value={value} index={3}>
            Item Four
          </TabPanel>
          <TabPanel value={value} index={4}>
            Item Five
          </TabPanel>
          <TabPanel value={value} index={5}>
            Item Six
          </TabPanel>
          <TabPanel value={value} index={6}>
            Item Seven
          </TabPanel> */}
        </Grid>
      </Grid>
    </Stack>
  )
}
