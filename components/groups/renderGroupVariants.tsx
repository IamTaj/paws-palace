import React from "react"
import GroupBannerCarousel from "./variants/groupBannerCarousel"
import DefaultGroup from "./variants/defaultGroup"
import SliderComponent from "../slider.component"

export default function renderGroupVariant(variant: string, items: any) {
  const allVariants: any = {
    bannerImageCarousel: <GroupBannerCarousel items={items} />,
    default: <DefaultGroup items={items} />,
    offerCarouselGroup: <SliderComponent items={items} />,
  }
  return allVariants[variant]
}
