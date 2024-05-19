import React from 'react'
import gal_1 from './../images/gal-1.jpg'
import gal_2 from './../images/gal-2.jpg'
import gal_3 from './../images/gal-3.jpg'
import gal_4 from './../images/gal-4.jpg'
import gal_5 from './../images/gal-5.jpg'


export const Gallery = () => {
  return (
    <div id='gallery' className='max-w-[1140px] m-auto w-full px-4 py-16'>
        <h2 className='text-center text-gray-700 p-4'>Gallery</h2>
        <div className='grid sm:grid-cols-5 gap-4'>
            <div className='sm:col-span-3 col-span-2 row-span-2'>
                <img className='w-full h-full object-cover' src={gal_1}  />
            </div>
            <div>
                <img className='w-full h-full object-cover' src={gal_2}  />
            </div>
            <div>
                <img className='w-full h-full object-cover' src={gal_3}  />
            </div>
            <div>
                <img className='w-full h-full object-cover' src={gal_4}  />
            </div>
            <div>
                <img className='w-full h-full object-cover' src={gal_5}  />
            </div>
        </div>
    </div>
  )
}
