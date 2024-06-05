/* eslint-disable react/jsx-props-no-spreading */
import React, { memo, useRef, useLayoutEffect } from "react"
import { useMobileCheck } from "@/utils/mobile-viewport-check"
import usePrevious from "./usePrevious"
import { TextFieldColor } from "../styles/common-style"

export interface SingleOTPInputProps {
  focus?: boolean
  autoFocus?: boolean
  disabled: boolean | undefined
  value: string
  onFocus: any
  onChange: any
  onKeyDown: any
  onBlur: any
  onPaste: any
  style: any
  className: any
  type: any
}

export function SingleOTPInputComponent(props: SingleOTPInputProps) {
  const isMobile = useMobileCheck()
  const { focus, autoFocus, ...rest } = props
  const inputRef = useRef<HTMLInputElement>(null)
  const prevFocus = usePrevious(!!focus)
  useLayoutEffect(() => {
    if (inputRef.current) {
      if (focus && autoFocus) {
        inputRef.current.focus()
        inputRef.current.click()
      }
      if (focus && autoFocus && focus !== prevFocus) {
        inputRef.current.focus()
        inputRef.current.select()
        inputRef.current.click()
      }
    }
  }, [autoFocus, focus, prevFocus])

  return (
    <>
      <TextFieldColor
        autoComplete="off"
        $isMobile={isMobile}
        inputRef={inputRef}
        {...rest}
        type="tel"
      />
    </>
  )
}

const SingleOTPInput = memo(SingleOTPInputComponent)
export default SingleOTPInput
