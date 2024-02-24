import { DesktopPxToVw } from "@/utils/view-port-calculator"
import { Box, Button, Divider, Grid, Stack, Typography } from "@mui/material"
import Image from "next/image"
import React from "react"
import { ICONS } from "./CONSTANT"
import InstagramIcon from "@mui/icons-material/Instagram"
import FacebookIcon from "@mui/icons-material/Facebook"
import YouTubeIcon from "@mui/icons-material/YouTube"
import XIcon from "@mui/icons-material/X"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import { FooterTextField } from "./styles/footer"
import PetsIcon from "@mui/icons-material/Pets"
import { useMobileCheck } from "@/utils/mobile-viewport-check"
import { theme } from "@/lib/theme"
import footerData from "../mock-data/footer.json"

export default function Footer() {
  const isMobileView = useMobileCheck()
  return (
    <>
      <Box sx={{ padding: isMobileView ? "80px 15px 30px" : "90px" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={3} xl={3} lg={3}>
            <Box>
              <Typography
                variant="body-s"
                sx={{ fontWeight: 700, marginBottom: DesktopPxToVw(20) }}
              >
                {"ONLINE SHOPPING"}
              </Typography>
              <Stack
                sx={{
                  mt: "20px",
                  flexDirection: isMobileView ? "row" : "column",
                  gap: "5px",
                  flexWrap: "wrap",
                }}
              >
                {footerData?.[0]?.[0]?.map((item: any, index: number) => (
                  <>
                    <Typography>{item?.value}</Typography>
                    {isMobileView &&
                      index + 1 < footerData?.[0]?.[0]?.length && (
                        <Divider
                          orientation="vertical"
                          variant="middle"
                          flexItem
                          sx={{
                            borderColor:
                              theme?.palette?.neuPalette?.hexSeventeen,
                            margin: "5px 0px",
                          }}
                        />
                      )}
                  </>
                ))}
              </Stack>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={3} xl={3} lg={3}>
            <Box>
              <Typography
                variant="body-s"
                sx={{ fontWeight: 700, marginBottom: DesktopPxToVw(20) }}
              >
                {"EXPLORE"}
              </Typography>
              <Stack
                sx={{
                  mt: "20px",
                  flexDirection: isMobileView ? "row" : "column",
                  gap: "5px",
                }}
              >
                {footerData?.[0]?.[1]?.map((item: any, index: number) => (
                  <>
                    <Typography>{item?.value}</Typography>
                    {isMobileView &&
                      index + 1 < footerData?.[0]?.[1]?.length && (
                        <Divider
                          orientation="vertical"
                          variant="middle"
                          flexItem
                          sx={{
                            borderColor:
                              theme?.palette?.neuPalette?.hexSeventeen,
                            margin: "5px 0px",
                          }}
                        />
                      )}
                  </>
                ))}
              </Stack>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={3} xl={3} lg={3}>
            <Box>
              <Typography
                variant="body-s"
                sx={{ fontWeight: 700, marginBottom: DesktopPxToVw(20) }}
              >
                {"QUICK LINKS"}
              </Typography>
              <Stack
                sx={{
                  mt: "20px",
                  flexDirection: isMobileView ? "row" : "column",
                  gap: "5px",
                  flexWrap: "wrap",
                }}
              >
                {footerData?.[0]?.[2]?.map((item: any, index: number) => (
                  <>
                    <Typography>{item?.value}</Typography>
                    {isMobileView &&
                      index + 1 < footerData?.[0]?.[2]?.length && (
                        <Divider
                          orientation="vertical"
                          variant="middle"
                          flexItem
                          sx={{
                            borderColor:
                              theme?.palette?.neuPalette?.hexSeventeen,
                            margin: "5px 0px",
                          }}
                        />
                      )}
                  </>
                ))}
              </Stack>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={3} xl={3} lg={3}>
            <Box mt={isMobileView ? "15px" : "0px"}>
              <Box>
                <Typography
                  variant="body-s"
                  sx={{ fontWeight: 700, marginBottom: DesktopPxToVw(20) }}
                >
                  {"EXPERIENCE PAWS PALACE APP ON MOBILE"}
                </Typography>
                <Stack flexDirection={"row"} alignItems={"center"}>
                  <Image
                    alt="play-store"
                    src={ICONS?.GOOGLE_PLAY_BADGE}
                    width={isMobileView ? "190" : "180"}
                    height={isMobileView ? "90" : "70"}
                    style={{ marginLeft: isMobileView ? "-15px" : "0px" }}
                  />
                  <Image
                    alt="app-store"
                    src={ICONS?.APP_STORE_BADGE}
                    width={isMobileView ? "150" : "160"}
                    height={isMobileView ? "60" : "47"}
                  />
                </Stack>
              </Box>
              <Box>
                <Typography variant="body-s" sx={{ fontWeight: 700 }}>
                  {"FOLLOW US"}
                </Typography>
                <Stack flexDirection={"row"} gap={2} mt={"10px"}>
                  <InstagramIcon fontSize="large" />
                  <FacebookIcon fontSize="large" />
                  <YouTubeIcon fontSize="large" />
                  <XIcon fontSize="large" />
                  <LinkedInIcon fontSize="large" />
                </Stack>
                <Stack mt={5}>
                  <Typography
                    variant="body-xxxs"
                    sx={{ opacity: 0.5, letterSpacing: "0.05em" }}
                  >
                    {"SUBSCRIBE OUR NEWSLETTER"}
                  </Typography>
                  <Stack
                    flexDirection={"row"}
                    gap={"10px"}
                    alignItems={"end"}
                    mt={"10px"}
                  >
                    <FooterTextField
                      variant="standard"
                      label={"Enter your email"}
                    />
                    <Button variant="contained">
                      <Typography>{"SUBSCRIBE"}</Typography>
                    </Button>
                  </Stack>
                </Stack>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} sm={12} md={3} xl={3} lg={3}>
            <Stack gap={3} mt={isMobileView ? "30px" : "0px"}>
              <Stack alignContent={"center"} gap={1} flexDirection={"row"}>
                <Typography variant="body-s" sx={{ fontWeight: 700 }}>
                  {"Paws Palace Head Office"}
                </Typography>
                <Box>
                  <PetsIcon fontSize="small" />
                </Box>
              </Stack>
              <Typography>
                {
                  "1335, 11th Cross Rd, Stage 3, Indiranagar, Bengaluru, Karnataka 560038"
                }
              </Typography>
            </Stack>
          </Grid>
        </Grid>
        <Stack alignItems={"center"} mt={"52px"}>
          <Typography variant="body-xxxs">
            {"COPYRIGHT © SK TAJUDDIN ALI"}
          </Typography>
        </Stack>
      </Box>
    </>
  )
}
