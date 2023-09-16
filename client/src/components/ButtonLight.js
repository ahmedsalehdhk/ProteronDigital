import React from 'react'

export default function ButtonLight(props) {
  return (
    <div>
      <button className='bg-light text-dark font-medium capitalize rounded-full border-2 border-dark px-6 py-2.5 md:px-8'>{props.text}</button>
    </div>
  )
}
