import React, { useState } from "react"
import { Grow, InputAdornment, Stack, TextField } from "@mui/material"
import ModeEditIcon from "@mui/icons-material/ModeEdit"
import { theme } from "@/lib/theme"

export default function CustomUpdateTextField({
  name,
  value,
  handleChangeForm,
  showButton = true,
}: any) {
  const [showEditIcon, setShowEditIcon] = useState<boolean>(false)
  const [disable, setDisable] = useState<boolean>(true)
  return (
    <Stack
      sx={{ justifyContent: "center" }}
      onMouseEnter={() => setShowEditIcon(true)}
      onMouseLeave={() => setShowEditIcon(false)}
    >
      <TextField
        id="standard-basic"
        value={value}
        name={name}
        disabled={disable}
        onChange={handleChangeForm}
        variant="standard"
        fullWidth
        InputProps={{
          disableUnderline: true,
          endAdornment: (
            <InputAdornment position="start">
              <Grow
                in={(showEditIcon && showButton) || !disable}
                style={{ transformOrigin: "0 0 0", animation: "ease-in-out" }}
                timeout={400}
              >
                <ModeEditIcon
                  sx={{
                    mr: "2vw",
                    color: !disable
                      ? theme?.palette?.neuPalette?.hexThirtyThree
                      : "initial",
                  }}
                  onClick={() => setDisable(false)}
                />
              </Grow>
            </InputAdornment>
          ),
        }}
        sx={{ position: "absolute" }}
      />
    </Stack>
    // </ClickAwayListener>
  )
}
