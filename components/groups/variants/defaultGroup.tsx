import { renderComponentUtility } from "@/components/renderComponent"
import React, { Fragment } from "react"

interface GroupInterface {
  items: any[]
}

export default function DefaultGroup({ items }: GroupInterface) {
  return (
    <>
      {" "}
      {items?.map((item: any, index: any) => (
        <Fragment>{renderComponentUtility(item)}</Fragment>
      ))}
    </>
  )
}
