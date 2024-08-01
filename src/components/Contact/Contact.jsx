import React from 'react'

export default function Contact() {
  return (
    <>
    <div className='md:mt-20 py-11'>
        <div className=''>
            <h2 className='text-[#2C3E50] mb-4 font-bold text-center  text-[40px]'>CONTACT SECTION</h2>
            <div className='flex flex-wrap mb-4 justify-center items-center'>
                <div className='line  me-2  w-16 h-1 bg-[#2C3E50] '></div>
                <i className='fas fa-star'></i>
                <div className='line ms-2 w-16 h-1 bg-[#2C3E50] '></div>
            </div>
        </div>
        <form className='w-1/2 mx-auto mt-12'>
            <div className='flex flex-col mt-3'>
                <label htmlFor="userName">userName</label>
                <input id="userName"   className='border mt-2 rounded-md h-10 border-t-0 border-e-0 border-s-0 focus:border-0 border-solid' type="text" />
            </div>
            <div className='flex flex-col mt-3'>
                <label htmlFor="userAge">userAge</label>
                <input id="userAge" className='border mt-2 rounded-md h-10 border-t-0 border-e-0 border-s-0 focus:border-0 border-solid' type="text" />
            </div>
            <div className='flex flex-col mt-3'>
                <label htmlFor="userEmail">userEmail</label>
                <input id="userEmail" className='border mt-2 rounded-md h-10 border-t-0 border-e-0 border-s-0 focus:border-0 border-solid' type="text" />
            </div>
            <div className='flex flex-col mt-3'>
                <label htmlFor="userPassword">userPassword</label>
                <input id="userPassword"  className='border mt-2 rounded-md h-10 border-t-0 border-e-0 border-s-0 focus:border-0 border-solid' type="text" />
            </div>
            <button className='bg-[#1ABC9C] text-white rounded-md  mt-6 py-[6px] px-3'>Send Message</button>
        </form>
    </div>
    </>
  )
}
