import React from 'react'
import resort from './../images/resort.jpg'
import mount from './../images/mountain.jpg'
import beach from './../images/beach.jpg'

const Activities=()=> {
  return (
    <div className='max-w-[1140px] m-auto w-full md:flex mt-[-75px]'>
        <div className='relative p-4'>
            <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold'>Resort</h3>
            <img className='w-full h-full object-cover relative border-4 border-white shadow-lg' src={resort}/>
        </div>
       
        <div className='relative p-4'>
            <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold'>Mount</h3>
            <img className='w-full h-full object-cover relative border-4 border-white shadow-lg' src={mount}/>
        </div>
        
        <div className='relative p-4'>
            <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold'>Beach</h3>
            <img className='w-full h-full object-cover relative border-4 border-white shadow-lg' src={beach}/>
        </div>
        
    </div>
  )
}

export default Activities