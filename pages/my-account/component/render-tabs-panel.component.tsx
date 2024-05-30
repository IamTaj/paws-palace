import React from "react"
import MyProfile from "./tabs/my-profile/my-profile"
import UpdateProfile from "./tabs/update-profile/update-profile"

export default function RenderTabsPanel({ tabsPanelIndex, tabTitle }: any) {
  switch (tabsPanelIndex) {
    case 0:
      return <MyProfile tabTitle={tabTitle} />
    case 1:
      return <UpdateProfile tabTitle={tabTitle} />
  }

  return <>hehe</>
  //   return (
  //     <div>RenderTabsPanel</div>
  //   )
}

// function TabPanel(props: TabPanelProps) {
//     const { children, value, index, ...other } = props

//     return (
//       <Box
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
//       </Box>
//     )
//   }
