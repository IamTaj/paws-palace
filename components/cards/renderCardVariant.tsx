import React from "react"
import HeroBannerCard from "../banner/hero-banner"
import CarouselCard from "./variants/offer-cards"
import CardWithIcons from "./variants/card-with-icons"
import CardWithVideoComponent from "./variants/card-with-video.component"
import CardWithProductDeatils from "./variants/card-with-product-deatils.component"
import CardWithProductDeatilsMSite from "./card-with-product-details-mSite"
import ForgotPasswordForm from "./variants/card-with-forgot-password-form.component"
// import BannerCard from './variants/bannerCard'
// import BrandCard from './variants/brandCard'
// import IrregularCard from './variants/IrregularCard'
// import ProductCard from './variants/productCard'

export default function renderCardVariant(variant: string, data: any) {
  console.log("variant: ", variant)
  const allVariants: any = {
    bannerCarouselItem: <HeroBannerCard {...data} />,
    carouselCard: <CarouselCard {...data} />,
    iconsCard: <CardWithIcons {...data} />,
    videoCard: <CardWithVideoComponent {...data} />,
    productDetailsCard: <CardWithProductDeatils {...data} />,
    mobileProductCard: <CardWithProductDeatilsMSite {...data} />,
    forgotPasswordForm: <ForgotPasswordForm {...data} />,
  }
  return allVariants[variant]
}
