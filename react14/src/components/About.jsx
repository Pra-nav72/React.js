import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const About = () => {
    const location = useLocation();
    const userId= (location.state?.userId);
    
    
  return (
    <div>
      <h1>This is About Page</h1>
      {userId && <h1>userId coming from Home as navigate hook: {userId} <br /> received with the help of useLocation() hook</h1>}
    </div>
  )
}

export default About
