import { Drawer } from "@mui/material"
import React from "react"

export default function BasicDrawer({
  anchor,
  open,
  handleClose,
  Component,
}: any) {
  return (
    <>
      <Drawer anchor={anchor} open={open} onClose={handleClose}>
        {Component}
      </Drawer>
    </>
  )
}
