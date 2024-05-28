import React, { useEffect, useState } from "react"
import fetchProductSlider from "@/lib-sanity/sanity-groq/slider.card.reference"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"

import { EffectCoverflow, Pagination } from "swiper/modules"
import renderCardVariant from "@/components/cards/renderCardVariant"
import { useMobileCheck } from "@/utils/mobile-viewport-check"
import { Box } from "@mui/material"
import { DesktopPxToVw, MobilePxToVw } from "@/utils/view-port-calculator"

export default function GroupWithHalfSliderComponent({ items }: any) {
  const [sliderProducts, setSliderProducts] = useState<any[]>([])
  const isMobile = useMobileCheck()
  const [products, setProducts] = useState<any>([])
  const cardVariant = isMobile ? items?.[0]?.variant : items?.[0]?.largeVariant
  const [activeIndex, setActiveIndex] = useState<number>(1)

  useEffect(() => {
    const fetchProducts = async () => {
      if (items) {
        const sliderProductsArray = items.flatMap(
          (item: any) => item?.Products && item?.Products?.products
        )

        setSliderProducts(sliderProductsArray)

        const productData = await Promise.all(
          sliderProductsArray.map((item: any) => fetchProductSlider(item?._ref))
        )

        setProducts(productData)
      }
    }

    fetchProducts()
  }, [items])

  const handleSlideChange = (swiper: any) => {
    setActiveIndex(swiper.activeIndex)
  }

  return (
    <Box
      sx={{
        ".swiper-wrapper": { width: "70%", paddingTop: "2vw" },
        ".swiper-slide-active .hide-box": {
          visibility: "visible !important",
        },
        ".swiper-slide-active": {
          height: `calc(100% + ${DesktopPxToVw(12)})`,
        },
        ".swiper-slide .hide-box": { visibility: "hidden" },
        ".swiper": {
          width: "100%",
        },

        ".swiper-slide": {
          backgroundPosition: "center",
          backgroundSize: "cover",
          width: "50% !important",
        },
        "@media(max-width:640px)": {
          ".swiper-slide": {
            border: "4px solid white",
          },

          ".swiper-slide-active": {
            border: "none",
            background: "white",
            padding: "4vw",
          },
          ".swiper-wrapper": {
            width: `calc(100% - ${MobilePxToVw(100)})`,
          },
        },
      }}
    >
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={false}
        initialSlide={activeIndex}
        onSlideChange={handleSlideChange}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {products.map((product: any, index: number) => (
          <SwiperSlide key={index}>
            {renderCardVariant(cardVariant, { ...product, index, activeIndex })}
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  )
}
