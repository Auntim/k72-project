import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const HomeBottomText = () => {

  return (
    <div className='font-[font2] flex items-center justify-center gap-16 '>
      <p className='absolute lg:w-[16vw] w-64 lg:right-20 right-0 bottom-28  font-[font1] lg:text-lg text-xs lg:leading-relaxed leading-tight'>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; K72 is an agency that builds brands from every angle. Today, tomorrow and years from now. We think the best sparks fly when comfort zones get left behind and friction infuses our strategies, brands and communications with real feeling. We’re transparent, honest and say what we mean, and when we believe in something, we’re all in.</p>


      <div className='lg:border-3 border-2 hover:bg-gray-900 hover:border-[#D3FD50] hover:text-[#D3FD50] flex items-center border-white rounded-full uppercase  px-8 py-2'>
        <Link className='text-[4vw] lg:mt-4' to='/projects'>Projects</Link>
      </div>


      <div className='lg:border-3 border-2 hover:bg-gray-900 hover:border-[#D3FD50] hover:text-[#D3FD50] flex items-center px-8 py-2 border-white rounded-full uppercase'>
        <Link className='text-[4vw] lg:mt-4' to='/agence'>agence</Link>
      </div>
    </div>
  )
}

export default HomeBottomText