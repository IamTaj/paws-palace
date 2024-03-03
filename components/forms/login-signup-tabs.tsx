import React, { useState } from "react"
import { styled } from "@mui/system"
import { Tabs } from "@mui/base/Tabs"
import { TabsList as BaseTabsList } from "@mui/base/TabsList"
import { TabPanel as BaseTabPanel } from "@mui/base/TabPanel"
import { buttonClasses } from "@mui/base/Button"
import { Tab as BaseTab, tabClasses } from "@mui/base/Tab"
import { theme } from "@/lib/theme"
import EmailSignInFormComponent from "./signin-form-email"
import EmailLoginFormComponent from "./login-form-email"
import tabsdata from "../../mock-data/loginSignupTabs.json"
import { useMobileCheck } from "@/utils/mobile-viewport-check"

export default function SignInLoginTabs() {
  const [selectedTab, setSelectedTab] = useState<number>(0)
  return (
    <Tabs defaultValue={selectedTab}>
      <TabsList>
        {tabsdata?.map((item: any, index: number) => (
          <Tab value={index}>{item?.value}</Tab>
        ))}
      </TabsList>
      <TabPanel value={0}>
        <EmailSignInFormComponent />
      </TabPanel>
      <TabPanel value={1}>
        <EmailLoginFormComponent />
      </TabPanel>
    </Tabs>
  )
}

const blue = {
  50: "#F0F7FF",
  100: "#C2E0FF",
  200: "#80BFFF",
  300: "#66B2FF",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  700: "#0059B2",
  800: "#004C99",
  900: "#003A75",
}

const grey = {
  50: "#F3F6F9",
  100: "#E5EAF2",
  200: "#DAE2ED",
  300: "#C7D0DD",
  400: "#B0B8C4",
  500: "#9DA8B7",
  600: "#6B7A90",
  700: "#434D5B",
  800: "#303740",
  900: "#1C2025",
}

const Tab = styled(BaseTab)`
  font-family: "IBM Plex Sans", sans-serif;
  color: ${theme?.palette?.neuPalette?.hexSeventeen};
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 600;
  background-color: transparent;
  width: 100%;
  padding: 10px 12px;
  margin: 6px;
  border: none;
  border-radius: 7px;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: ${theme?.palette?.neuPalette?.hexSeven};
    color: ${theme?.palette?.neuPalette?.hexSeventeen};
  }

  &.${tabClasses.selected} {
    background-color: ${theme?.palette?.neuPalette?.hexThirtyThree};
    color: ${theme?.palette?.neuPalette?.hexOne};
  }

  &.${buttonClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media (max-width: 640px) {
    width: 30%;
  }
`

const TabPanel = styled(BaseTabPanel)(
  ({ theme }) => `
  width: 100%;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
  padding: 20px 12px;
  background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
  border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
  border-radius: 12px;
  opacity:  0.6;

  @media (max-width: 640px) {
    opacity:  1;
  }
  `
)

const TabsList = styled(BaseTabsList)(
  ({ theme }) => `
  min-width: 400px;
  background-color: ${theme?.palette?.neuPalette?.hexOne};
  border-radius: 12px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
  box-shadow: 0px 4px 30px ${
    theme.palette.mode === "dark" ? grey[900] : grey[200]
  };
  @media (max-width: 640px) {
    width:max-content;
    margin:0px auto 16px;
  }
  `
)
