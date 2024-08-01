import React from 'react'

export default function Footer() {
  return (
    <>
    
        
        <div className='bg-slate-700 p-10'>
        <footer className='container m-6 text-center   text-white'>
            <div className="flex flex-wrap">
                <div className="w-1/3 p-5">
                <h3 className='text-[28px] font-medium' >LOCATION</h3>
                <p>2215 John Daniel Drive</p>
                <p>Clark, MO 65243</p>
                </div>
                <div className="w-1/3 p-5">
                <h3 className='text-[28px] font-medium'>AROUND THE WEB</h3>
                <div className="icons space-x-2">
                    <i className='fab fa-facebook border-[1px] p-2 border-solid rounded-full'></i>
                    <i className='fab fa-twitter border-[1px] p-2 border-solid rounded-full'></i>
                    <i className='fab fa-linkedin-in border-[1px] p-2 border-solid rounded-full'></i>
                    <i className='fas fa-globe border-[1px] p-2 border-solid rounded-full'></i>
                </div>
                </div>
                <div className="w-1/3 p-5">
                <h3 className='text-[28px] font-medium'>ABOUT FREELANCER</h3>
                <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                </div>
            </div>
        </footer>
    </div>
    <div className="bg-[#1A252F] text-center text-white p-3">
        <p className='pt-3 mb-4'>Copyright © Your Website 2021</p>
    </div>
    
    
    </>
  )
}
