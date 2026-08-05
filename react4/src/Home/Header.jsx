import React from 'react'
import logo from '../assets/hero.png'

const Header = () => {
  return (
    <div>
        <div className='p-2'>
            <header className='flex justify-between'>
                <div><img src={logo} alt="logo" className='max-w-17'/></div>
                <div className='flex gap-7 my-auto'>
                    <a href=".feature" className=' hover:text-violet-400'>Features</a>
                    <a href="" className=' hover:text-violet-400'>Use Case</a>
                    <a href="" className=' hover:text-violet-400'>About Us</a>
                    <a href="" className=' hover:text-violet-400'>Portfolio</a>
                </div>
                <button className='cursor-pointer bg-violet-400 rounded-lg text-black mx-8 my-auto h-8 px-1.5 hover:text-white hover:bg-violet-800'>Join Us</button>
            </header>
        </div>
    </div>
  )
}

export default Header
