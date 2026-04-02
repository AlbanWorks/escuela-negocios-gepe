import React from 'react'

const LucideSVG = ({stroke, size, slim, children}) => {
  return (
   <svg 
		xmlns="http://www.w3.org/2000/svg" 
		width={size}
		height={size}
		viewBox="0 0 24 24" 
		fill="none" 
		stroke={stroke}
		strokeWidth={slim ? "1.5" : "2"} 
		strokeLinecap="round" 
		strokeLinejoin="round" 
	>
		{children}
	</svg>
  )
}

export default LucideSVG