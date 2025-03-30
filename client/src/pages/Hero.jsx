import React from 'react'
import {Link} from "react-router-dom";

function Hero() {
  return (
    <div className='h-full w-full flex flex-col justify-center items-center gap-4'>
      <div className='h-[15rem] w-[30rem] rounded-2xl overflow-hidden shadow-2xl'>
        <img className='h-full w-full' src='https://kivuto.com/wp-content/uploads/2021/06/User_Authentication_Best_Practices_Image.jpg' alt='image' />
      </div>
      <span className='bg-gradient-to-r from-orange-500 via-purple-500 to-green-500 text-7xl font-bold bg-clip-text text-transparent'>Welcome to Authentication</span>
      <div className='flex justify-between w-[30rem] text-2xl p-3'>
        <div className='bg-gradient-to-r from-purple-500 to-red-500 p-1 rounded-lg shadow-2xl active:scale-95'>
          <Link to="/api/auth/sign-up"><button className='bg-gray-700 rounded-md px-2 py-1 text-white hover:bg-transparent'>Sign Up</button></Link>
        </div>
        <div className='bg-gradient-to-r from-yellow-500 to-red-500 p-1 rounded-lg shadow-lg active:scale-95'>
          <Link to="/api/auth/sign-in"><button className='bg-gray-700 rounded-md px-2 py-1 text-white hover:bg-transparent'>Sign In</button></Link>
        </div>
      </div>
    </div>
  )
}

export default Hero;