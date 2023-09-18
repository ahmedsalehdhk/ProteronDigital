import React from 'react'
import arrowLight from '../assets/svg/arrow-light.svg'

export default function ButtonDark(props) {
  return (
    <div>
      <button className='bg-dark text-light font-medium capitalize rounded-full border-2 border-dark flex justify-items-center items-center gap-2 min-w-min px-6 py-2.5 md:px-8 whitespace-nowrap'>{props.text}<img className='w-5' src={arrowLight} alt="Proteron Digital" /></button>
      
    </div>
  )
}

//px-8 py-2.5