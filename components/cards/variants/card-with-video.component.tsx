import { getVideoUrl } from "@/lib-sanity"
import { theme } from "@/lib/theme"
import { useMobileCheck } from "@/utils/mobile-viewport-check"
import { useTimeLeftUntilEndOfDay } from "@/utils/timer"
import { DesktopPxToVw, MobilePxToVw } from "@/utils/view-port-calculator"
import { Box, Divider, Stack, Typography } from "@mui/material"
import React, { useEffect, useState } from "react"

export default function CardWithVideoComponent({ video, identifier }: any) {
  const [muteVideo, setMuteVideo] = useState<boolean>(true)
  const isMobile = useMobileCheck()
  const controlVolume = () =>
    muteVideo === true ? setMuteVideo(false) : setMuteVideo(true)
  const cmsVideo = video?.asset

  const { hoursLeft, minutesLeft, secondsLeft } = useTimeLeftUntilEndOfDay()

  return (
    <Box py={2}>
      <video
        width={"100%"}
        loop={true}
        playsInline
        autoPlay={true}
        muted={muteVideo}
      >
        {cmsVideo && (
          <source src={cmsVideo && getVideoUrl(cmsVideo)} type="video/mp4" />
        )}
      </video>
      {identifier === "dealTrackerVariant" && (
        <Stack>
          <Box
            sx={{
              p: "0vw 12vw 0vw",
            }}
          >
            <Stack
              sx={{
                margin: "0vw auto 27px",
                boxShadow: "3.84013px 3.84013px 16.3206px rgb(0 0 0 / 25%)",
                padding: " 10px 20px",
                borderRadius: "10px",
                background: theme?.palette?.neuPalette?.hexOne,
              }}
            >
              <Stack
                sx={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 2.5,
                  margin: "0vw auto",
                }}
              >
                <Box>
                  <Divider
                    sx={{
                      borderWidth: "0.05em",
                      width: "5vw",
                      color: `${theme?.palette?.neuPalette?.hexEleven} !important`,
                      borderColor: "unset !important",
                    }}
                  />
                </Box>
                <Typography
                  variant={isMobile ? "m-body-s" : "body-s"}
                  sx={{ fontWeight: 600 }}
                >
                  {"Deal Ends In"}
                </Typography>
                <Box>
                  <Divider
                    sx={{
                      borderWidth: "0.05em",
                      width: "5vw",
                      color: `${theme?.palette?.neuPalette?.hexEleven} !important`,
                      borderColor: "unset !important",
                    }}
                  />
                </Box>
              </Stack>
              <Stack
                sx={{
                  flexDirection: "row",
                  gap: 3,
                  margin: "1vw auto",
                }}
              >
                <Stack alignItems={"center"}>
                  <Box
                    sx={{
                      background: "#C9F227",
                      padding: 2,
                      borderRadius: "14px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontWeight: 600,
                        fontSize: isMobile
                          ? MobilePxToVw(30)
                          : DesktopPxToVw(30),
                      }}
                      variant={isMobile ? "m-body-l" : "body-l"}
                    >
                      {hoursLeft}
                    </Typography>
                  </Box>
                  <Typography variant={isMobile ? "m-body-s" : "body-s"}>
                    {secondsLeft < 1 ? "Hour" : "Hours"}
                  </Typography>
                </Stack>

                <Stack alignItems={"center"}>
                  <Box
                    sx={{
                      background: "#C9F227",
                      padding: 2,
                      borderRadius: "14px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontWeight: 600,
                        fontSize: isMobile
                          ? MobilePxToVw(30)
                          : DesktopPxToVw(30),
                      }}
                      variant={isMobile ? "m-body-l" : "body-l"}
                    >
                      {minutesLeft < 10 ? `0${minutesLeft}` : minutesLeft}
                    </Typography>
                  </Box>
                  <Typography variant={isMobile ? "m-body-s" : "body-s"}>
                    {secondsLeft < 1 ? "Minute" : "Minutes"}
                  </Typography>
                </Stack>

                <Stack alignItems={"center"}>
                  <Box
                    sx={{
                      background: "#C9F227",
                      padding: 2,
                      borderRadius: "14px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontWeight: 600,
                        fontSize: isMobile
                          ? MobilePxToVw(30)
                          : DesktopPxToVw(30),
                      }}
                      variant={isMobile ? "m-body-l" : "body-l"}
                    >
                      {secondsLeft < 10 ? `0${secondsLeft}` : secondsLeft}
                    </Typography>
                  </Box>
                  <Typography variant={isMobile ? "m-body-s" : "body-s"}>
                    {secondsLeft < 1 ? "Second" : "Seconds"}
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      )}
    </Box>
  )
}
