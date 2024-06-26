import React from 'react'
import bg_con from './../images/bg_con.jpg'

export const Contact = () => {
  return (
    <div id='contact' className='max-w-[1140px] m-auto w-full p-4 py-16'>
        <h2 className='text-center text-gray-700'>Hubungi Kami</h2>
        <p className='text-center text-gray-700 py-2'>Senantiasa Menemani</p>
        <div className='grid md:grid-cols-2'>
            <img className='w-full md:h-full object-cover p-2 max-h-[500px] h-[200px]' src={bg_con} />
            <form>
                <div className='grid grid-cols-2'>
                    <input className='border m-2 p-2' type="text" placeholder='First' />
                    <input className='border m-2 p-2' type="text" placeholder='Last' />
                    <input className='border m-2 p-2' type="email" placeholder='Email' />
                    <input className='border m-2 p-2' type="tel" placeholder='Phone'/>
                    <input className='border col-span-2 p-2 m-2' type="text" placeholder='address'/>
                    <textarea className='border col-span-2 m-2 p-2' cols="30" rows="10"></textarea>
                    <button className='col-span-2 m-2'>Submit</button>
                </div>
            </form>
        </div>
    </div>
  )
}
