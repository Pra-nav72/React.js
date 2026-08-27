import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";


const NavBar = () => {
    const [mobileView, setMobileView] = useState(false);
  return (
    <div className='bg-cyan-300 flex justify-between items-center px-6 py-3'>
      <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcmbrOTXckgh8HMdrMK7o792tkaG5Zb-ToVqAAFesn7Q&s=10" alt="profile" 
      className='max-w-10 max-h-10 p-1 bg-red-500 rounded-full'
      /></div>

      <div className='flex justify-evenly w-[50%] text-lg max-[720px]:hidden'>
        <a href="" 
        className='border-b-2 border-transparent pb-0.5 hover:border-b-red-500'>Home</a>
        <a href=""
        className='border-b-2 border-transparent pb-0.5 hover:border-b-red-500'>About</a>
        <a href=""
        className='border-b-2 border-transparent pb-0.5 hover:border-b-red-500'>Profile</a>
        <a href=""
        className='border-b-2 border-transparent pb-0.5 hover:border-b-red-500'>Contact</a>
      </div>

        <div className='flex gap-3 cursor-pointer justify-center items-center'>
            <span className='bg-red-500/80 p-2 rounded-full'>🛒</span>
            <GiHamburgerMenu className='min-[720px]:hidden text-3xl' onClick={()=>{
                setMobileView(!mobileView);
            }}/>
        </div>

        {/* mobile view */}
        <div className={`bg-red-500/80 absolute top-16 right-0 h-screen w-40 flex flex-col py-2 text-xl gap-0.5 ${mobileView ? 'translate-x-0' : 'translate-x-full'} duration-300 min-[720px]:hidden`}>

            <a href="" className='hover:bg-cyan-300 flex items-center justify-center p-3'>Home</a>
            <a href="" className='hover:bg-cyan-300 flex items-center justify-center p-3'>About</a>
            <a href="" className='hover:bg-cyan-300 flex items-center justify-center p-3'>Profile</a>
            <a href="" className='hover:bg-cyan-300 flex items-center justify-center p-3'>Contact</a>
        </div>
    </div>
  )
}

export default NavBar
