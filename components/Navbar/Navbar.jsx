import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between m-8'>
      <div>
        <p className=' text-3xl text-blue-600 font-bold'>Power<span className='text-3xl text-black font-bold'>Soft</span></p>
      </div>
      <div>
        <button className='p-2 px-4 font-2xl rounded-xl bg-green-500 text-white font-medium'>Login</button>
      </div>
    </div>
  )
}

export default Navbar
