import { ICONS } from "@/components/CONSTANT"
import { theme } from "@/lib/theme"
import { useMobileCheck } from "@/utils/mobile-viewport-check"
import { Box, Button, Stack, Typography } from "@mui/material"
import React, { useEffect, useState } from "react"
import ContentCopyIcon from "@mui/icons-material/ContentCopy"
import ShareIcon from "@mui/icons-material/Share"

export default function InviteFriendTab({ tabTitle }: any) {
  const isMobile = useMobileCheck()
  const [linkCopy, setLinkCopy] = useState<boolean>(false)
  const referalCode = `http://paws-palace/${global?.window?.localStorage?.getItem(
    "firstName"
  )}-${global?.window?.localStorage?.getItem("lastName")}`

  useEffect(() => {
    setLinkCopy(false)
  }, [])
  return (
    <Box>
      <Stack>
        <Stack sx={{ alignItems: "center", pb: 5 }}>
          <Typography
            variant={isMobile ? "m-heading-s" : "heading-s"}
            sx={{ letterSpacing: "0.05em" }}
          >
            {tabTitle}
          </Typography>
        </Stack>
        <Box
          component={"img"}
          width={"100%"}
          src={ICONS?.REFERAL_IMAGE}
          alt={"product-card"}
        />
        <Stack pt={4}>
          <h2>Terms and Conditions</h2>
          <ul>
            <li>
              {" "}
              Your referral code can only be used by a new customers and cannot
              be clubbed together with other discount offers
            </li>
            <li>
              {" "}
              Your offer will become active 24 hours after your friend completes
              a purchase
            </li>
          </ul>
        </Stack>
        <Stack flexDirection={"row"} gap={4} justifyContent={"center"} pt={2}>
          <Button
            onClick={() => {
              navigator.clipboard.writeText(referalCode)
              setLinkCopy(true)
            }}
            sx={{
              border: ` 1px solid ${theme?.palette?.neuPalette?.hexThirtyThree}`,

              color: theme?.palette?.neuPalette?.hexThirtyThree,
              width: "10vw",
              borderRadius: "4px",
              gap: "5px",
              ":hover": {
                background: theme?.palette?.neuPalette?.hexThirtyThree,
                color: theme?.palette?.neuPalette?.hexOne,
              },
            }}
          >
            <Box>
              <ContentCopyIcon fontSize="small" />
            </Box>
            {linkCopy ? "Copied" : "Copy Link"}
          </Button>
          <Button
            sx={{
              border: ` 1px solid ${theme?.palette?.neuPalette?.hexThirtyThree}`,
              alignItems: "center",
              color: theme?.palette?.neuPalette?.hexThirtyThree,
              width: "10vw",
              borderRadius: "4px",
              gap: "5px",
              ":hover": {
                background: theme?.palette?.neuPalette?.hexThirtyThree,
                color: theme?.palette?.neuPalette?.hexOne,
              },
            }}
          >
            <Box>
              <ShareIcon fontSize="small" />
            </Box>
            <Box>Share</Box>
          </Button>
        </Stack>
      </Stack>
    </Box>
  )
}
