import React from 'react'
import Logo from './../images/logo.png'

export const Footer = () => {
  return (
    <div className='max-w-[1140px] py-8 m-auto border-t-4'>
        <div className='flex justify-center items-center'>
            <img className='w-[180px]' src={Logo}/>
        </div>
        
    </div>
  )
}
