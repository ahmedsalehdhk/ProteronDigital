import React from 'react'

export default function ButtonDark(props) {
  return (
    <div>
      <button className='bg-dark text-light font-medium capitalize rounded-full border-2 border-dark px-6 py-2.5 md:px-8'>{props.text}</button>
    </div>
  )
}

//px-8 py-2.5