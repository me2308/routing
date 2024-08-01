import React from 'react'
import port1 from './poert1.png'
import port2 from './port2.png'
import port3 from './port3.png'


export default function () {


    function showDetails(e) {
        const holder = e.currentTarget;
        const image = holder.querySelector('img');
        document.querySelector('.lightBox').classList.remove('hidden');
        document.querySelector('.lightBox img').src = image.src;
    }

    function hideDetails(e) {
        const element = e.currentTarget;
        element.classList.add('hidden');
    }
    
  return (
    <>
    <div className='md:mt-20 py-11  '>
        <div className="container ">
        <div className=''>
            <h2 className='text-[#2C3E50] mb-4 font-bold text-center  text-[40px]'>PORTFOLIO COMPONENT</h2>
            <div className='flex flex-wrap mb-4 justify-center items-center'>
                <div className='line  me-2  w-16 h-1 bg-[#2C3E50] '></div>
                <i className='fas fa-star'></i>
                <div className='line ms-2 w-16 h-1 bg-[#2C3E50] '></div>
            </div>
        </div>
            <div className="flex flex-wrap ">
                <div className="inner mt-12 px-6 w-1/3">
                    <div className="relative">
                        <img src={port1} className='itemImg rounded-md' alt="" />
                        <div onClick={showDetails} className='cursor-pointer group transition-all duration-500 flex justify-center items-center absolute inset-y-0 inset-x-0 rounded-md hover:bg-[#1abc9ce6] '>
                            <i className='text-transparent transition-all duration-500 group-hover:text-white fas fa-plus fa-6x'></i>
                        </div>
                    </div>
                </div>
                <div className="inner mt-12 px-6 w-1/3">
                    <div className="relative">
                        <img src={port2} className='itemImg rounded-md' alt="" />
                        <div onClick={showDetails} className='cursor-pointer group transition-all duration-500 flex justify-center items-center absolute inset-y-0 inset-x-0 rounded-md hover:bg-[#1abc9ce6] '>
                            <i className='text-transparent transition-all duration-500 group-hover:text-white fas fa-plus fa-6x'></i>
                        </div>
                    </div>
                </div>
                <div className="inner mt-12 px-6 w-1/3">
                    <div className="relative">
                        <img src={port3} className='itemImg rounded-md' alt="" />
                        <div onClick={showDetails} className='cursor-pointer group transition-all duration-500 flex justify-center items-center absolute inset-y-0 inset-x-0 rounded-md hover:bg-[#1abc9ce6] '>
                            <i className='text-transparent transition-all duration-500 group-hover:text-white fas fa-plus fa-6x'></i>
                        </div>
                    </div>
                </div>
                <div className="inner mt-12 px-6 w-1/3">
                    <div className="relative">
                        <img src={port1} className='itemImg rounded-md' alt="" />
                        <div onClick={showDetails} className='cursor-pointer group transition-all duration-500 flex justify-center items-center absolute inset-y-0 inset-x-0 rounded-md hover:bg-[#1abc9ce6] '>
                            <i className='text-transparent transition-all duration-500 group-hover:text-white fas fa-plus fa-6x'></i>
                        </div>
                    </div>
                </div>
                <div className="inner mt-12 px-6 w-1/3">
                    <div className="relative">
                        <img src={port2} className='itemImg rounded-md' alt="" />
                        <div onClick={showDetails} className='cursor-pointer group transition-all duration-500 flex justify-center items-center absolute inset-y-0 inset-x-0 rounded-md hover:bg-[#1abc9ce6] '>
                            <i className='text-transparent transition-all duration-500 group-hover:text-white fas fa-plus fa-6x'></i>
                        </div>
                    </div>
                </div>
                <div className="inner mt-12 px-6 w-1/3">
                    <div className="relative">
                        <img src={port3} className='itemImg rounded-md' alt="" />
                        <div   onClick={showDetails}className=' cursor-pointer group transition-all duration-500 flex justify-center items-center absolute inset-y-0 inset-x-0 rounded-md hover:bg-[#1abc9ce6] '>
                            <i className='text-transparent transition-all duration-500 group-hover:text-white fas fa-plus fa-6x'></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <div onClick={hideDetails} className="lightBox hidden justify-center items-center fixed inset-y-0 inset-x-0 bg-[#0d6efd40]">
        <img src={port1} className='lightImg w-1/3 h-1/2' alt="" />
    </div>
    
    </>
  )
}
