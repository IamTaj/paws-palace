import React from "react"
import MyProfile from "./tabs/my-profile/my-profile"
import UpdateProfile from "./tabs/update-profile/update-profile"
import InviteFriendTab from "./tabs/invite-friend"
import OrderTab from "./tabs/orders"

export default function RenderTabsPanel({
  tabsPanelIndex,
  tabTitle,
  handleChange,
}: any) {
  switch (tabsPanelIndex) {
    case 0:
      return <MyProfile tabTitle={tabTitle} handleChange={handleChange} />
    case 1:
      return <UpdateProfile tabTitle={tabTitle} />
    case 2:
      return <OrderTab tabTitle={tabTitle} />
    case 3:
      return <OrderTab tabTitle={tabTitle} />
    case 4:
      return <InviteFriendTab tabTitle={tabTitle} />
  }

  return <>{tabTitle}</>
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
