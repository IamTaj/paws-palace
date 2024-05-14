import { Box, Modal, Stack, Typography } from "@mui/material"
import React from "react"
import CloseIcon from "@mui/icons-material/Close"
import { theme } from "@/lib/theme"
import { useMobileCheck } from "@/utils/mobile-viewport-check"

export default function BasicModal({
  open,
  handleClose,
  style,
  Component,
  closeButton,
  top,
}: any) {
  const isMobile = useMobileCheck()
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box style={style} height={"100%"}>
          <Stack
            className="hehe"
            sx={{
              width: "100%",
              height: "100%",
              justifyContent: "center",
              alignItems: isMobile ? "unset" : "center",
              overflow: "scroll",
            }}
          >
            <Box
              onClick={handleClose}
              sx={{
                position: "absolute",
                top: "10%",
                right: "10%",
                cursor: "pointer",
              }}
            >
              <CloseIcon
                sx={{
                  color: closeButton ? closeButton : "black",
                  fontSize: "40px",
                }}
              />
            </Box>
            <Box sx={{ position: "relative", top: "6vw" }}>
              <Box sx={{ color: "white" }}>{Component}</Box>
            </Box>
          </Stack>
        </Box>
      </Modal>
    </>
  )
}
