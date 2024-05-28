import React from "react"
import HeroBannerCard from "../banner/hero-banner"
import CarouselCard from "./variants/offer-cards"
import CardWithIcons from "./variants/card-with-icons"
import CardWithVideoComponent from "./variants/card-with-video.component"
import CardWithProductDeatils from "./variants/card-with-product-deatils.component"
import CardWithProductDeatilsMSite from "./card-with-product-details-mSite"
// import BannerCard from './variants/bannerCard'
// import BrandCard from './variants/brandCard'
// import IrregularCard from './variants/IrregularCard'
// import ProductCard from './variants/productCard'

export default function renderCardVariant(variant: string, data: any) {
  const allVariants: any = {
    bannerCarouselItem: <HeroBannerCard {...data} />,
    carouselCard: <CarouselCard {...data} />,
    iconsCard: <CardWithIcons {...data} />,
    videoCard: <CardWithVideoComponent {...data} />,
    productDetailsCard: <CardWithProductDeatils {...data} />,
    mobileProductCard: <CardWithProductDeatilsMSite {...data} />,
  }
  return allVariants[variant]
}
