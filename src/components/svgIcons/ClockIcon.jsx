import React from 'react'
import LucideSVG from './LucideSVG'

const ClockIcon = ({stroke, size, slim}) => {
  return (
   	<LucideSVG stroke={stroke} size={size} slim={slim}>
        <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
    </LucideSVG>
  )
}

export default ClockIcon


