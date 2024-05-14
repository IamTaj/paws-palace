import React from "react"
import GroupBannerCarousel from "./variants/groupBannerCarousel"
import DefaultGroup from "./variants/defaultGroup"
import SliderComponent from "../slider.component"
import GroupWithColumnGridLayout from "./variants/groupWithColumnGridLayout"

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
  }
  return allVariants[variant]
}
