import React from 'react'
import { useMobileCheck } from '@/utils/mobile-viewport-check'
import renderCardVariant from './renderCardVariant'

export default function Card(props: any) {
  const {
    variant,
    largeVariant,
    ...data
  } = props
  const isMobile = useMobileCheck()
  const cardVariant = isMobile ? variant : largeVariant

  return (
    <>
      {cardVariant && renderCardVariant(cardVariant, data)}
    </>
  )
}
