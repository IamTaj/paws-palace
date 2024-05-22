// import { DesktopPxToVw, MobilePxToVw } from "@/utils/pxToVw";
import { DesktopPxToVw, MobilePxToVw } from "@/utils/view-port-calculator";
import { Stack, styled } from "@mui/material";

export const TitleStack = styled(Stack)(() => ({
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    rowGap: DesktopPxToVw(10),
    "@media (max-width: 640px)": {
        rowGap: MobilePxToVw(10),
    },
}))