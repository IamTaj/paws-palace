import React from "react"
import Group from "./groups"
import Card from "./cards"
// import Group from './group'
// import Card from './card'
// import Banner from './banner/banner.component'

export const renderComponentUtility = (props: any) => {
  switch (props?._type) {
    case "group":
      return <Group {...props} />
    case "card":
      return <Card {...props} />
    // case 'banner':
    //   return <Banner {...props} />
    // case "tabLinks":
    //     return <RenderTabsComponent {...props} />
    // case "tabs":
    //     return <RenderTabsComponent {...props} />
    // case "carousel":
    //     return <RenderCarouselComponent {...props} />
    // case "media":
    //     return <RenderMediaComponent {...props} />
    // case "divider":
    //     return <RenderDividerComponent {...props} />
    // case "custom":
    //     return <RenderCustomComponent {...props} />
    default:
      return <></>
  }
}
