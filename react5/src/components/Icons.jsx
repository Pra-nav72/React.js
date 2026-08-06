import React from 'react'

const Icons = ({link, Icon}) => {
  return (
    <div className='bg-blue-600 rounded-full p-1 m-3 w-10 h-10'>
      <a href={link} target='_blank'>
        <Icon className="text-white text-2xl m-1"/>
        </a>
    </div>
  )
}

export default Icons
