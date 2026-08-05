import React from 'react'
import logo from '../assets/hero.png'
const Footer = () => {
  return (
     <div>
            <div className='p-2'>
                <footer className='grid grid-cols-5'>
                    <div><img src={logo} alt="logo" className='max-w-17'/></div>
                    <div className='flex flex-col gap-2 my-auto'>
                        <a href=".feature" className=' hover:text-violet-400'>Features</a>
                        <a href="" className=' hover:text-violet-400'>Use Case</a>
                        <a href="" className=' hover:text-violet-400'>About Us</a>
                        <a href="" className=' hover:text-violet-400'>Portfolio</a>
                    </div>
                    <div className='flex flex-col gap-2 my-auto'>
                        <a href="" className=' hover:text-violet-400'>company</a>
                        <a href="" className=' hover:text-violet-400'>Media</a>
                        <a href="" className=' hover:text-violet-400'>--</a>
                        <a href="" className=' hover:text-violet-400'>--</a>
                       
                    </div>
                    <div className='flex flex-col gap-2 my-auto'>
                        <a href=".feature" className=' hover:text-violet-400'>Associates</a>
                        <a href="" className=' hover:text-violet-400'>Partners</a>
                        <a href="" className=' hover:text-violet-400'>Share Holders</a>
                        <a href="" className=' hover:text-violet-400'>Board of Directors</a>
                    </div>
                    <div className='flex flex-col gap-2 my-auto'>
                        <a href=".feature" className=' hover:text-violet-400'>Features</a>
                        <a href="" className=' hover:text-violet-400'>Use Case</a>
                        <a href="" className=' hover:text-violet-400'>About Us</a>
                        <a href="" className=' hover:text-violet-400'>Portfolio</a>
                    </div>
                    
                </footer>
            </div>
        </div>
  )
}

export default Footer
