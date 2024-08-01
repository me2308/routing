import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
    <div className=" bg-[#2C3E50] fixed top-0 inset-x-0 z-50 text-white ">
        <div className='  container sm:flex-col   py-6'>
            <nav className='flex  py-2 flex-wrap justify-between items-center'>
                <div className="logo text-4xl  font-bold">
                    <Link className='py-2' to=''>START FRAMEWORK</Link>
                </div>
                <ul className='flex space-x-5 font-bold text-lg '>
                    <li><NavLink className='p-2' to='about'>ABOUT</NavLink></li>
                    <li><NavLink className='p-2' to='portfolio'>PORTFOLIO</NavLink></li>
                    <li><NavLink className='p-2' to='contact'>CONTACT</NavLink></li>
                </ul>
        
            </nav>
        </div>
    </div>
    
    </>
  )
}
