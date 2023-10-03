import React from 'react'
import ButtonDark from './ButtonDark'

export default function JobCards(props) {
  return (
    <div className='border py-5 px-10 border-accent w-full mb-5'>
        <h3 className='font-medium text-xl mb-3'>Graphic Designer</h3>
        <p className='w-1/2 mb-5'>Lorem ipsum dolor sit amet consectetur. Ut egestas cras dui neque sagittis id viverra sed egestas. Avestibulum vel lectus lectus sit praesent erat vestibulum. Velit </p>
        <div className="jobInfo flex justify-between items-center">
            <div className="info flex gap-5">
                <p className='font-medium'>📍{props.location}</p>
                <p className='font-medium'>📅{props.days}</p>
                <p className='font-medium'>🕥{props.hours}</p>
                <p className='font-medium'>💵{props.salary}</p>
            </div>
            <ButtonDark text='Apply'/>
        </div>
    </div>
  )
}
