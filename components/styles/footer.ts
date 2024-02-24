import { theme } from "@/lib/theme";
import { TextField, styled } from "@mui/material";

export const FooterTextField = styled(TextField)(() => ({
    width: "100%",
    "& input": {
      fontSize: "24px",
      "@media (max-width: 640px)": {
        fontSize: "24px",
      },
    },
    "& .MuiInputLabel-root": {
      opacity: 0.5,
      fontWeight: 300,
      color: theme?.palette?.neuPalette?.hexEleven,
      lineHeight: "150%",
      fontSize: "18px",
      fontStyle: "normal",
      letterSpacing: "-0.03em",
    },
    "& label.Mui-focused": {
      color: theme?.palette?.neuPalette?.hexTwelve,
    },
    "& .MuiInput-underline:before": {
      borderBottomColor: theme?.palette?.neuPalette?.hexTwelve,
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: theme?.palette?.neuPalette?.hexEleven,
      },
    },

  }))