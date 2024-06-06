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
      {items?.map((item: any, index: number) => (
        <Fragment key={`component-${index}`}>
          {renderComponentUtility(item)}
        </Fragment>
      ))}
    </Stack>
  )
}
