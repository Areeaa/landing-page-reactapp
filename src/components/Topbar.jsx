import React from 'react'
import Logo from './../images/logo.png'
import { AiFillPhone, AiOutlineClockCircle } from 'react-icons/ai';


const Topbar = ()=> {
  return (
    <div className='flex justify-between items-center px-4 py-2'>
        <div className='w-[190px] flex items-center'> 
            <img src={Logo} />
        </div>
        <div className='flex'>
            <div className='hidden md:flex items-center px-6'>
                <AiOutlineClockCircle size={20} className='mr-2 text-[var(--primary-dark)]'/>
                <p className='text-sm text-gray-700'>9AM - 5PM</p>
            </div>
            <div className='hidden md:flex items-center px-6'>
                <AiFillPhone size={20} className='mr-2 text-[var(--primary-dark)]'/>
                <p className='text-sm text-gray-700'>666-666-666</p>
            </div>
            <button>Mulai Jelajahi</button>
        </div>
    </div>
  )
}

export default Topbar