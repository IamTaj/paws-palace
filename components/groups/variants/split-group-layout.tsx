import { renderComponentUtility } from "@/components/renderComponent"
import { theme } from "@/lib/theme"
import { Box, Grid, keyframes, Typography } from "@mui/material"
import React, { Fragment } from "react"

export default function SplitGroupLayoutComponent({ items }: any) {
  const isNotColor = items?.[1]?.largeVariant === "groupWithHalfWidthSlider"

  const animationKeyFrame = keyframes`
    100% {
        offset-distance: 100%;

    }
    `
  return (
    <Box
      sx={{
        background: isNotColor && theme?.palette?.neuPalette?.hexThirtyFour,
        padding: "2vw 0vw 8vw",
        marginTop: "4vw",
      }}
    >
      <Grid container spacing={2}>
        {items?.map((item: any, index: any) => (
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <Fragment>{renderComponentUtility(item)}</Fragment>
          </Grid>
        ))}
      </Grid>
      {/* <Box
        sx={{
          my: "15vw",
          border: "1px solid red",
          position: "relative",
          width: "100vw",
          height: "100vw",
          margin: "20px",
        }}
      >
        <Box
          sx={{
            background: "red",
            width: "4vw",
            height: "4vw",
            position: "absolute",
            zIndex: 1,
            animation: `${animationKeyFrame} 8s 3`,
            animationIterationCount: "infinite",
            offsetPath: `path(
               "M 150 400 C 150 250 700 250 700 400 L 700 500 C 700 600 150 600 150 500 L 150 400 Z"
             )`,
            offsetRotate: "auto",
            animationDelay: "2s",
          }}
        />
        <Box
          sx={{
            background: "blue",
            width: "4vw",
            height: "4vw",
            position: "absolute",
            zIndex: 1,
            animation: `${animationKeyFrame} 8s 3`,
            animationIterationCount: "infinite",
            offsetPath: `path(
               "M 150 400 C 150 250 700 250 700 400 L 700 500 C 700 600 150 600 150 500 L 150 400 Z"
             )`,
            offsetRotate: "auto",
            animationDelay: "1s",
          }}
        />
        <Box
          sx={{
            background: "green",
            width: "4vw",
            height: "4vw",
            position: "absolute",
            zIndex: 1,
            animation: `${animationKeyFrame} 8s 3`,
            animationIterationCount: "infinite",
            offsetPath: `path(
               "M 150 400 C 150 250 700 250 700 400 L 700 500 C 700 600 150 600 150 500 L 150 400 Z"
             )`,
            offsetRotate: "auto",
            animationDelay: "3s",
          }}
        />
        <Box
          sx={{
            background: "yellow",
            width: "4vw",
            height: "4vw",
            position: "absolute",
            zIndex: 1,
            animation: `${animationKeyFrame} 8s 3`,
            animationIterationCount: "infinite",
            offsetPath: `path(
               "M 150 400 C 150 250 700 250 700 400 L 700 500 C 700 600 150 600 150 500 L 150 400 Z"
             )`,
            offsetRotate: "auto",
            animationDelay: "4s",
          }}
        />
        <Box
          sx={{
            background: "pink",
            width: "4vw",
            height: "4vw",
            position: "absolute",
            zIndex: 1,
            animation: `${animationKeyFrame} 8s`,
            animationIterationCount: "infinite",
            offsetPath: `path(
               "M 150 400 C 150 250 700 250 700 400 L 700 500 C 700 600 150 600 150 500 L 150 400 Z"
             )`,
            offsetRotate: "auto",
          }}
        />
        <Typography
          sx={{
            position: "relative",
            zIndex: 1,
            top: "20vw",
            left: "12vw",
          }}
        >
          {"hehe"}
        </Typography>
      </Box> */}
    </Box>
  )
}
