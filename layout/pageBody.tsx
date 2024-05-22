import { Box, keyframes, Stack, Typography } from "@mui/material"
import React, { Fragment } from "react"
import { renderComponentUtility } from "@/components/renderComponent"

export default function PageBody({ items }: any) {
    
  const animationKeyFrame = keyframes`
    100% {
        offset-distance: 100%;

    }
    `
  return (
    <Stack width={"100%"}>
      {
                items?.map((item: any, index: number) =>
                    <Fragment key={`component-${index}`}>
                        {renderComponentUtility(item)}
                    </Fragment>)
            }
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
    </Stack>
  )
}
