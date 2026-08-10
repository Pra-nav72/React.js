import React from 'react'

const Hero = (props) => {
  return (
    <div className='bg-violet-600 text-white'>
      This is Hero Section.
      <h3>receiving data from layout, coming from app.jsx</h3>
      <h1>{props.data}</h1>
    </div>
  )
}

export default Hero
