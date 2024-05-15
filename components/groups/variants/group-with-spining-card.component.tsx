import { keyframes } from "@emotion/react"
import { Box } from "@mui/system"
import React from "react"

export default function GroupWithSpiningCardsComponent({ items }: any) {
  const animationKeyFrame = keyframes`
    0% {
        offset-distance: 100%;
    },
    100% {
        offset-distance: 0%;
    }
    `

  return (
    <>
      {/* <Box
        sx={{
          position: "relative",
          height: "40vw",
        }}
      >
        <Box sx={{ position: "absolute", top: "-10vw" }}>
          {items?.map((item: any, index: any) => (
            <Box
              sx={{
                width: "2vw",
                height: "2vw",
                position: "absolute",
                zIndex: 1,
                animation: `${animationKeyFrame} linear 8s `,
                animationIterationCount: "infinite",
                offsetPath: `path(
                      "M 150 400 C 150 250 700 250 700 400 L 700 500 C 700 600 150 600 150 500 L 150 400 Z"
                    )`,
                offsetRotate: "auto",
                animationDelay: `${index + 1}s`,
              }}
            >
              {renderComponentUtility(item)}
            </Box>
          ))}
        </Box> */}
        {/* <Box>
        {"hehe"}
        </Box> */}
    </>
  )
}
