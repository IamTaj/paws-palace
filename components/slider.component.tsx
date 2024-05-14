import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Box } from "@mui/material"
import { useMobileCheck } from "@/utils/mobile-viewport-check"
import { renderComponentUtility } from "./renderComponent"

interface GroupInterface {
  items: any[]
}

export default function SliderComponent({ items }: GroupInterface) {
  const isNotSingle = items?.length > 1

  const isMobile = useMobileCheck()
  var settings = {
    className: "center",
    centerMode: true,
    arrows: false,
    centerPadding: isMobile ? "0vw" : "200px",
    slidesToShow: 1,
    dots: false,
    speed: 100,
    autoplaySpeed: 2000,
    autoplay: isNotSingle,
    infinite: isNotSingle,
    swipeToSlide: isNotSingle,
    initialSlide: 0,
    slidesToScroll: 1,
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
        {items?.map((item: any, index: any) => (
          <React.Fragment key={`banner-${index}`}>
            {renderComponentUtility(item)}
          </React.Fragment>
        ))}
      </Slider>
    </Box>
  )
}
