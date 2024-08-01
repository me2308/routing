import React from 'react'
import logo from './avataaars.svg'
export default function Home() {
  return (
    <>
    <div className='bg-[#1ABC9C] p-12 text-white flex justify-center items-center text-center  md:mt-24'>
        <div >
            <img src={logo} className=' w-full h-64' alt="" />
        
            <div className='pt-6'>
                <h2 className='mb-4 font-bold text-[40px]'>START FRAMEWORK</h2>
                <div className='flex flex-wrap mb-4 justify-center items-center'>
                <div className='line me-2  w-16 h-1 bg-white '></div>
                <i className='fas fa-star'></i>
                <div className='line ms-2 w-16 h-1 bg-white '></div>
                </div>
            </div>
            <div className='pb-12 mb-8'>Graphic Artist - Web Designer - Illustrator</div>
        </div>

    </div>
    </>
  )
}
