import React from 'react'
import Background from './../images/bg.jpg'

const Hero=()=> {
  return (
    <div className='w-full h-[90vh] '>
        <img src={Background} className='w-full h-full object-cover'/>

        <div className='max-w-[1140px] m-auto'>
            <div className='absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4'>
                <h1 className='font-bold text-4xl'>Temukan Keindahan Tersembunyi di</h1>
                <h2 className='text-4xl py-4 italic' > Wonderful Indonesia</h2>
                <p>Jelajahi keindahan alam Indonesia mulai dari pantai pasir putih, gunung yang menjulang tinggi, hingga hutan tropis yang eksotis.</p>
            </div>  
        </div>
    </div>
  )
}

export default Hero