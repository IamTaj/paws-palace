import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Box, Stack } from "@mui/material"
import { MOBILE_SLIDER_IMAGE, WEBSITE_SLIDER_IMAGE } from "./CONSTANT"
import { useMobileCheck } from "@/utils/mobile-viewport-check"
import { CommonCarouselStyles } from "./styles/slider"

export default function SliderComponent() {
  const isMobile = useMobileCheck()
  var settings = {
    className: "center",
    centerMode: true,
    arrows: false,
    centerPadding: "200px",
    slidesToShow: 1,
    dots: false,
    infinite: true,
    speed: 100,
    autoplaySpeed: 2000,
  }
  return (
    <Box
      sx={{
        "& .slick-initialized .slick-slide": {
          padding: "3vw 4vw",
        },
      }}
    >
      <Slider {...settings}>
        <Box
          component={"img"}
          src={
            isMobile
              ? MOBILE_SLIDER_IMAGE?.SLIDER_1
              : WEBSITE_SLIDER_IMAGE?.SLIDER_1
          }
        ></Box>
        <Box
          component={"img"}
          src={
            isMobile
              ? MOBILE_SLIDER_IMAGE?.SLIDER_2
              : WEBSITE_SLIDER_IMAGE?.SLIDER_2
          }
        ></Box>
        <Box
          component={"img"}
          src={
            isMobile
              ? MOBILE_SLIDER_IMAGE?.SLIDER_3
              : WEBSITE_SLIDER_IMAGE?.SLIDER_3
          }
        ></Box>
        <Box
          component={"img"}
          src={
            isMobile
              ? MOBILE_SLIDER_IMAGE?.SLIDER_4
              : WEBSITE_SLIDER_IMAGE?.SLIDER_4
          }
        ></Box>
        <Box
          component={"img"}
          src={
            isMobile
              ? MOBILE_SLIDER_IMAGE?.SLIDER_5
              : WEBSITE_SLIDER_IMAGE?.SLIDER_5
          }
        ></Box>
        <Box
          component={"img"}
          src={
            isMobile
              ? MOBILE_SLIDER_IMAGE?.SLIDER_6
              : WEBSITE_SLIDER_IMAGE?.SLIDER_6
          }
        ></Box>
      </Slider>
    </Box>
  )
}
