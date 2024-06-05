import { theme } from "@/lib/theme";
import { transientProps } from "@/utils/transientProps";
import { DesktopPxToVw } from "@/utils/view-port-calculator";
import { Box, styled, TextField } from "@mui/material";

export const TextFieldColor = styled(
    TextField,
    transientProps
  )<{ $isMobile: boolean }>(({ $isMobile }) => ({
    height: DesktopPxToVw(80),
    width: DesktopPxToVw(60),
    margin: "0vw 0.621vw",
    textAlign: "center",
    "@media (max-width: 860px)": {
      width: "40px",
    },
    "@media (max-height: 400px)": {
      width: "3vw",
    },
    "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
      display: "none",
    },
    "& input[type=number]": {
      MozAppearance: "textfield",
    },
    "&.MuiInputBase-root.MuiOutlinedInput-root": {
      borderRadius: "10px",
    },
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: theme?.palette?.neuPalette?.hexEleven,
      },
    },
    "& .MuiInputBase-root.MuiOutlinedInput-root": {
      textAlign: "center",
      borderRadius: "10px",
    },
    "& .MuiInputBase-input.MuiOutlinedInput-input": {
      padding: $isMobile ? "0px 0px" : "0.964vw 0.729vw",
      textAlign: "center",
      fontSize: "1.563vw",
      fontWeight: 300,
      "@media (max-width: 640px)": {
        width: "9.685vw",
        height: "12.500vw",
        fontSize: "3.750vw !important",
      },
    },
    "@media (max-width: 640px)": {
      width: "10.2vw",
      height: "13vw",
      marginRight: "2vw",
    },
  }))

  export const StyledBox = styled(Box)(() => ({
    display: "flex",
    alignItems: "center",
    textAlign: "center",
  }))

  export const OtpBox = styled(Box)(() => ({
    "& > :not(style)": {
      margin: "1%",
      display: "flex",
    },
  }))