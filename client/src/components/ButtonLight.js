import React from 'react'
import arrowDark from '../assets/svg/arrow-dark.svg'

export default function ButtonLight(props) {
  return (
    <div>
      <button className='bg-light text-dark font-medium capitalize rounded-full border-2 border-dark flex justify-items-center items-center gap-2 min-w-min px-6 py-2.5 md:px-8'>{props.text}<img className='w-5' src={arrowDark} alt="Proteron Digital" /></button>
    </div>
  )
}
