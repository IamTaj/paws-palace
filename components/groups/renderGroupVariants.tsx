import React from "react"
import GroupBannerCarousel from "./variants/groupBannerCarousel"
import DefaultGroup from "./variants/defaultGroup"
import SliderComponent from "../slider.component"
import GroupWithColumnGridLayout from "./variants/groupWithColumnGridLayout"
import SplitGroupLayoutComponent from "./variants/split-group-layout"
import GroupWithDealTrackerComponent from "./variants/group-with-deal-tracker"
import GroupWithSpiningCardsComponent from "./variants/group-with-spining-card.component"
import GroupWithHalfSliderComponent from "./variants/groupWithHalfSliderComponent"

export default function renderGroupVariant(
  variant: string,
  items: any,
  columnValue: number
) {
  const allVariants: any = {
    bannerImageCarousel: <GroupBannerCarousel items={items} />,
    default: <DefaultGroup items={items} />,
    offerCarouselGroup: <SliderComponent items={items} />,
    groupWithColumn: (
      <GroupWithColumnGridLayout items={items} column={columnValue} />
    ),
    splitGroupComponent: <SplitGroupLayoutComponent items={items} />,
    dealTrackGroup: <GroupWithDealTrackerComponent items={items} />,
    groupWithSpiningCard: <GroupWithSpiningCardsComponent items={items} />,
    groupWithHalfWidthSlider: <GroupWithHalfSliderComponent items={items}/>
  }
  return allVariants[variant]
}
