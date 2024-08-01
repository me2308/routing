import React from 'react'

export default function About() {
  return (
    <>
    <div className='bg-[#1ABC9C] text-white h-screen flex flex-col items-center justify-center  md:mt-[105px]'>
        <div className='pt-6'>
            <h2 className='mb-4 font-bold text-center  text-[40px]'>ABOUT COMPONENT</h2>
            <div className='flex flex-wrap mb-4 justify-center items-center'>
                <div className='line me-2  w-16 h-1 bg-white '></div>
                <i className='fas fa-star'></i>
                <div className='line ms-2 w-16 h-1 bg-white '></div>
            </div>
        </div>
        <div className="container ">
            <div className='flex flex-wrap '>
                <p className='w-1/2'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                <p className='w-1/2'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            </div>
        </div>
    </div>
    </>
  )
}
