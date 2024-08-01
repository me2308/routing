import React from 'react'

export default function Notfound() {
  return (
    <div className='w-full h-screen text-6xl font-extrabold text-center flex flex-col justify-center items-center mt-10 text-gray-800'>
        <div className='flex py-8'>
        <i class="fa-solid fa-face-angry"></i>
        <h1 >Page Not Found</h1>
        <i class="fa-solid fa-face-angry"></i>
        </div>
        <p>Please Check Your Path </p>

    </div>
  )
}
