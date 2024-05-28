import { urlFor } from "@/lib-sanity"
import { useMobileCheck } from "@/utils/mobile-viewport-check"
import { Box, Collapse, Stack, Typography } from "@mui/material"
import React from "react"

export default function CardWithProductDeatilsMSite({
  brandName,
  images,
  name,
  price,
  index,
  activeIndex,
}: any) {
  const isMobile = useMobileCheck()

  return (
    <Box>
      <Typography
      className="hide-box"
        sx={{
          fontWeight: 700,
          letterSpacing: "-0.03em",
          color: "#FFFFFF",
          background: "#ff3f32",
          borderRadius: "0px 0px 5px",
          padding: "7px 5px 5px",
          zIndex: 2,
          position: "absolute",
          left: isMobile ? "0px" : "14px",
          top: isMobile ? "0px" : "14px",
        }}
      >{`UPTO ${price?.discount?.percent}% OFF`}</Typography>
      <Box
        component={"img"}
        width={"100%"}
        src={urlFor(images?.[0]?.asset?._ref).url()}
        alt={"product-card"}
      />
      <Collapse in={activeIndex === index} timeout={1000}>
        <Typography
          className="hide-box"
          variant={isMobile ? "m-body-m" : "body-m"}
          sx={{
            fontWeight: 700,
            textTransform: "capitalize",
            borderRadius: "0px 0px 0 0",
            letterSpacing: "0.03em",
          }}
        >
          {name}
        </Typography>
        <Stack flexDirection={"row"} gap={1} className="hide-box">
          <Typography
            variant={isMobile ? "m-body-m" : "body-m"}
            sx={{
              fontWeight: 700,
              lineHeight: "30px",
              letterSpacing: "0.01em",
              color: "#BE1706",
              paddingTop: "7px",
            }}
          >{`₹ ${price?.finalPrice?.value}`}</Typography>
          <Typography
            variant={isMobile ? "m-body-xs" : "body-xs"}
            sx={{
              lineHeight: "30px",
              letterSpacing: "0.01em",
              paddingTop: "7px",
            }}
          >{`onwards`}</Typography>
        </Stack>
      </Collapse>
    </Box>
  )
}
