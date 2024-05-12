import React from 'react'
import Slider from 'react-slick'
import { Box } from '@mui/material'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { renderComponentUtility } from '@/components/renderComponent';
interface GroupInterface {
    items: any[]
}
export default function GroupBannerCarousel({ items }: GroupInterface) {
    const isNotSingle = items?.length > 1
    const settings = {
        arrows: false,
        infinite: isNotSingle,
        autoplay: isNotSingle,
        speed: 2000,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        swipeToSlide: isNotSingle,
        initialSlide: 0,
        slidesToShow: 1,
        slidesToScroll: 1
    }
    return (
        <Box sx={{ backgroundColor: "#000" }}>
            <Slider {...settings}>
                {
                    items?.map((item: any, index: any) =>
                        <React.Fragment key={`banner-${index}`}>
                            {renderComponentUtility(item)}
                        </React.Fragment>)
                }
            </Slider>
        </Box>
    )
}
