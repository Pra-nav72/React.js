import React from 'react'
import Icons from './Icons';
import Hero from "../assets/vite.svg"
import { FaInstagram, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";


const MainCard = () => {
  return (
    <div className='bg-gray-50 shadow-md h-[75vh] w-[30vw] rounded-3xl overflow-hidden'>

        {/* top */}
      <div className='bg-blue-600 h-50 relative'>
        <img src="https://t3.ftcdn.net/jpg/05/01/01/84/360_F_501018486_SQE0vK8bwMaFAbsHbp5JV2r1rnE1hT9z.jpg" alt="error image" 
        className='absolute h-full aspect-square object-cover rounded-full translate-x-2/3 translate-y-1/3 border-4 border-blue-600 p-1 bg-gray-50'/>
      </div>

      {/* bottom */}
      <div className='flex flex-col items-center pt-20 pb-4'>
        <h2 className='font-extrabold font-serif text-2xl'>Coding Lab</h2>
        <p>Eat.Sleep.Code.Repeat</p>
      </div>
      <div className='flex justify-center text-center'>
        <Icons link="https://www.facebook.com/pranav.k72" Icon={FaFacebook} />
        <Icons link="https://www.instagram.com/pranav.__.k" Icon= {FaInstagram} />
        <Icons link="https://www.github.com/Pra-nav72/" Icon= {FaGithub} />
        <Icons link="https://www.linkedin.com/in/pranav-k-093119242" Icon= {FaLinkedin} />
      </div>
    </div>
  )
}

export default MainCard
